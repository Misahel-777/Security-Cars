import Image from "next/image";
import Link from 'next/link';

import { Oswald } from 'next/font/google'

const OswaldFont = Oswald({subsets: ['latin'],weight: ['400', '500', '600', '700']});

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const whatsappText = encodeURIComponent(
  "Hola 👋, estoy interesado en sus servicios"
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

export default function Hero() {
return (
    <section className="relative min-h-screen flex items-center  overflow-hidden">
        <div className="absolute inset-0">
            <Image src="/hero.webp" alt="Interior del auto" fill priority className="object-cover"/>
        </div>
      {/* Overlay oscuro + azul */}
      <div className="absolute inset-0 hero-overlay"></div>

      {/* Contenido */}
      <div className="relative z-20 px-6 max-w-3xl">
        <header>
          <h1 className={`text-7xl md:text-8xl lg:text-9xl font-extrabold text-white ${OswaldFont.className}`}>
          Security <span className="text-blue-600">Cars</span>
        </h1>
        <p className="mt-6 text-white md:text-2xl font-light">
          Sistemas de seguridad y accesorios para autos.
        </p>
        </header>

        <div className="mt-8 flex gap-4">
          <Link href="/#servicios" className="button">Ver servicios</Link>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="button2">Contáctanos</a>
        </div>
      </div>
    </section>
  );
}