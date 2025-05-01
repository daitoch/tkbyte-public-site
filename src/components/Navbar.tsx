import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Products", path: "/products" },
  { name: "Industries", path: "/industries" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Resources", path: "/resources" },
  { name: "Live Demos", path: "/live-demos" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-base font-medium text-gray-800 hover:text-gray-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button className="bg-brand-green hover:bg-brand-green/90 text-brand-dark font-medium rounded-md px-6 py-2 flex items-center">
            Get In Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "lg:hidden",
          isMobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="space-y-1 px-4 pb-5 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block py-2 text-base font-medium text-gray-800 hover:text-gray-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button 
            className="mt-4 w-full bg-brand-green hover:bg-brand-green/90 text-brand-dark font-medium rounded-md px-4 py-2 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get In Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center">
      <svg width="120" height="60" viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M68 35C62 28 60 16 68 10C76 4 88 8 95 15" stroke="#9AE66E" strokeWidth="8" strokeLinecap="round" />
        <path d="M104 18C110 25 112 37 104 43C96 49 84 45 77 38" stroke="#9AE66E" strokeWidth="8" strokeLinecap="round" />
        <path d="M130 18H140C145.5 18 150 22.5 150 28V28C150 33.5 145.5 38 140 38H130V18Z" fill="#222222"/>
        <path d="M155 18H165C170.5 18 175 22.5 175 28V28C175 33.5 170.5 38 165 38H155V18Z" fill="#222222"/>
        <path d="M180 18H190V28H200V38H180V18Z" fill="#222222"/>
        <path d="M205 18H225V23H210V26H225V38H205V33H220V30H205V18Z" fill="#222222"/>
        <path d="M230 18H235V38H230V18Z" fill="#222222"/>
        <path d="M240 18H250C255.5 18 260 22.5 260 28V28C260 33.5 255.5 38 250 38H240V18Z" fill="#222222"/>
        <path d="M265 18H275C280.5 18 285 22.5 285 28V28C285 33.5 280.5 38 275 38H265V18Z" fill="#222222"/>
        <path d="M290 18H295V38H290V18Z" fill="#222222"/>
        <path d="M245 23H250C252.8 23 255 25.2 255 28V28C255 30.8 252.8 33 250 33H245V23Z" fill="white"/>
        <path d="M270 23H275C277.8 23 280 25.2 280 28V28C280 30.8 277.8 33 275 33H270V23Z" fill="white"/>
        <path d="M135 23H140C142.8 23 145 25.2 145 28V28C145 30.8 142.8 33 140 33H135V23Z" fill="white"/>
        <path d="M160 23H165C167.8 23 170 25.2 170 28V28C170 30.8 167.8 33 165 33H160V23Z" fill="white"/>
      </svg>
    </div>
  );
};

export default Navbar;