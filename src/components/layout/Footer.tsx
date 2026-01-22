"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

const Footer: React.FC = () => {
  const navigationLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Work", href: "#work" },
  ];

  const servicesLinks = [
    { name: "Branding", href: "#branding" },
    { name: "UI/UX Design", href: "#design" },
    { name: "Development", href: "#development" },
    { name: "Digital Marketing", href: "#marketing" },
  ];

  const socialLinks = [
    { name: "Dribbble", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
  ];

  return (
    <footer className="surface-contrast rounded-t-[40px] text-white sm:rounded-t-[50px]">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-10 text-center sm:px-8 sm:py-12 lg:px-16 lg:py-14">
          <h2 className="mb-8 text-3xl font-semibold sm:text-4xl lg:mb-12 lg:text-7xl xl:text-8xl">
            Have a Cool
            <br />
            Project?
          </h2>

          <button className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:shadow-xl sm:px-6 sm:py-2.5 sm:text-base lg:text-lg">
            Contact Me
            <div className="bg-white rounded-full p-2 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight
                className="text-orange-500"
                size={18}
                strokeWidth={2.5}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="w-full px-4 py-10 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-6 md:gap-12 lg:gap-16">
          {/* Profile Section */}
          <div className="md:col-span-3">
            <div className="mb-6">
              <div className="mb-5 h-24 w-24 overflow-hidden rounded-full bg-orange-500 sm:h-28 sm:w-28 lg:h-32 lg:w-32">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                Visual Designer Based in
                <br />
                Indonesia
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-semibold sm:mb-6 sm:text-xl">
              Navigation
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-white sm:text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold sm:mb-6 sm:text-xl">
              Services
            </h3>
            <ul className="space-y-2 sm:space-y-4">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-white sm:text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-lg font-semibold sm:mb-6 sm:text-xl">
              Social Media
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-white sm:text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-8 lg:px-16">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row sm:gap-4">
            <p className="text-gray-500 text-sm">2023 | Donnie Yen</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
