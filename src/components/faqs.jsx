import {ChevronDown} from 'lucide-react';

export default function Faqs() {
const faqs = [
    {
        question: '¿Realizan instalaciones a domicilio?',
        answer: 'Sí, realizamos instalaciones a domicilio dentro de la ciudad sin costo adicional.'
    },
    {
        question: '¿Cuánto tiempo toma la instalación?',
        answer: 'Dependiendo del servicio, entre 30 minutos y 2 horas aproximadamente.'
    },
    {
        question: '¿El GPS tiene mensualidad?',
        answer: 'Sí, la mensualidad depende del tipo de plataforma de rastreo que se elija.'
    },
    {
        question: '¿Qué formas de pago aceptan?',
        answer: 'Aceptamos efectivo, Yape, Plin y transferencias bancarias.'
    },
    {
        question: '¿Trabajan con todo tipo de vehículos?',
        answer: 'Sí, trabajamos con autos, camionetas, motos y vehículos de carga ligera.'
    }
];

return (
    <section className="py-16">
        <div className="container mx-auto px-4">
            <h3 id="faq" className="titulos">Preguntas Frecuentes</h3>
            <div className="max-w-3xl mx-auto space-y-4">{faqs.map((item, index) => (
                <details key={index}className="details group">
                    <summary className="w-full px-6 py-4 flex justify-between items-center cursor-pointer text-black font-medium list-none">
                        {item.question}
                        <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-6 pb-4 text-gray-700">{item.answer}</div>
                </details>))}
            </div>
        </div>
    </section>
);
}