"use client";

import { motion } from "framer-motion";
import { fadeInUpItem, staggerContainer } from "@/lib/animation-templates";

const reviews = [
  {
    id: "01",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    name: "Briar Martin",
    handle: "@neilstellar",
    quote:
      "Radiant made undercutting all of our competitors an absolute breeze.",
  },
  {
    id: "02",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    name: "Avery Johnson",
    handle: "@averywrites",
    quote: "The rollout was smooth and our team shipped in record time.",
  },
  {
    id: "03",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
    name: "Jordan Lee",
    handle: "@jordantalks",
    quote: "Designs that feel premium and still convert like crazy.",
  },
  {
    id: "04",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
    name: "Marin Blake",
    handle: "@marinblake",
    quote: "Clear process, bold visuals, and the polish we wanted.",
  },
  {
    id: "05",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=60",
    name: "Daria West",
    handle: "@dariawest",
    quote: "Felt like a true partner from discovery to launch.",
  },
];

const marqueeItems = [...reviews, ...reviews];

export default function ClientReviewSection() {
  return (
    <motion.section
      className="mt-16 rounded-[28px] px-4 py-12 sm:rounded-[34px] sm:px-10 sm:py-16 lg:px-16"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track {
          animation: marquee-scroll 28s linear infinite;
          will-change: transform;
        }

        .marquee-reverse {
          animation-direction: reverse;
        }

        .marquee-row {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 12%,
            black 88%,
            transparent 100%
          );
        }

        .marquee-row:hover .marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <motion.div className="text-center" variants={fadeInUpItem}>
          <motion.p
            variants={fadeInUpItem}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400 sm:tracking-[0.4em]"
          >
            Client Reviews
          </motion.p>
          <motion.h2
            variants={fadeInUpItem}
            className="font-display mt-4 text-2xl font-semibold text-ink sm:text-4xl lg:text-5xl"
          >
            Kind words from teams we ship with
          </motion.h2>
          <motion.p
            variants={fadeInUpItem}
            className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-ink-muted sm:text-base"
          >
            Feedback from partners who trusted me with strategy, visual systems,
            and full-stack execution.
          </motion.p>
        </motion.div>

        <div className="mt-10 space-y-6 sm:mt-12">
          {["normal", "reverse"].map((direction) => (
            <motion.div
              key={direction}
              className="marquee-row relative overflow-hidden rounded-[28px] border border-zinc-100 "
              variants={fadeInUpItem}
            >
              <div
                className={`marquee-track flex min-w-[200%] gap-4 px-3 py-4 sm:gap-6 sm:px-4 sm:py-6 ${
                  direction === "reverse" ? "marquee-reverse" : ""
                }`}
              >
                {marqueeItems.map((card, index) => (
                  <article
                    key={`${card.id}-${index}`}
                    className="w-64 shrink-0 rounded-2xl border border-zinc-100 p-4 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.5)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-26px_rgba(15,23,42,0.6)] sm:w-72 sm:p-5"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        className="h-11 w-11 rounded-full object-cover"
                        src={card.image}
                        alt={card.name}
                        loading="lazy"
                        decoding="async"
                      />
                      <div>
                        <div className="flex items-center gap-1 text-sm font-semibold text-ink">
                          {card.name}
                          <svg
                            className="mt-0.5 h-3 w-3 fill-blue-500"
                            viewBox="0 0 12 12"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z"
                            />
                          </svg>
                        </div>
                        <span className="text-xs text-ink-muted">
                          {card.handle}
                        </span>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-zinc-700">
                      {card.quote}
                    </p>
                  </article>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
