import Image from "next/image";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const whatsappText = encodeURIComponent(
  "Hola estoy interesado en el antiasalto. ¿Podrían darme más información?"
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

export default function Hero() {
const features = [
  {
    title: "Inmovilización Digital (CAN-BUS)",
    desc: "Tecnología que dialoga con la ECU de tu auto sin realizar cortes de cables, protegiendo la integridad eléctrica y manteniendo la garantía de fábrica.",
  },
  {
    title: "Protección Anti-Relay Attack",
    desc: "Blindaje contra la clonación de llaves inteligentes y amplificadores de señal, neutralizando el método de robo más usado en vehículos modernos.",
  },
  {
    title: "Protocolo de Apagado Progresivo",
    desc: "Ante un asalto, el sistema permite que el delincuente se aleje para proteger tu vida, deteniendo el motor de forma segura y controlada a los pocos metros.",
  },
  {
    title: "Modo Valet Inteligente",
    desc: "Entrega tu auto para mantenimiento sin revelar tus códigos de seguridad. El sistema permanece oculto y bajo tu control absoluto desde tu smartphone.",
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
    q: "¿Afecta la garantía de mi auto nuevo?",
    a: "No. Al utilizar tecnología digital que se integra al sistema CAN-BUS del vehículo, no realizamos intervenciones invasivas ni cortes de cables, lo que preserva la garantía oficial.",
  },
  {
    q: "¿Es peligroso que el auto se detenga en marcha?",
    a: "En absoluto. El protocolo de apagado es progresivo y emite alertas sonoras previas, permitiendo una detención segura que prioriza tanto la seguridad vial como la integridad del conductor.",
  },
  {
    q: "¿Qué sucede si pierdo mi smartphone o el tag de proximidad?",
    a: "El sistema cuenta con un método de desactivación de emergencia mediante un código PIN único ingresado a través de los botones originales del tablero.",
  },
  {
    q: "¿Funciona en vehículos híbridos o eléctricos?",
    a: "Sí, es la única tecnología recomendada para EVs y motores híbridos, ya que bloquea el sistema de tracción mediante software sin afectar las baterías de alto voltaje.",
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
          <header><h1 className="text-5xl font-extrabold mb-6">Sistemas Antiasalto de Última Generación</h1>
          <p className="text-xl mb-10">Implementamos protocolos de cortacorrientes invisibles que detienen el robo incluso con el motor en marcha</p>
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
            ¿Por qué tu alarma de fábrica ya no es suficiente?
          </h2>

          <p className="mb-8 text-gray-600">
            Los delincuentes actuales utilizan inhibidores de señal (jammers) y amplificadores para vulnerar sistemas Keyless en segundos. Nuestra solución de "Seguridad Total por Capas" crea un firewall digital que protege el puerto OBD y bloquea cualquier intento de arranque no autorizado, garantizando que tu auto permanezca donde lo dejaste.
          </p>
        </figure>


          <Image src="/" alt="" width={400} height={200} className="object-cover mx-auto" />

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