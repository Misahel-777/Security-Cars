export default function testimonials() {

    const testimonials = [
    {
        text: "Muy buena y magnífica atención.Te aconsejan del producto que vas a comprar y sobre todo la instalación lo hacen con seguridad y confianza.Lo recomiendo 100%. Excelente servicio!!!!!",
        name: "Roberto Alanya",
    },
    {
        text: "Excelente servicio.",
        name: "Wilfredo s Horna",
    },
    {
        text: "Excelente servicio, Omar el dueño es una persona muy servicial. Instale una alarma de código variable muy buena. Lo recomiendo...",
        name: "Neyer Aquino",
    }
];

return (
    <section id="testimonios" className="py-16">
        <div className="container mx-auto px-4">
            <header><h3 className="titulos">Lo Que Dicen Nuestros Clientes</h3></header>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto text-center">{testimonials.map((testimonial, index) => (
                    <article key={index} className=" p-6 rounded-lg ">
                        <blockquote className="text-gray-700 mb-6 italic">"{testimonial.text}"</blockquote>
                        <cite className="font-semibold text-black">{testimonial.name}</cite>
                    </article>))}
                </div>
        </div>
    </section>
);
}