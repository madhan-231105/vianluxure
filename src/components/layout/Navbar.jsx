"use client";
import { useState, useEffect } from "react";
import { ShoppingBag, Search, Menu } from "lucide-react";
import { Container } from "@/components/common/Container";
import { NAV_LINKS } from "@/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${
      isScrolled ? "bg-vian-bg/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
    }`}>
      <Container className="flex items-center justify-between">
        {/* Left: Links */}
        <div className="hidden md:flex flex-1 gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="text-[10px] uppercase tracking-widest hover:text-vian-gold transition-colors font-sans">
              {link.name}
            </a>
          ))}
        </div>

        {/* Center: Brand */}
        <div className="flex-1 text-center">
          <h1 className="text-2xl font-serif tracking-[0.3em] uppercase cursor-pointer">
            Vian Luxure
          </h1>
        </div>

        {/* Right: Icons */}
        <div className="flex-1 flex justify-end items-center gap-6">
          <Search size={18} strokeWidth={1.2} className="cursor-pointer" />
          <div className="relative cursor-pointer">
            <ShoppingBag size={18} strokeWidth={1.2} />
            <span className="absolute -top-2 -right-2 text-[8px] bg-vian-gold text-white w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>
          <Menu size={18} strokeWidth={1.2} className="md:hidden cursor-pointer" />
        </div>
      </Container>
    </nav>
  );
}