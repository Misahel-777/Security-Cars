"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header role="banner" className="z-50">
      <nav id="Inicio" className="bg-white w-full shadow-sm z-50">
        {/* CONTENEDOR */}
        <section className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
          {/* LOGO */}
          <div className="flex items-center">
            <Link href="/#inicio">
              <Image src="/logo.jpg" alt="Logo de la empresa" width={50} height={50} className="rounded-full"/>
            </Link>
          </div>

          {/* MENÚ */}
          <div className="flex items-center">
            {/* Desktop */}
            <ul className="hidden md:flex items-center space-x-8">
              <li><Link href="/" className="nav-link">Inicio</Link></li>
              <li><Link href="/servicios" className="nav-link">Servicios</Link></li>
              <li><Link href="/#faq" className="nav-link">FAQ</Link></li>
              <li><Link href="/#contact" className="nav-link">Contáctanos</Link></li>
            </ul>

            {/* Mobile Button */}
            <div className="md:hidden ml-4">
              <button  onClick={() => setIsOpen(!isOpen)}  className="p-2 text-black focus:outline-none">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </section>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="fixed top-16 left-0 w-full bg-white shadow-lg md:hidden z-40">
            <div className="px-6 py-4 flex flex-col space-y-3">
              <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>Inicio</Link>
              <Link href="/servicios" className="nav-link" onClick={() => setIsOpen(false)}>Servicios</Link>
              <Link href="/#faq" className="nav-link" onClick={() => setIsOpen(false)}>FAQ</Link>
              <Link href="/#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contáctanos</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}