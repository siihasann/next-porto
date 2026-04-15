"use client";

import React, { useState } from "react";
import { Dribbble, GithubIcon, Instagram, Linkedin, Mail } from "lucide-react";
import Lanyard from "../ui/Lanyard";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/siihasann",
    Icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/siihasann",
    Icon: Linkedin,
  },
  { label: "GitHub", href: "https://github.com/siihasann", Icon: GithubIcon },
  // { label: "Dribbble", href: "https://dribbble.com", Icon: Dribbble },
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
    <section className="surface-contrast relative overflow-hidden rounded-[26px] px-4 py-10 text-white shadow-[0_30px_60px_-40px_rgba(0,0,0,0.65)] sm:rounded-[34px] sm:px-8 sm:py-14 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left Side - Profile Image */}
          <div className="flex flex-col items-center gap-6 sm:gap-8 lg:items-start">
            {/* Contact Label */}
            <div className="w-full text-center lg:text-left">
              <p className="text-xs font-light uppercase tracking-[0.3em] text-white sm:text-sm lg:text-lg">
                CONTACT
              </p>
            </div>

            {/* Profile Image - Centered */}
            <div className="w-full max-w-sm rounded-[30px] border border-white/5 bg-white/[0.03] px-2 pb-6 pt-2 sm:max-w-min sm:px-4 sm:pb-6 sm:pt-4 lg:max-w-none lg:border-0 lg:bg-transparent lg:px-0 lg:pb-0">
              <Lanyard
                position={[0, 0, 20]}
                gravity={[0, -40, 0]}
                className="h-[600px] sm:h-96 lg:h-[720px]"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex flex-col justify-center">
            <div className="mx-auto w-full max-w-xl space-y-6 rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-[0_20px_50px_-40px_rgba(0,0,0,0.8)] sm:space-y-8 sm:rounded-[28px] sm:p-8 lg:mx-0 lg:max-w-none lg:rounded-[30px]">
              {/* Heading */}
              <div className="mb-6 space-y-3 text-center sm:mb-8 sm:space-y-4 lg:text-left">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Let's Collaborate!
                </h2>
                <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base lg:mx-0 lg:max-w-none lg:text-lg">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions. Feel free to reach
                  out using the form or connect with me on social media!
                </p>
              </div>

              {/* Form Inputs */}
              <div className="space-y-5 sm:space-y-6">
                {/* Name Input */}
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  className={`w-full rounded-2xl border bg-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 transition-all duration-300 focus:bg-white/5 focus:outline-none focus:border-orange-500 sm:px-6 sm:py-4 sm:text-base ${
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
                  className={`w-full rounded-2xl border bg-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 transition-all duration-300 focus:bg-white/5 focus:outline-none focus:border-orange-500 sm:px-6 sm:py-4 sm:text-base ${
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
                  className="w-full resize-none rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 transition-all duration-300 focus:bg-white/5 focus:outline-none focus:border-orange-500 sm:px-6 sm:py-4 sm:text-base"
                />
                <div className="flex flex-col gap-2 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-center sm:text-left">
                    Keep it short and sweet.
                  </span>
                  <span className="text-center sm:text-right">
                    {formData.message.length}/400
                  </span>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  className="w-full rounded-2xl bg-white py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-white/90 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 sm:py-5"
                >
                  {status === "loading" ? "Sending..." : "Submit"}
                </button>
                {status === "success" ? (
                  <p className="text-sm text-center text-emerald-300 lg:text-left">
                    Message ready to send. We will get back to you soon.
                  </p>
                ) : null}
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-center text-xs uppercase tracking-[0.3em] text-gray-400 sm:text-left">
                  Social
                </p>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-center text-xs font-semibold text-white/90 transition hover:border-white/40 hover:bg-white/10 sm:text-sm"
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
    </section>
  );
};

export default ContactSection;
