// components/Navbar.jsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <Link href="/" className="logo">
          CODEBREW<span className="version">1.4.5</span>
        </Link>
      </div>
      
      <div className="links">
        <Link href="/products">Products</Link>
        <Link href="/industries">Industries</Link>
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/demos">Live Demos</Link>
      </div>
      
      <Link href="/contact" className="cta">
        Get In Touch →
      </Link>
    </nav>
  );
}