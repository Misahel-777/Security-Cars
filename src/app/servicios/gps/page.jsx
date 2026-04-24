import Image from "next/image";

import {ChevronDown} from 'lucide-react';

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const whatsappText = encodeURIComponent(
  "Hola estoy interesado en el GPS 4G. ¿Podrían darme más información?"
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

export default function Hero() {
  const features = [
  {
    title: "Corte de Motor Remoto",
    desc: "Apaga tu vehículo desde cualquier lugar del mundo con un solo toque en tu celular en caso de robo.",
  },
  {
    title: "Alertas de Encendido",
    desc: "Recibe una notificación instantánea apenas alguien intente encender tu motor sin tu permiso.",
  },
  {
    title: "Multiples alarmas",
    desc: "Te avisa a tu celular si golpean tu vehiculo, si violenta la chapa de encendido, si desconectan la bateria del vehiculo",
  },
  {
    title: "GPS 4G FULL ",
    desc: "Incluye ubicacion, apagado, multiples alarmas, por puerta, por accesorios, por desconeccion de bateria y (opcional: sirena y bloqueo lectronico)",
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
    q: "¿Si desconectan los cables de la bateria del auto el GPS sigue funcionando?",
    a: "¡Claro que sí! Nuestros equipos cuentan con una batería interna de respaldo que mantiene el rastreo activo por varias horas aunque desconecten la batería principal.",
  },
  {
    q: "¿Instalar el GPS afecta la garantía de mi auto nuevo?",
    a: "No. Realizamos instalaciones técnica especializada que no alteran el sistema eléctrico original del vehículo, manteniendo tu garantía intacta.",
  },
  {
    q: "¿Puedo tener varios vehículos bajo el mismo usuario del aplicativo?",
    a: "Si, podra visualizar su flota de vehiculos desde el aplicativo, computadora o tablet",
  },
  {
    q: "¿El equipo es unico pago?",
    a: "Si, el equipo es unico pago de por vida",
  },
];
  return (
    <>
    <section className="relative h-[90vh] md:min-h-screen flex items-center">

      {/* Imagen */}
      <div className="absolute inset-0">
        <Image src="/gpshero.webp" alt="GPS 4G" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl text-white">
          <header><h1 className="text-5xl font-extrabold mb-6">GPS 4G para Autos</h1>
          <p className="text-xl mb-10">Con nuestra tecnología de rastreo 4G, tienes el control total de tu vehículo en tiempo real, con la red más rápida y estable del país.</p>
          </header>
          <div className="flex gap-4 flex-col sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-green-500 text-center rounded-lg">Hablar con el técnico</a>
          </div>
        </div>
      </div>
    </section>

        <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        <figure>
                    <h2 className="text-4xl font-bold mb-6">
            ¿Por qué actualizarte a la tecnología GPS 4G?
          </h2>

          <p className="mb-8 text-gray-600">
            Las redes antiguas (2G y 3G) están dejando de funcionar en toda la región. Un GPS 4G no solo es más rápido; es la única forma de garantizar que la señal de tu auto no se pierda cuando más la necesites. Ya sea para proteger el auto de la familia o tu herramienta de trabajo.
          </p>
        </figure>


          <Image src="/gps.png" alt="Tecnología 4G" width={400} height={200} className="object-cover mx-auto" />

      </div>
    </section>



        <section className="py-10">
      <div className="max-w-4xl mx-auto space-y-6 px-6">
                <header>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Funciones principales
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
            Tu auto en la palma de tu mano
          </h2>

          <p className="text-white/80 mb-2">
            Nuestra aplicación es tan fácil de usar como mandar un mensaje de WhatsApp. Olvida comandos complicados por SMS; ahora puedes ver tu vehículo las 24 horas, la velocidad actual y el estado del motor, con nuestro sistema de GPS 4G Alsama podras tener un mayor control de tu flota de vehiculos.
          </p>
        </article>

        {/* MOCKUP */}
        <div className="relative flex justify-center">
          <figure><Image src="/plataforma.webp" alt="App Preview" width={1000} height={1000} className="w-full h-full object-contain max-w-lg  rounded-[2rem] shadow-2xl flex items-center justify-center" /></figure>
        </div>

      </div>
    </section>





        <section className="py-24 max-w-4xl mx-auto px-2">
        <div className="container mx-auto px-2">
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