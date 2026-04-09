"use client";
import Image from "next/image";

import Link from "next/link";
import { Zap, Gauge, Cpu, ShieldCheck, Wrench, AlertTriangle, Home,} from "lucide-react";

export default function ServicePage() {
  const service = {
    title: "Reparación e Instalación de Alzavidrios Eléctricos",
    description:
      "¿Tus vidrios se trabaron o suben muy lento? Somos expertos en la reparación e instalación de alzavidrios eléctricos para todo tipo de autos. Te ayudamos con fallas en motores, botones y el módulo alzavidrio de tu vehículo.",
    image: "/alzavidrio hero.webp",

    problems: [
      {
        icon: AlertTriangle,
        title: "El vidrio no sube ni baja",
        description:
          "Puede ser falla del motor o del mecanismo interno. Revisamos antes de reemplazar.",
      },
      {
        icon: Zap,
        title: "El motor suena pero no funciona",
        description:
          "Probable daño en cables o engranajes. Lo solucionamos rápido.",
      },
      {
        icon: Gauge,
        title: "Vidrios lentos o forzados",
        description:
          "Puede ser falta de mantenimiento o fallo del sistema.",
      },
    ],

    trabajos: {
      images: [
        "/traalza1.webp",
        "/traalza2.webp",
        "/traalza3.webp",
      ],
    },

    services: [
      {
        icon: Wrench,
        title: "Reparación",
        description:
          "Arreglamos cables, poleas y piezas dañadas.",
      },
      {
        icon: Cpu,
        title: "Instalación",
        description:
          "Convertimos sistemas manuales a eléctricos.",
      },
      {
        icon: Home,
        title: "Servicio a domicilio",
        description:
          "Vamos a tu casa o trabajo.",
      },
      {
        icon: ShieldCheck,
        title: "Mantenimiento",
        description:
          "Revisión completa y prevención de fallas.",
      },
    ],
  };

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const whatsappText = encodeURIComponent(
    "Hola 👋, estoy interesado en el servicio de reparación de alzavidrios eléctricos."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <main className="bg-gray-50">
      {/* HERO */}
      <section className="bg-linear-to-r from-[#0343eb] to-[#0343eb]/80 text-white py-25 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <header>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">{service.title}</h1>
              <p className="text-blue-100 text-lg">{service.description}</p>
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 px-8 py-4 rounded-lg font-bold mt-4 hover:bg-green-400">
                Solicitar por WhatsApp
              </button>
            </Link>
            </header>
          </div>

          <figure>
            <Image src={service.image} alt={service.title} width={600} height={400} className="rounded-2xl shadow-2xl object-cover"/>
          </figure>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <header>
          <h3 className="titulos">Problemas comunes</h3>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.problems.map((p, i) => (
            <article key={i} className="bg-white p-6 rounded-xl shadow">
              <p.icon className="text-[#0343eb] mb-4" />
              <h2 className="font-bold">{p.title}</h2>
              <p className="text-gray-600">{p.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* TRABAJOS */}
      <section className="max-w-5xl mx-auto text-center py-20">
        <header>
          <h3 className="text-4xl font-bold mb-12">Nuestros trabajos</h3>
        </header>
        <div className="grid md:grid-cols-3 px-4 gap-6">
          {service.trabajos.images.map((img, i) => (
            <figure key={i}>
              <Image src={img} alt="Trabajo realizado" width={400} height={300} className="rounded-lg shadow object-cover w-full"/>
            </figure>
          ))}
        </div>
      </section>
      
      {/* SERVICIOS */}
      <section className="py-20 bg-white">
        <header className="text-center mb-12">
          <h3 className="text-3xl font-bold">Lo que incluye el servicio</h3>
          </header>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
          {service.services.map((s, i) => (
            <div key={i} className="p-6 rounded-xl shadow-lg">
              <s.icon className="text-[#0343eb] mb-4" />
              <h2 className="font-bold">{s.title}</h2>
              <p className="text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0343eb] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          ¿Necesitas ayuda?
        </h2>

        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <button className="bg-green-500 px-10 text-[18px] py-4 rounded-lg font-bold cursor-pointer">
            Contactar ahora
          </button>
        </Link>
      </section>
    </main>
  );
}

