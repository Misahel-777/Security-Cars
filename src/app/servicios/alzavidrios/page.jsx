"use client";
import Image from "next/image";

import Link from "next/link";
import { Zap, Gauge, Cpu, ShieldCheck, Wrench, AlertTriangle, Home,} from "lucide-react";

export default function ServicePage() {
  const service = {
    problems: [
      {
        icon: AlertTriangle,
        title: "El vidrio no sube ni baja",
        description:
          "Puede ser falla del motor o del mecanismo interno. Revisamos antes de reemplazar.",
      },
      {
        icon: Zap,
        title: "El motor suena, pero no funciona",
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
    "Hola 👋, estoy interesado en el servicio de alzavidrios eléctricos."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <main className="bg-gray-50">
      {/* HERO */}
      <section className="bg-linear-to-r from-[#0343eb] to-[#0343eb]/80 text-white py-25 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <header>
              <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Reparación e Instalación de Alza vidrios Eléctricos</h1>
              <p className="text-blue-100 text-lg">¿Tus vidrios se trabaron o suben muy lento? Somos expertos en la reparación e instalación de alza vidrios eléctricos para todo tipo de autos. Te ayudamos con fallas en motores, botones y el módulo alza vidrio de tu vehículo.</p>
              <Link href="/alzavidrio hero.webp" target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 px-8 py-4 rounded-lg font-bold mt-4 hover:bg-green-400">
                Enviar mensaje
              </button>
            </Link>
            </header>
          </div>

          <figure>
            <Image src="/alzavidrio hero.webp" alt="Alza vidrios eléctricos" width={600} height={400} className="rounded-2xl shadow-2xl object-cover"/>
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
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h3 className="text-3xl font-bold">Lo que incluye el servicio</h3>
          </header>
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
          {service.services.map((s, i) => (
            <div key={i} className="p-6 rounded-xl shadow-lg hover:-translate-y-1 transition bg-gray-50">
              <s.icon className="text-[#0343eb] mb-3 w-6 h-6" />
              <h2 className="font-bold mb-2">{s.title}</h2>
              <p className="text-gray-600 text-sm">{s.description}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0343eb] text-white py-16 m-8 flex gap-20 w-2xl items-center mx-auto justify-center rounded-4xl text-center">
        <h2 className="text-3xl font-bold">
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

