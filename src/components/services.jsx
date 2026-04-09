import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const servicios = [
    { id: 1, imagen: "/GPSservice.webp", titulo: "Alarmas para vehículos", href: "/servicios/alarmas" },
    { id: 2, imagen: "/GPSservice.webp", titulo: "GPS para vehículos", href: "/servicios/gps" },
    { id: 3, imagen: "/GPSservice.webp", titulo: "Antiasalto para auto", href: "/servicios/antiasalto" },
  ];

  return (
    <>
      {/* SERVICIOS PRINCIPALES */}
      <section id="servicios" className="py-5 px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
  {servicios.map((servicio) => (
    <article key={servicio.id} className="flex flex-col">

      {/* CONTENEDOR FIJO */}
      <figure className="relative rounded-xl overflow-hidden flex items-center justify-center">
        <Image src={servicio.imagen} alt={`Servicio de ${servicio.titulo}`} width={450} height={230} className="object-contain"/>
      </figure>
      <div className="pt-4 flex flex-col">
        <header>
          <h2 className="text-lg text-black font-medium mb-3">
            {servicio.titulo}
          </h2>
        </header>

        <Link
          href={servicio.href}
          className="button w-full text-center mt-auto"
        >
          Más información
        </Link>
      </div>
    </article>
  ))}
</div>

        {/* VER MÁS */}
        <div className="max-w-7xl mx-auto pt-20 pb-5 px-4 text-center">
          <Link href="/servicios" className="flex text-[#0445ec] items-center justify-center gap-2 mx-auto text-[18px] font-semibold">
            Ver todos los servicios
          </Link>
        </div>
      </section>

      {/* SERVICIOS DESTACADOS */}
      <section className="py-20 bg-white">
        <div className="mx-auto space-y-10">
          {/* CUADRO 1 */}
          <article className="service1">
            <figure className="cuadro">
              <Image src="/alzavidrioservice.webp" alt="Reparación de alzavidrios eléctricos" width={500} height={300} className="rounded-xl object-cover w-full"/>
            </figure>

            <div className="cuadro2">
              <header>
                <span className="cuadro-h2">Reparación y/o Instalación de</span><h2 className="cuadro-h2">Alzavidrios Eléctricos</h2>
              </header>
              <p className="text-gray-700">Servicio especializado en reparación e <strong>instalación de vidrios eléctricos para carro.</strong></p>
              <Link href="/servicios/alzavidrios" className="button bg-[#0445ec]">
                Más información
              </Link>
            </div>
          </article>

          {/* CUADRO 2 */}
          <article className="service2">
            <figure className="cuadro">
              <Image src="/pestilloservice.webp" alt="Reparación de pestillos eléctricos" width={500} height={300} className="rounded-xl object-cover w-full"/>
            </figure>
            <div className="cuadro2">
              <header>
                <span className="cuadro-h2">Reparación y/o Instalación de</span><h2 className="cuadro-h2">Pestillos Eléctricos</h2>
              </header>
              <p className="text-gray-700">Servicio especializado en reparación e <strong>instalación de pestillos eléctricos para autos.</strong></p>
              <Link href="/servicios/pestillos" className="button bg-[#0445ec]">
                Más información
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}