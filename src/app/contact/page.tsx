"use client";

import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    // Ensure fields exist before accessing them
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const messageInput = form.elements.namedItem("message") as HTMLTextAreaElement;

    if (!nameInput || !emailInput || !messageInput) {
      setMessage("Please fill out all fields.");
      return;
    }

    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Message sent successfully!");
        form.reset(); // Clear form after successful submission
      } else {
        setMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setMessage("Error sending message. Check your connection.");
    }
  }

  return (
    <div className="container mx-auto py-20 px-6 max-w-3xl">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-6">Get in Touch</h1>
      <p className="text-lg text-center text-gray-600 mb-10">
        Whether you have a project in mind or just want to say hello, I'm happy to connect.
      </p>

      {/* Professional Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Email</h2>
          <p className="text-gray-600">
            <a href="mailto:jeoppong14@gmail.com" className="text-blue-600 hover:underline">jeoppong14@gmail.com</a>
          </p>
        </div>
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">LinkedIn</h2>
          <p className="text-gray-600">
            <a href="https://www.linkedin.com/in/joshua-oppong-675a54274/" className="text-blue-600 hover:underline">Joshua Oppong</a>
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md p-6 rounded-lg">
        <div>
          <label className="block font-medium">Name</label>
          <input name="name" type="text" placeholder="Your Name" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input name="email" type="email" placeholder="Your Email" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label className="block font-medium">Message</label>
          <textarea name="message" placeholder="Your Message" className="w-full p-2 border rounded" required></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Send Message
        </button>
      </form>

      {/* Display Success/Error Message */}
      {message && <p className="text-center text-green-600 mt-4">{message}</p>}

      {/* Call to Action */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold">Looking for a Developer?</h2>
        <p className="text-gray-600">Let's work together! Reach out to discuss potential projects.</p>
      </div>
    </div>
  );
}
