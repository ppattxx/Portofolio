"use client";
import React, { useState } from "react";

const defaultFormState = {
  name: { value: "", error: "" },
  email: { value: "", error: "" },
  message: { value: "", error: "" },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: { value, error: "" },
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-xl glass text-sm text-white placeholder-[#c7c7c7]/60 focus:outline-none focus:border-white/30 transition-all duration-300"
          value={formData.name.value}
          onChange={(e) => updateField("name", e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-xl glass text-sm text-white placeholder-[#c7c7c7]/60 focus:outline-none focus:border-white/30 transition-all duration-300"
          value={formData.email.value}
          onChange={(e) => updateField("email", e.target.value)}
        />
      </div>
      <textarea
        placeholder="Your Message"
        rows={6}
        className="w-full px-4 py-3 rounded-xl glass text-sm text-white placeholder-[#c7c7c7]/60 focus:outline-none focus:border-white/30 transition-all duration-300 resize-none"
        value={formData.message.value}
        onChange={(e) => updateField("message", e.target.value)}
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-xl text-sm font-medium transition-all duration-300 text-white h-11 md:h-12 px-6 md:px-8 glass card-hover"
      >
        Send Message
      </button>
    </form>
  );
};
