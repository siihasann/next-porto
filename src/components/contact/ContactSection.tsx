"use client";

import React, { useState } from "react";
import { Dribbble, Instagram, Linkedin, Mail } from "lucide-react";
import Lanyard from "../ui/Lanyard";

const socials = [
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "Email", href: "mailto:hello@example.com", Icon: Mail },
  { label: "Dribbble", href: "https://dribbble.com", Icon: Dribbble },
];

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (status !== "idle") {
      setStatus("idle");
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name as "name" | "email"]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = () => {
    const nextErrors: { name?: string; email?: string } = {};
    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 700);
  };

  return (
    <section className="surface-contrast rounded-[34px] py-16 text-white shadow-[0_30px_60px_-40px_rgba(0,0,0,0.65)] sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto w-full">
        <div>
          <div className="grid lg:grid-cols-2 gap-12">
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
                <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
              </div>

              {/* Empty space for balance */}
              <div></div>
            </div>

            {/* Right Side - Form */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8 rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.8)]">
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
                    aria-invalid={Boolean(errors.name)}
                    className={`w-full px-6 py-4 bg-white/10 border rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white/5 transition-all duration-300 ${
                      errors.name ? "border-red-400/70" : "border-white/20"
                    }`}
                  />
                  {errors.name ? (
                    <p className="text-sm text-red-300">{errors.name}</p>
                  ) : null}

                  {/* Email Input */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    className={`w-full px-6 py-4 bg-white/10 border rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white/5 transition-all duration-300 ${
                      errors.email ? "border-red-400/70" : "border-white/20"
                    }`}
                  />
                  {errors.email ? (
                    <p className="text-sm text-red-300">{errors.email}</p>
                  ) : null}

                  {/* Message Textarea */}
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white/5 transition-all duration-300 resize-none"
                  />
                  <div className="flex items-center justify-between text-xs text-white/50">
                    <span>Keep it short and sweet.</span>
                    <span>{formData.message.length}/400</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" ? "Sending..." : "Submit"}
                  </button>
                  {status === "success" ? (
                    <p className="text-sm text-emerald-300">
                      Message ready to send. We will get back to you soon.
                    </p>
                  ) : null}
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    Social
                  </p>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-center text-sm font-semibold text-white/90 transition hover:border-white/40 hover:bg-white/10"
                      >
                        <social.Icon className="h-4 w-4" aria-hidden="true" />
                        {social.label}
                      </a>
                    ))}
                  </div>
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
