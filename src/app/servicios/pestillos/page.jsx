"use client";
import Image from "next/image";
import Link from "next/link";
import { Volume2, AlertTriangle, Settings, Wrench, Cable, CheckCircle, Lock, ShieldCheck, ArrowRight } from "lucide-react";

export default function ServicePage() {

const serviceData = {
  title: "Reparación de Pestillos Eléctricos y Cierre Centralizado",
  description:
    "¿Tus seguros no bajan? Ofrecemos el mejor servicio de instalación y reparación de cierre centralizado para autos. Soluciones rápidas en pestillos eléctricos para que tu auto quede seguro y moderno a un precio justo.",
  image: "/pestilloshero.webp",

  problems: [
    {
      icon: Lock,
      title: "El cierre centralizado no funciona",
      description:
        "¿Una puerta se queda abierta? Reparamos el cierre centralizado de tu auto para que vuelvas a tener el control total desde tu control remoto.",
    },
    {
      icon: Volume2,
      title: "Ruidos molestos en las puertas",
      description:
        "Si tus seguros suenan trabados o hacen ruidos extraños, es hora de cambiar el motor del pestillo antes de que la puerta se bloquee por completo.",
    },
    {
      icon: AlertTriangle,
      title: "Seguros lentos o intermitentes",
      description:
        "Evita que el cierre centralizado de puertas falle cuando más lo necesitas. Limpiamos y reparamos el sistema para que funcione como nuevo.",
    },
  ],

  trabajos: {
    images: ["/pestilloselectricos.webp"],
  },

  services: [
    {
      icon: Settings,
      title: "Chequeo Eléctrico",
      description:
        "Revisamos tu cierre centralizado para autos sin riesgos. Usamos herramientas que protegen la computadora de tu vehículo.",
    },
    {
      icon: Wrench,
      title: "Reparación de Pestillos",
      description:
        "Restauramos la fuerza de los actuadores y la movilidad axial de las chapas, extendiendo la vida útil de tus cerraduras originales.",
    },
    {
      icon: Cable,
      title: "Instalación de Sistemas Universales",
      description:
        "Ponemos cierre centralizado universal en coches de 2, 4 y 5 puertas. Incluye todo lo necesario para que tu auto quede full equipo.",
    },
    {
      icon: CheckCircle,
      title: "Garantía de Funcionamiento",
      description:
        "Entregamos tu cierre centralizado instalado y probado. Verificamos que no consuma batería y que cierre perfecto al arrancar.",
    },
  ],
};

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const whatsappText = encodeURIComponent(
  "Hola 👋, estoy interesado en el servicio de reparación de pestillos eléctricos y cierre centralizado. ¿Podrían brindarme más información y un precio aproximado?"
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <main >
      {/* HERO */}
      <section className="bg-linear-to-r from-[#0343eb] to-[#0343eb]/80 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <header>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{serviceData.title}</h1>
              <p className="text-blue-100 text-lg">{serviceData.description}</p>
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 px-8 mt-5 py-4 rounded-lg font-bold hover:bg-green-400 transition">
                Solicitar por WhatsApp
              </button>
            </Link>
            </header>
          </div>
          <figure>
            <Image src={serviceData.image} alt="" width={700} height={500} className="rounded-2xl overflow-hidden shadow-2xl"/>
          </figure>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <header className="text-center mb-12">
          <h3 className="text-3xl font-bold">Problemas comunes</h3>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.problems.map((problem, index) => (
            <article key={index} className="bg-white p-8 rounded-2xl shadow">
              <problem.icon className="w-6 h-6 text-[#0343eb] mb-4" />
              <h2 className="font-bold mb-2">{problem.title}</h2>
              <p className="text-gray-600">{problem.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* TRABAJOS */}
      <section className="max-w-4xl mx-auto text-center pb-20">
        <header><h3 className="text-3xl font-bold mb-8">Nuestros trabajos</h3></header>
        <div className="grid md:grid-cols-3 gap-6 px-4">
          {serviceData.trabajos.images.map((img, i) => (
            <figure key={i}>
              <Image src={img} alt="" width={500} height={350} className="rounded-lg"/>
            </figure>
          ))}
        </div>
      </section>
      {/* SERVICIOS */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h3 className="text-3xl font-bold">Lo que incluye el servicio</h3>
          </header>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.services.map((service, index) => (
              <article key={index} className="p-6 rounded-xl shadow-lg hover:-translate-y-1 transition bg-gray-50">
                <service.icon className="text-[#0343eb] mb-3 w-6 h-6" />
                <h2 className="font-bold mb-2">{service.title}</h2>
                <p className="text-sm text-gray-600">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0343eb] text-white text-center py-16 m-8 flex gap-20 w-2xl items-center mx-auto justify-center rounded-4xl">
        <h2 className="text-3xl font-bold">¿Necesitas ayuda?</h2>
        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <button className="bg-green-500 px-10 py-4 text-[18px] rounded-lg font-bold cursor-pointer">
            Contactar ahora
          </button>
        </Link>
      </section>

    </main>
  );
}
