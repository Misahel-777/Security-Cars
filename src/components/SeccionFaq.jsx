import { FaChevronDown } from "react-icons/fa";

function SeccionFaq() {
    return (
    <section id="faq" class="py-20 bg-secondary">
        <div class="container mx-auto px-4">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
                <p class="text-xl text-gray-600">Todo lo que necesitas saber sobre nuestros sistemas de seguridad</p>
            </div>
            
            <div class="max-w-4xl mx-auto">
                <details class="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                    <summary class="cursor-pointer w-full text-left p-6 font-bold text-lg flex justify-between items-center">
                        <span>¿Cómo funciona el sistema de GPS Tracker?</span>
                        <FaChevronDown className="transition-transform duration-300" />
                    </summary>
                    <div class="p-6 border-t border-gray-100">
                        <p class="text-gray-600">Nuestro GPS Tracker se instala de manera discreta en tu vehículo y se conecta a una aplicación móvil. Te permite ver la ubicación en tiempo real, configurar geocercas (áreas seguras), recibir alertas de movimiento y hasta apagar el motor de forma remota en caso de robo.</p>
                    </div>
                </details>

                <details class="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                    <summary class="cursor-pointer w-full text-left p-6 font-bold text-lg flex justify-between items-center">
                        <span>¿La instalación afecta la garantía de mi vehículo?</span>
                        <FaChevronDown className="transition-transform duration-300" />
                    </summary>
                    <div class="p-6 border-t border-gray-100">
                        <p class="text-gray-600">No, nuestros sistemas se instalan de forma profesional sin alterar los componentes críticos del vehículo. Trabajamos con conexiones que no invalidan la garantía del fabricante.</p>
                    </div>
                </details>

                <details class="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                    <summary class="cursor-pointer w-full text-left p-6 font-bold text-lg flex justify-between items-center">
                        <span>¿Requieren suscripción mensual?</span>
                        <FaChevronDown className="transition-transform duration-300" />
                    </summary>
                    <div class="p-6 border-t border-gray-100">
                        <p class="text-gray-600">La mayoría de nuestros sistemas no requieren suscripción mensual. Solo el GPS Tracker Premium tiene una pequeña tarifa anual para el servicio de monitoreo y servidores, pero nuestros otros productos funcionan sin costos recurrentes.</p>
                    </div>
                </details>

                <details class="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                    <summary class="cursor-pointer w-full text-left p-6 font-bold text-lg flex justify-between items-center">
                        <span>¿Qué pasa si mi vehículo es robado?</span>
                        <FaChevronDown className="transition-transform duration-300" />
                    </summary>
                    <div class="p-6 border-t border-gray-100">
                        <p class="text-gray-600">Con nuestros sistemas, podrás: 1) Localizar el vehículo en tiempo real mediante la app, 2) Apagar el motor de forma remota para inmovilizarlo, 3) Alertar a las autoridades con la ubicación exacta. Además, el sistema anti-asalto apagará automáticamente el motor después de unos minutos.</p>
                    </div>
                </details>

                <details class="bg-white rounded-lg shadow-md overflow-hidden">
                    <summary class="cursor-pointer w-full text-left p-6 font-bold text-lg flex justify-between items-center">
                        <span>¿Ofrecen garantía?</span>
                        <FaChevronDown className="transition-transform duration-300" />
                    </summary>
                    <div class="p-6 border-t border-gray-100">
                        <p class="text-gray-600">Sí, todos nuestros productos incluyen garantía de 1 año contra defectos de fabricación. Además, nuestra instalación profesional tiene garantía de 6 meses. Estamos comprometidos con tu satisfacción.</p>
                    </div>
                </details>
            </div>
        </div>
    </section>
)
}

export default SeccionFaq;