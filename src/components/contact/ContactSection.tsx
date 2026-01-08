"use client";

import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle form submission logic here
    alert("Form submitted! Check console for data.");
  };

  return (
    <section className="surface-contrast rounded-[34px] py-14 text-white shadow-[0_30px_60px_-40px_rgba(0,0,0,0.65)] sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto w-full">
        <div>
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Profile Image */}
            <div className="relative flex flex-col justify-between min-h-[500px]">
              {/* Contact Label */}
              <div>
                <p className="text-white text-lg tracking-[0.3em] uppercase font-light">
                  CONTACT
                </p>
              </div>

              {/* Profile Image - Centered */}
              <div className="flex items-center flex-1">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-orange-500 overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Empty space for balance */}
              <div></div>
            </div>

            {/* Right Side - Form */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                {/* Heading */}
                <div className="space-y-4 mb-8">
                  <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                    Let's Collaborate!
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua minim veniam, quis nostrud.
                  </p>
                </div>

                {/* Form Inputs */}
                <div className="space-y-6">
                  {/* Name Input */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white/5 transition-all duration-300"
                  />

                  {/* Email Input */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white/5 transition-all duration-300"
                  />

                  {/* Message Textarea */}
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white/5 transition-all duration-300 resize-none"
                  />

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
