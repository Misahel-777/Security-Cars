import Image from "next/image";
import { ShieldCheck, PhoneCall, Wrench, Wallet} from 'lucide-react';


export default function Home() {
return (
    <section className="min-h-screen bg-white flex flex-col items-center justify-center p-4 mt-3 md:p-8">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-10 items-center">
          <article className="flex-1">
            <header>
              <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-black mb-4">PROTEGE TU HERRAMIENTA DE TRABAJO: SEGURIDAD <br /><span className="text-[#0445ec]">REAL Y AL ALCANCE</span></h2>
            <p className="text-black mb-6 text-lg leading-relaxed">
              Sabemos cuánto te ha costado tener tu carrito. Tu auto es tu
              patrimonio y no podemos dejar que nadie te lo quite.
            </p>
          </header>
          <p className="text-black mb-8 text-lg">En nuestro taller instalamos sistemas de seguridad que{" "}
            <strong>sí funcionan</strong>. Somos especialistas en conexiones
            eléctricas seguras, asegurándonos de que cada cable quede bien
            protegido y tu alarma responda cuando más la necesites.</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            { icon: <ShieldCheck className="w-6 h-6 text-[#0445ec]" />, text: 'Sistemas Antiasalto efectivo' },
            { icon: <PhoneCall className="w-6 h-6 text-[#0445ec]" />, text: 'Instalación de GPS con apagado desde el celular' },
            { icon: <Wrench className="w-6 h-6 text-[#0445ec]" />, text: 'Mano de obra experta y garantizada' },
            { icon: <Wallet className="w-6 h-6 text-[#0445ec]" />, text: 'Precios justos que cuidan tu bolsillo' },
          ].map((item, i) => (
            <li key={i} className="flex bg-gray-300 rounded-4xl p-5 items-center gap-3">
              <span>{item.icon}</span>
              <p className="text-black font-medium">{item.text}</p>
            </li>
          ))}
        </ul>
      </article>

      {/* Contenedor de Imagen */}
      <figure className="flex-1 flex justify-center">
        <div className="w-full max-w-lg">
            <Image src="/mecanico.webp" alt="Mecánico instalando sistema de seguridad en un automóvil" width={465} height={550} className="w-full object-cover rounded-xl"/>
        </div>
      </figure>
    </div>
</section>
  );
}