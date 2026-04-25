import Image from "next/image";
export default function WorkDone() {
const trabajos = [
  {
    image: "/trabajo1.webp", title: "Trabajo de insonorizacion "
  },
    {
    image: "/trabajo2.webp", title: "Instalacion de una Auto Radio"
  },
]
return (
    <section>
      <header>
        <h3 className="titulos">Nuestros trabajos</h3>
      </header>
      <div className="nuestros-trabajos">{trabajos.map((trabajo, idex) => (
        <article key={idex}>
          <figure>
            <Image src={trabajo.image} alt={trabajo.title} width={800} height={800} className="rounded-xl object-contain w-full bg-gray-200"/>
          </figure>
        </article>
      ))}</div>
    </section>
  );
}