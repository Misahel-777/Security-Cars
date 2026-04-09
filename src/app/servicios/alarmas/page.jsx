import Image from "next/image";

export default function ProductosSection() {
const productos = [
  {
    id: 1,
    titulo: "Alarma Básica",
    descripcion: "Es un sistema práctico y resistente diseñado para detectar cualquier intento de apertura o golpe. Ideal para vehículos que buscan una protección real, sin complicaciones técnicas.",
    imagen: "/integrada.png",
    informacion: [
      { especificacion: "Protección por apertura de puertas, capó o maletero." },
      { especificacion: "Sirena de alta potencia." },
      { especificacion: "Sensor de golpe graduable." },
      { especificacion: "Incluye dos controles de largo alcance." }
    ]
  },
  {
    id: 2,
    titulo: "Alarma Full Plus",
    descripcion: "Lleva la seguridad de tu auto al siguiente nivel. Además de las funciones básicas, este sistema cuenta con 'Anti-Asalto': si te obligan a bajar del vehículo, el motor se apaga automáticamente tras un minuto y medio. Incluye un código de seguridad único que impide el encendido incluso si logran robarte las llaves.",
    imagen: "/integrada.png",
    informacion: [
      { especificacion: "Sistema Anti-asalto inteligente." },
      { especificacion: "Bloqueo de encendido." },
      { especificacion: "Código de seguridad personalizado para el arranque." },
      { especificacion: "Cierre centralizado automático al encender el vehículo." }
    ]
  },
  {
    id: 3,
    titulo: "Alarma Integrada",
    descripcion: "La máxima tecnología en seguridad invisible. Este sistema permite controlar todo el sistema desde el control original de tu auto. No necesitas controles extra; es la opción premium para quienes buscan mantener la estética original.",
    imagen: "/integrada.png",
    informacion: [
      { especificacion: "Control total mediante el mando original del vehículo." },
      { especificacion: "Integración digital sin corte de cables." },
      { especificacion: "Sensores de proximidad de alta precisión (Detección de 0.3 a 1.8m)." },
      { especificacion: "Arquitectura de bajo consumo eléctrico (Protege tu batería)." }
    ]
  }
];

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const getWhatsappLink = (producto) => {
  const message = `Hola 👋, estoy interesado en el servicio de ${producto}. ¿Podrían darme más información?`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

  return (
<>
    <section className="relative h-[90vh] md:min-h-screen flex items-center">

      {/* Imagen */}
      <div className="absolute inset-0">
        <Image src="/alarmahero.webp" alt="Alarma para autos" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-3xl text-white">
          <header><h2 className="text-5xl text-center font-extrabold mb-6">Alarma para autos</h2></header>
        </div>
      </div>
    </section>

      {/* PRODUCTOS */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          {productos.map((producto) => (
            <article key={producto.id} className="grid md:grid-cols-2 gap-10 items-start">
              {/* IMAGEN */}
              <figure className="relative rounded-lg overflow-hidden">
                <Image src={producto.imagen} alt={producto.titulo} width={600} height={350} className="w-full md:h-[350px] object-contain"/>
              </figure>

              {/* CONTENIDO */}
              <div className="space-y-4">
                <header>
                  <h1 className="text-2xl font-bold text-black">{producto.titulo}</h1>
                </header>
                <p>{producto.descripcion}</p>
                <a href={getWhatsappLink(producto.titulo)} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg">Contactar</a>

                {/* INFO */}
                {producto.informacion?.length > 0 && (
                  <section>
                    <p className="font-bold text-lg mb-3">
                      Información Técnica
                    </p>

                    <ul className="grid lg:grid-cols-4 grid-cols-2 gap-2 mb-5">
                      {producto.informacion.map((info, index) => (
                        <li key={index} className="bg-gray-300 p-1 rounded-2xl flex items-center justify-center text-[12px] text-center min-h-[80px] max-h-[82px] overflow-hidden">{info.especificacion}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}