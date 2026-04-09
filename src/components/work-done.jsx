import Image from "next/image";
export default function WorkDone() {
const trabajos = [
  {
    image: "/trabajo1.webp", title: "Reparación de pestillos eléctricos en Toyota Corolla 2015"
  },
  {
    image: "/trabajo3.webp", title: "Instalación de cierre centralizado universal en Ford Fiesta 2010"
  },
    {
    image: "/trabajo2.webp", title: "Reparación de alzavidrios eléctricos en Honda Civic 2012"
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