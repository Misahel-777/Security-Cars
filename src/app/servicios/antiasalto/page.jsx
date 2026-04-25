import Image from "next/image";

import {ChevronDown} from 'lucide-react';

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const whatsappText = encodeURIComponent(
  "Hola estoy interesado en el Anti-asalto"
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

export default function Hero() {
const features = [
  {
    title: "Inmovilización del vehículo por estacionamiento",
    desc: "Al momento de estacionar su vehículo, el sistema se activa automáticamente después del minuto y medio bloqueando el motor. Esto garantiza que incluso si un ladrón logra ingresar al vehículo, no podrá arrancarlo sin su autorización.",
  },
  {
    title: "Protección modo anti a atraco",
    desc: "Si lo bajan forzosamente del vehículo, el ladrón podrá llevarse el vehículo pero al minuto y medio se bloqueará el motor automáticamente, aumentando las posibilidades de recuperación y reduciendo el riesgo para el conductor.",
  },
    {
    title: "Modo Valet Inteligente",
    desc: "Entrega tu auto para mantenimiento sin revelar tu sistema de seguridad. El sistema permanece oculto y bajo tu control absoluto y lo activas al momento de que usted sale del mantenimiento de su vehículo",
  },
  {
    title: "Bloqueo electrónico con código (muy pronto)",
    desc: "",
  },
];

const stats = [
  { value: "+3000", label: "Vehículos" },
  { value: "+20", label: "Años" },
  { value: "+4000", label: "Clientes" },
  { value: "24/7", label: "Soporte" },
];

const faqs = [
  {
    q: "¿Afecta la garantía de mi auto nuevo?",
    a: "No. No afecta la garantía la instalación se hace con técnicos especializados.",
  },
  {
    q: "¿Es peligroso que el auto se detenga en marcha?",
    a: "En absoluto. El protocolo de apagado es progresivo y emite alertas sonoras previas, permitiendo una detención segura que prioriza tanto la seguridad vial como la integridad del conductor.",
  },
  {
    q: "¿Qué sucede si pierdo mi chip o control de proximidad?",
    a: "El sistema cuenta con un método de desactivación de emergencia el cual el técnico le va a enseñar a la hora de la instalación.",
  },
];

  return (
    <>
    <section className="relative min-h-screen flex items-center">

      {/* Imagen */}
      <div className="absolute inset-0">
        <Image src="/" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl text-white">
          <header><h1 className="text-5xl font-extrabold mb-6">Sistemas Anti-asalto de Última Generación</h1>
          <p className="text-xl mb-10">Implementamos sistema de antirrobo</p>
          </header>
          <div className="flex gap-4 flex-col sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-green-500 text-center rounded-lg">Enviar mensaje</a>
          </div>
        </div>
      </div>
    </section>

        <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        <figure>
          <h2 className="text-4xl font-bold mb-6">
            ¿Por qué instalar un Anti-asalto a tu vehículo?
          </h2>

          <p className="mb-8 text-gray-600">
            Este sistema es 100% efectivo ya que es sumamente discreto no emite ningún sonido ni luz que delate su presencia.
          </p>
        </figure>


          <Image src="/antiasaltohero.webp" alt="" width={500} height={100} className="object-cover mx-auto" />

      </div>
    </section>



        <section className="py-10">
      <div className="max-w-4xl mx-auto space-y-6 px-6">
                <header>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Ingeniería de Seguridad diseñada para tu Tranquilidad
          </h2>
        </header>

        {features.map((f, i) => (
          <article key={i}>
            <div className="p-8 transition border-l-2 hover:border-blue-600">
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          </article>
        ))}

      </div>
    </section>

        <section className="py-12 bg-gray-200">
      <div className="grid grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-6 text-center gap-6">
        {stats.map((s, i) => (
          <div key={i}>
            <p className="text-3xl font-bold text-blue-600">{s.value}</p>
            <p className="text-xs uppercase">{s.label}</p>
          </div>
        ))}
      </div>
    </section>


        <section className="bg-blue-600 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* TEXTO */}
        <article className="text-white">
          <h2 className="text-4xl font-bold mb-6">
            Tu Smartphone es ahora tu Llave de Seguridad
          </h2>

          <p className="text-white/80 mb-2">
            Gestiona la protección de tu vehículo con encriptación de grado militar. Recibe notificaciones en tiempo real, activa el modo valet o autoriza el encendido mediante biometría, todo desde una interfaz intuitiva y segura.
          </p>
        </article>

        {/* MOCKUP */}
        <div className="relative flex justify-center">
          <figure><Image src="/" alt="" width={1000} height={1000} className="w-full h-full object-contain max-w-lg  rounded-[2rem] shadow-2xl flex items-center justify-center" /></figure>
        </div>

      </div>
    </section>

            <section className="py-24 max-w-4xl mx-auto px-6">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h3>
                <div className="space-y-4">{faqs.map((f, i) => (
                    <details key={i}className="details group">
                        <summary className="flex justify-between p-6 items-center cursor-pointer text-black font-medium list-none">
                            {f.q}
                            <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="px-6 pb-4 text-gray-700">{f.a}</div>
                    </details>))}
                </div>
            </div>
        </section>
    </>
  );
}