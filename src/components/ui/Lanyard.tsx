/* eslint-disable react/no-unknown-property */
"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from "@react-three/drei";
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RigidBodyProps,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import * as THREE from "three";

/**
 * IMPORTANT:
 * - assets must live in public/assets/lanyard/card.glb and lanyard.png
 * - create the TS declaration file src/types/meshline.d.ts (see next section)
 */

// extend R3F with meshline intrinsic elements (note lowercase keys)
extend({
  MeshLineGeometry,
  MeshLineMaterial,
});

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  className?: string;
  cardImageUrl?: string;
}

const EMPTY_TEXTURE =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiLz48L3N2Zz4=";

function createTrimmedCanvas(image: HTMLImageElement | HTMLCanvasElement) {
  const sourceCanvas = document.createElement("canvas");
  sourceCanvas.width = image.width;
  sourceCanvas.height = image.height;

  const sourceContext = sourceCanvas.getContext("2d");
  if (!sourceContext) return null;

  sourceContext.drawImage(image, 0, 0);

  const { data, width, height } = sourceContext.getImageData(
    0,
    0,
    sourceCanvas.width,
    sourceCanvas.height,
  );

  let top = height;
  let left = width;
  let right = 0;
  let bottom = 0;

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const alpha = data[(y * width + x) * 4 + 3];

      if (alpha <= 12) continue;

      if (x < left) left = x;
      if (x > right) right = x;
      if (y < top) top = y;
      if (y > bottom) bottom = y;
    }
  }

  if (left > right || top > bottom) return null;

  const trimmedCanvas = document.createElement("canvas");
  trimmedCanvas.width = right - left + 1;
  trimmedCanvas.height = bottom - top + 1;

  const trimmedContext = trimmedCanvas.getContext("2d");
  if (!trimmedContext) return null;

  trimmedContext.drawImage(
    sourceCanvas,
    left,
    top,
    trimmedCanvas.width,
    trimmedCanvas.height,
    0,
    0,
    trimmedCanvas.width,
    trimmedCanvas.height,
  );

  return trimmedCanvas;
}

function createTrimmedPhotoTexture(
  image: HTMLImageElement | HTMLCanvasElement,
) {
  const trimmedCanvas = createTrimmedCanvas(image);
  if (!trimmedCanvas) return null;
  const texture = new THREE.CanvasTexture(trimmedCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  texture.needsUpdate = true;

  return {
    texture,
    width: trimmedCanvas.width,
    height: trimmedCanvas.height,
  };
}

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
  className,
  cardImageUrl,
}: LanyardProps) {
  const [isMobile, setIsMobile] = useState(() => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`relative z-0 flex w-full items-center justify-center ${
        className ?? "h-screen"
      }`}
    >
      <Canvas
        camera={{ position, fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1);
        }}
      >
        <ambientLight intensity={Math.PI} />

        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band isMobile={isMobile} cardImageUrl={cardImageUrl} />
        </Physics>

        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
  isMobile?: boolean;
  cardImageUrl?: string;
}

