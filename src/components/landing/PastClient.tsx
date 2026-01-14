"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUpItem, staggerContainer } from "@/lib/animation-templates";

interface Client {
  id: number;
  number: string;
  name: string;
  description: string;
  image: string;
}

const PastClientsSection: React.FC = () => {
  const [hoveredClient, setHoveredClient] = useState<number | null>(null);

  const clients: Client[] = [
    {
      id: 1,
      number: "01",
      name: "FACEBOOK",
      description:
        "Through our community practice, helping one of the world's leading technology companies advise and mentor for an ongoing global initiative that spotlights inspirational YouTube creators.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      number: "02",
      name: "NETFLIX",
      description:
        "Through our community practice, helping one of the world's leading technology companies advise and mentor for an ongoing global initiative that spotlights inspirational YouTube creators.",
      image:
        "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      number: "03",
      name: "GOOGLE",
      description:
        "Through our community practice, helping one of the world's leading technology companies advise and mentor for an ongoing global initiative that spotlights inspirational YouTube creators.",
      image: "",
    },
    {
      id: 4,
      number: "04",
      name: "AMAZON",
      description:
        "Through our community practice, helping one of the world's leading technology companies advise and mentor for an ongoing global initiative that spotlights inspirational YouTube creators.",
      image: "",
    },
  ];

  return (
    <motion.section
      className="min-h-screen py-24"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div className="mb-16" variants={fadeInUpItem}>
          <h2 className="text-lg tracking-[0.45em] text-gray-400 font-medium mb-4">
            PAST CLIENT
          </h2>
        </motion.div>

        {/* Clients List */}
        <div className="space-y-0">
          {clients.map((client) => (
            <motion.div
              key={client.id}
              onMouseEnter={() => setHoveredClient(client.id)}
              onMouseLeave={() => setHoveredClient(null)}
              className="relative border-b border-gray-400 py-14 cursor-pointer group"
              variants={fadeInUpItem}
            >
              <div className="grid grid-cols-12 gap-8 items-start">
                {/* Number */}
                <div className="col-span-1">
                  <span className="text-2xl text-gray-300 font-light">
                    {client.number}
                  </span>
                </div>

                {/* Image Container */}
                <div className="col-span-5 pr-10">
                  <div
                    className={`
                      overflow-hidden rounded-2xl shadow-[0_24px_60px_-30px_rgba(0,0,0,0.6)]
                      transition-all duration-700 ease-out transform-gpu
                      ${
                        hoveredClient === client.id
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-95 pointer-events-none"
                      }
                    `}
                  >
                    {client.image ? (
                      <img
                        src={client.image}
                        alt={client.name}
                        className={`
                          w-full h-auto object-cover rounded-2xl
                          transition-transform duration-700 ease-out
                          ${
                            hoveredClient === client.id
                              ? "scale-105"
                              : "scale-100"
                          }
                        `}
                      />
                    ) : (
                      <div className="flex h-64 items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
                        <span className="text-2xl tracking-wide">
                          {client.name}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="col-span-6">
                  <h3
                    className={`
                      text-5xl font-bold mb-6 tracking-wider
                      transition-colors duration-300
                      ${
                        hoveredClient === client.id
                          ? "text-gray-900"
                          : "text-gray-400"
                      }
                    `}
                  >
                    {client.name}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                    {client.description}
                  </p>
                </div>
              </div>

              {/* Hover indicator line */}
              <div
                className={`
                  absolute left-0 bottom-0 h-0.5 bg-gray-900
                  transition-all duration-500 ease-out
                  ${hoveredClient === client.id ? "w-full" : "w-0"}
                `}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Badge */}
      {/* <div className="fixed bottom-8 right-8">
        <div className="bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          <span className="text-sm font-medium">Made in Framer</span>
        </div>
      </div> */}
    </motion.section>
  );
};

export default PastClientsSection;
