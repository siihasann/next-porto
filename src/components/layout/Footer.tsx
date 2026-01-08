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
    <footer className="surface-contrast rounded-t-[50px] text-white">
      {/* CTA Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-14 text-center">
          <h2 className="text-4xl lg:text-8xl font-semibold mb-12">
            Have a Cool
            <br />
            Project?
          </h2>

          <button className="group bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl hover:scale-105">
            Contact Me
            <div className="bg-white rounded-full p-2 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight
                className="text-orange-500"
                size={20}
                strokeWidth={2.5}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="w-full px-8 lg:px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 lg:gap-16">
          {/* Profile Section */}
          <div className="md:col-span-3">
            <div className="mb-6">
              <div className="w-32 h-32 rounded-full bg-orange-500 overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Visual Designer Based in
                <br />
                Indonesia
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Navigation</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Social Media</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-lg"
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
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">2023 | Donnie Yen</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