function Band({
  maxSpeed = 50,
  minSpeed = 0,
  isMobile = false,
  cardImageUrl,
}: BandProps) {
  // load model + texture inside component
  const { nodes, materials } = useGLTF("/assets/lanyard/card.glb") as any;
  const texture = useTexture("/assets/lanyard/lanyard.png");
  const cardImageTexture = useTexture(cardImageUrl || EMPTY_TEXTURE);

  // refs
  const band = useRef<any>(null);
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps: RigidBodyProps = {
    type: "dynamic",
    canSleep: true,
    colliders: false,
    angularDamping: 4,
    linearDamping: 4,
  };

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ]),
  );

  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);
  const [photoMap, setPhotoMap] = useState<{
    texture: THREE.Texture;
    width: number;
    height: number;
  } | null>(null);

  // ensure texture repeats
  if (texture) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  }

  if (cardImageTexture) {
    cardImageTexture.colorSpace = THREE.SRGBColorSpace;
    cardImageTexture.anisotropy = 8;
  }

  useEffect(() => {
    if (!cardImageUrl || !cardImageTexture?.image) {
      setPhotoMap(null);
      return;
    }

    const nextPhoto = createTrimmedPhotoTexture(
      cardImageTexture.image as HTMLImageElement | HTMLCanvasElement,
    );

    setPhotoMap((current) => {
      if (
        current &&
        current.texture !== materials.base.map &&
        current.texture !== cardImageTexture
      ) {
        current.texture.dispose();
      }

      return nextPhoto;
    });
  }, [cardImageTexture, cardImageUrl, materials.base.map]);

  useEffect(() => {
    return () => {
      if (
        photoMap &&
        photoMap.texture !== materials.base.map &&
        photoMap.texture !== cardImageTexture
      ) {
        photoMap.texture.dispose();
      }
    };
  }, [cardImageTexture, materials.base.map, photoMap]);

  const photoAspect = photoMap ? photoMap.width / photoMap.height : 0.56;
  const maxPhotoWidth = 0.38;
  const maxPhotoHeight = 0.58;
  let photoWidth = maxPhotoWidth;
  let photoHeight = photoWidth / photoAspect;

  if (photoHeight > maxPhotoHeight) {
    photoHeight = maxPhotoHeight;
    photoWidth = photoHeight * photoAspect;
  }

  // joints
  const ropeLength = isMobile ? 1.3 : 1;
  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], ropeLength]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], ropeLength]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], ropeLength]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => {
        document.body.style.cursor = "auto";
      };
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    // dragging logic
    if (dragged && typeof dragged !== "boolean") {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));

      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    // rope simulation
    if (fixed.current) {
      [j1, j2].forEach((ref) => {
        if (!ref.current.lerped)
          ref.current.lerped = new THREE.Vector3().copy(
            ref.current.translation(),
          );

        const dist = ref.current.lerped.distanceTo(ref.current.translation());
        const clamped = Math.max(0.1, Math.min(1, dist));

        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clamped * (maxSpeed - minSpeed)),
        );
      });

      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));

      // stabilize rotation
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  return (
    <>
      <group position={[0, 5, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />

        <RigidBody ref={j1} {...segmentProps} position={[0.5, 0, 0]}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody ref={j2} {...segmentProps} position={[1, 0, 0]}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody ref={j3} {...segmentProps} position={[1.5, 0, 0]}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody
          ref={card}
          {...segmentProps}
          type={dragged ? "kinematicPosition" : "dynamic"}
          position={[2, 0, 0]}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />

          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => {
              e.target.releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e: any) => {
              e.target.setPointerCapture(e.pointerId);
              drag(
                new THREE.Vector3()
                  .copy(e.point)
                  .sub(new THREE.Vector3().copy(card.current.translation())),
              );
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.base.map}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>

            {photoMap ? (
              <>
                <mesh position={[0, 0.5, 0.011]} renderOrder={1}>
                  <planeGeometry args={[0.68, 0.94]} />
                  <meshStandardMaterial
                    color="#f2f1eb"
                    roughness={0.8}
                    metalness={0.02}
                  />
                </mesh>

                <mesh position={[0, 0.31, 0.013]} renderOrder={2}>
                  <planeGeometry args={[photoWidth, photoHeight]} />
                  <meshStandardMaterial
                    map={photoMap.texture}
                    transparent
                    alphaTest={0.06}
                    roughness={0.76}
                    metalness={0.03}
                  />
                </mesh>
              </>
            ) : null}

            <mesh geometry={nodes.clip.geometry} material={materials.metal} />

            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        {/* use intrinsic elements provided via extend (lowercase keys) */}
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={false}
          resolution={isMobile ? [1000, 1000] : [3000, 3000]}
          useMap
          map={texture}
          repeat={[-4, 1]}
          lineWidth={2}
          lineHeight={0.2}
        />
      </mesh>
    </>
  );
}

// preload model for faster load (allowed)
useGLTF.preload("/assets/lanyard/card.glb");
