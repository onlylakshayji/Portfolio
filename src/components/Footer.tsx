"use client";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 p-6 text-sm text-gray-600 flex flex-col items-center gap-4">
    {/* Designed By */}
    <div>© {new Date().getFullYear()} Designed & Built by <span className="font-semibold">Lakshay Bansal</span></div>
  
    {/* Social Links */}
    <div className="flex gap-4">
      <a href="https://github.com/LakshayxBansal" target="_blank" rel="noopener noreferrer">
        <FaGithub className="h-6 w-6 hover:text-black transition" />
      </a>
      <a href="https://instagram.com/onlylakshayji" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="h-6 w-6 hover:text-pink-500 transition" />
      </a>
      <a href="https://x.com/LBansal_123" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="h-6 w-6 hover:text-blue-500 transition" />
      </a>
      <a href="https://www.linkedin.com/in/lakshay-bansal-2b5926250/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="h-6 w-6 hover:text-blue-700 transition" />
      </a>
    </div>
  
    {/* Personal Website */}
    <div>
      <a 
        href="https://lakshayxbansal.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="underline hover:text-blue-600 transition"
      >
        Visit My Website
      </a>
    </div>
  </footer>
  );
};
