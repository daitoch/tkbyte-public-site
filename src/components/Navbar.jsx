'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-green-500 text-2xl font-bold">⧉</div>
          <span className="font-bold text-xl text-gray-800">CODEBREW LABS</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="#">Products</Link>
          <Link href="#">Industries</Link>
          <Link href="#">Services</Link>
          <Link href="#">Portfolio</Link>
          <Link href="#">Resources</Link>
          <Link href="#">Live Demos</Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#"
            className="bg-lime-400 hover:bg-lime-500 text-white font-semibold px-4 py-2 rounded-full flex items-center space-x-2 transition"
          >
            <span>Get In Touch</span>
            <span>➡️</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <d
