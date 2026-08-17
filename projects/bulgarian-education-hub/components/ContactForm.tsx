"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    program: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        program: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="card max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 123-4567"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600 transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
            Country
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Your Country"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600 transition"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
            Interested Program
          </label>
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600 transition"
          >
            <option value="">Select a program category</option>
            <option value="Medicine">Medicine & Nursing</option>
            <option value="Veterinary">Veterinary Science</option>
            <option value="Culinary">Culinary Arts</option>
            <option value="Management">Management</option>
            <option value="Technical">Technical Engineering</option>
            <option value="Maritime">Maritime Studies</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us about your educational goals..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600 transition resize-none"
          />
        </div>

        <div className="md:col-span-2">
          {submitted && (
            <div className="mb-4 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg border border-green-300 dark:border-green-700">
              ✓ Thank you! We'll contact you shortly.
            </div>
          )}
          <button
            type="submit"
            className="w-full btn-primary"
          >
            Send Inquiry
          </button>
        </div>
      </div>
    </form>
  );
}
