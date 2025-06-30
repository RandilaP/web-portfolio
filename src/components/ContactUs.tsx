// src/app/Contact.tsx

'use client'; // This page uses client-side interactivity (form, potential animations)

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BlurText from '@/blocks/TextAnimations/BlurText/BlurText'; 
import Squares from '@/blocks/Backgrounds/Squares/Squares';

// Define social media links (can reuse from layout or define here)
const socialLinks = [
    { platform: "GitHub", href: "https://github.com/RandilaP", iconPath: "/icons/github_icon.svg" }, // <-- Replace YOUR_GITHUB_LINK and icon path
    { platform: "LinkedIn", href: "https://www.linkedin.com/in/randila-premarathne-a7894b239/", iconPath: "/icons/linkedin_icon.svg" }, // <-- Replace YOUR_LINKEDIN_LINK and icon path
    { platform: "Gmail", href: "mailto:randilamenukapremarathne@gmail.com", iconPath: "/icons/gmail_icon.svg" }, // <-- Replace YOUR_EMAIL_ADDRESS and icon path
];

// Define contact information
const contactInfo = {
    email: "randilamenukapremarathne@gmail.com",
};


export default function Contact() {
  // Updated form submission handler to open mail client with mailto link
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Get form values
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const subject = formData.get('subject')?.toString() || '';
    const message = formData.get('message')?.toString() || '';

    // Construct the email body
    const emailBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    // Encode subject and body for the mailto link
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(emailBody);

    // Construct the mailto link
    const mailtoLink = `mailto:${contactInfo.email}?subject=${encodedSubject}&body=${encodedBody}`;

    // Open the default email client
    window.location.href = mailtoLink;

    // Optional: You might want to reset the form after opening the mail client
    // form.reset();
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 py-12 overflow-hidden sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="relative z-10 mb-12 text-center md:mb-16">
        {/* Using BlurText for consistency, adjust as needed */}
        <BlurText
          text="Get In Touch"
          delay={50}
          animateBy="letters"
          direction="top"
          className="text-4xl font-extrabold text-center sm:text-5xl md:text-6xl"
        />
      </div>

      {/* Contact Content Container */}
      <div className="relative z-10 grid w-full max-w-md grid-cols-1 gap-12 mx-auto md:max-w-3xl lg:max-w-4xl md:grid-cols-2">

        {/* Contact Information Section */}
        <div className="flex flex-col space-y-6">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Contact Information</h2>
          {contactInfo.email && (
            <div className="flex items-center text-white/80">
              {/* You can add an icon here, e.g., a mail icon SVG or Image */}
              <span className="mr-2 text-cyan-500">📧</span> {/* Example icon */}
              <a href={`mailto:${contactInfo.email}`} className="text-base hover:underline sm:text-lg">{contactInfo.email}</a>
            </div>
          )}
          {/* Add phone and location here if included in contactInfo */}
          {/*
          {contactInfo.phone && (
            <div className="flex items-center text-white/80">
              <span className="mr-2 text-cyan-500">📞</span>
              <a href={`tel:${contactInfo.phone}`} className="text-base hover:underline sm:text-lg">{contactInfo.phone}</a>
            </div>
          )}
          {contactInfo.location && (
            <div className="flex items-center text-white/80">
              <span className="mr-2 text-cyan-500">📍</span>
              <span className="text-base sm:text-lg">{contactInfo.location}</span>
            </div>
          )}
          */}

          {/* Social Media Links */}
          <div className="mt-8">
            <h3 className="mb-4 text-xl font-bold sm:text-2xl">Connect with Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-200 hover:scale-110"
                >
                  <Image
                    src={link.iconPath} // Use the icon path
                    alt={`${link.platform} icon`}
                    width={30} // Adjust size as needed
                    height={30} // Adjust size as needed
                    className="object-contain w-7 h-7 sm:w-8 sm:h-8" // Responsive sizing
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div>
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Send a Message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium text-white/80">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 bg-[#1a1b1c] border border-white/[.15] rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium text-white/80">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 bg-[#1a1b1c] border border-white/[.15] rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-1 text-sm font-medium text-white/80">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 bg-[#1a1b1c] border border-white/[.15] rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium text-white/80">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 bg-[#1a1b1c] border border-white/[.15] rounded-md focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white transition duration-200 rounded-md bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>

      {/* Square background - positioned relative to this component only */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-15">
        <Squares 
          speed={0.5} 
          squareSize={40} // Adjust size as needed
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#fff'
          hoverFillColor='#222'
        />
      </div>

      {/* Optional: Add a footer here if this page doesn't use the global layout footer */}
       {/* <footer className="mt-16 text-sm text-center text-white/50">
         <p>&copy; {new Date().getFullYear()} Lauvigne Lumeda. All rights reserved.</p>
       </footer> */}
    </div>
  );
}
