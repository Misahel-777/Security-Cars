import Image from "next/image";

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
    title: "Geocercas de Seguridad",
    desc: "Dibuja zonas seguras (como tu casa o trabajo) y recibe alertas si el auto sale de ese perímetro.",
  },
  {
    title: "Micrófono Espía (Opcional)",
    desc: "Escucha lo que sucede dentro del habitáculo en tiempo real para verificar situaciones de emergencia.",
  },
];

const stats = [
  { value: "+3000", label: "Vehículos" },
  { value: "+20", label: "Años" },
  { value: "+1000", label: "Clientes" },
  { value: "24/7", label: "Soporte" },
];
const faqs = [
  {
    q: "¿Si cortan los cables del auto el GPS sigue funcionando?",
    a: "¡Claro que sí! Nuestros equipos cuentan con una batería interna de respaldo que mantiene el rastreo activo por varias horas aunque desconecten la batería principal.",
  },
  {
    q: "¿Instalar el GPS afecta la garantía de mi auto nuevo?",
    a: "No. Realizamos instalaciones técnicas certificadas que no alteran el sistema eléctrico original del vehículo, manteniendo tu garantía intacta.",
  },
  {
    q: "¿Hay que pagar una mensualidad?",
    a: "El servicio incluye el acceso a la plataforma. Consultanos por nuestros planes económicos que incluyen el chip de datos con cobertura internacional.",
  },
  {
    q: "¿Funciona en sótanos o lugares cerrados?",
    a: "Gracias a la tecnología de localización híbrida (LBS + GPS), podemos obtener una ubicación aproximada incluso si el vehículo está bajo techo.",
  },
];
  return (
    <>
    <section className="relative min-h-screen flex items-center">

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
            Las redes antiguas (2G y 3G) están dejando de funcionar en toda la región. Un GPS 4G no solo es más rápido; es la única forma de garantizar que la señal de tu auto no se pierda cuando más la necesites. Ya sea para proteger el auto de la familia o tu herramienta de trabajo, nuestra instalación profesional asegura precisión exacta incluso en zonas de difícil cobertura.
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
                <div className="p-8 bg-gray-100 hover:bg-white transition border-l-2 hover:border-blue-600">
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
            Nuestra aplicación es tan fácil de usar como mandar un mensaje de WhatsApp. Olvida comandos complicados por SMS; ahora puedes ver el historial de rutas, la velocidad actual y el estado del motor desde una interfaz intuitiva diseñada para tu comodidad y seguridad.
          </p>
        </article>

        {/* MOCKUP */}
        <div className="relative flex justify-center">
          <figure><Image src="/plataforma.webp" alt="App Preview" width={1000} height={1000} className="w-full h-full object-contain max-w-lg  rounded-[2rem] shadow-2xl flex items-center justify-center" /></figure>
        </div>

      </div>
    </section>



          <section className="py-24 max-w-3xl mx-auto px-6">
      
      <h2 className="text-3xl font-bold text-center mb-12">
        Preguntas Frecuentes
      </h2>

      <div className="space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="group bg-gray-100 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              {/* TEXTO */}
              <span className="font-bold text-gray-800">
                {f.q}
              </span>
              {/* ICONO DERECHA */}
              <span className="transition-transform duration-300 group-open:rotate-180">
                ▼
              </span>
            </summary>
            <div className="px-6 pb-6 text-gray-600">
              {f.a}
            </div>
          </details>
        ))}
      </div>
    </section>
    </>
  );
}