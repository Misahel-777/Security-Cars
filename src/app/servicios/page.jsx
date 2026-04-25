'use client';

import { useState, useRef } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';


const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const getWhatsappLink = (serviceTitle) => {
  const text = encodeURIComponent(
    `Hola 👋, estoy interesado en el producto de ${serviceTitle}. ¿Podrían brindarme más información y precio?`
  );

  return `https://wa.me/${whatsappNumber}?text=${text}`;
};

// Productos (puedes extenderlos fácilmente)
const services = [
  {
    id: 1,
    title: 'Camara de retoceso',
    description: 'Nuestra Cámara de Retroceso es la solución económica y efectiva para que manejes con total tranquilidad. ¡Evita golpes, rayones y gastos innecesarios en el latonero!',
    list: [
      {
        title: "Ángulo de Visión Extendido:",
        text: "Lente gran angular de 170° que cubre ambos carriles y las esquinas del parachoques."
      },
      {
        title: "Compatibilidad Universal:",
        text: "Funciona con sistemas de video NTSC / PAL, ideal para radios Android, pantallas OEM o monitores externos."
      },
            {
        title: "Resistencia Climática Extrema:",
        text: "Certificación de impermeabilidad, diseñada para operar bajo lluvia intensa y temperaturas desde -20°C hasta +70°C."
      },
            {
        title: "Visión Nocturna Mejorada:",
        text: "Iluminación mínima de 0.1 Lux, lo que permite una imagen nítida incluso en estacionamientos con poca luz."
      },
            {
        title: "Líneas de Guía Estáticas:",
        text: " Incluye una cuadrícula de asistencia de estacionamiento para calcular distancias con precisión milimétrica."
      },
        {
        title: "Instalación Discreta:",
        text: 'Diseño tipo "Butterfly" o empotrado que mantiene la estética original del vehículo sin cables a la vista.'
      },
    ],
    image: '/camara.webp',
  },
  {
    id: 2,
    title: 'Cámara de Retroceso de Alta Definición',
    description: 'Nuestro sistema de asistencia de visión trasera ha sido diseñado para restaurar la percepción periférica del conductor, eliminando los ángulos muertos inherentes a la arquitectura de los vehículos actuales. Al integrar tecnología de procesamiento de imagen de alto rendimiento, este dispositivo transforma maniobras críticas en operaciones de alta precisión, garantizando la integridad de su patrimonio y la seguridad de terceros.',
        list: [
          {
            title: "Sensor de Imagen de Alta Fidelidad:",
            text: "Arquitectura optimizada para procesamiento NTSC/PAL con balance de blancos automático y corrección de gamma."
          },
                    {
            title: "Blindaje Ambiental (Grado IP68):",
            text: "Sellado hermético estructural diseñado para soportar inmersión y partículas sólidas, garantizando durabilidad a largo plazo en condiciones de intemperie."
          },
                    {
            title: "Óptica de Gran Alcance:",
            text: "Ángulo de visualización calculado para una cobertura espacial de 170°, permitiendo la identificación temprana de obstáculos en la periferia."
          },
                    {
            title: "Integración Telemática 'Plug & Play':",
            text: "Diseño compatible con interfaces CAN-Bus y unidades multimedia de 12V, evitando alteraciones en el cableado original del vehículo."
          },
                    {
            title: "Referencia Espacial Dinámica:",
            text: "Sistema de guías estáticas integrado para una estimación milimétrica de distancias, facilitando el posicionamiento preciso en espacios reducidos."
          },
    ],
    image: '/camara3.webp',
  },
  {
    id: 3,
    title: 'Sensor de retroceso',
    description: 'Nuestro sistema de asistencia de estacionamiento ha sido diseñado para mitigar los puntos ciegos mediante una arquitectura de detección ultrasónica de alta frecuencia. Al integrar transductores de última generación, el sistema no solo alerta sobre obstáculos físicos, sino que brinda una respuesta espacial en tiempo real, transformando una maniobra compleja en una tarea segura, precisa y libre de estrés.',
list: [
  {
    title: "Tecnología de Detección:",
    text: "Sensores ultrasónicos de alta sensibilidad con un ángulo de cobertura óptimo para detectar obstáculos en un rango de 0.3 a 2.5 metros."
  },
    {
    title: "Procesamiento Inteligente:",
    text: "Unidad de control (ECU) centralizada que filtra interferencias externas para evitar falsas alarmas, garantizando una detección precisa incluso en condiciones climáticas adversas."
  },
    {
    title: "Interfaz de Alerta Progresiva:",
    text: "Aviso acústico mediante zumbador de alta fidelidad con aumento de frecuencia proporcional a la proximidad del objeto (frecuencia de trabajo: 40 kHz)."
  },
    {
    title: "Rango de Tensión:",
    text: "Compatibilidad con sistemas eléctricos de 12V DC, optimizado para un consumo energético eficiente que no compromete la integridad de la red CAN-Bus del vehículo."
  },
    {
    title: "Certificación de Sellado:",
    text: "Sensores con protección IP67 contra humedad y polvo, asegurando una vida útil prolongada bajo condiciones de uso continuo."
  },
],
    image: '/sensor-de-retroceso.webp',
  },
  {
    id: 4,
    title: 'Focos Led',
    description: 'Nuestros nuevos Focos LED de Alta Potencia están diseñados para darte una luz blanca y potente. Gracias a su ventilador interno, el foco no se calienta y dura muchísimo más que un foco común.',
list: [
      {
    title: "Tecnología Lumínica:",
    text: "Chip LED de alta intensidad con temperatura de color de 6500K (Blanco Frío), ideal para reducir la fatiga ocular."
  },
      {
    title: "Sistema de Enfriamiento:",
    text: "Disipación híbrida mediante ventilador turbo ultrasilencioso y disipador de calor de aleación de aluminio."
  },
      {
    title: "Compatibilidad Electrónica:",
    text: "Driver externo con tecnología CAN-bus Ready, diseñado para evitar errores de 'foco fundido' en el tablero y parpadeos indeseados."
  },
      {
    title: "Construcción Robusta:",
    text: "Grado de protección IP68, resistente al agua, polvo y vibraciones extremas del camino."
  },
      {
    title: "Instalación Eficiente:",
    text: "Diseño Plug & Play compatible con sockets estándar, respetando el cableado original del vehículo."
  },
      {
    title: "Patrón de Haz:",
    text: "Enfoque optimizado que evita el deslumbramiento a conductores en sentido contrario, cumpliendo con estándares de seguridad vial."
  },
],
    image: '/focos-led.webp',
  },
  {
    id: 5,
    title: 'Modulo de lazavidrio',
    description: 'El módulo alzavidrio es una solución profesional de alto rendimiento diseñada para automatizar y mejorar el sistema de control de ventanas de su vehículo. Es compatible con la mayoría de los vehículos y se integra sin problemas con los interruptores originales, que siguen manteniendo su funcionalidad total. Cuenta con un inteligente sistema de gestión de energía que protege el módulo de sobrecargas y optimiza el consumo de la batería, asegurando un funcionamiento eficiente y confiable.',
list: [
        {
    title: "Función de Cierre Automático:",
    text: "Sube automáticamente las 4 ventanas del vehículo al armar la alarma o cerrar los seguros."
  },
        {
    title: "Funcionamiento Secuencial:",
    text: "Cierra las ventanas de forma individual y consecutiva para reducir la carga en el sistema eléctrico."
  },
        {
    title: "Sistema Antiatrapamiento Inteligente:",
    text: "Detiene el movimiento de la ventana si se detecta resistencia (ej. una mano), garantizando la seguridad de los ocupantes."
  },
        {
    title: "Compatibilidad Universal:",
    text: "Diseñado para funcionar con la mayoría de los sistemas eléctricos de ventanas de automóviles."
  },
        {
    title: "Integración Transparente:",
    text: "Mantiene la funcionalidad de los interruptores de ventana originales del vehículo."
  },
        {
    title: "Operación Inteligente:",
    text: "No funciona cuando la ignición está encendida (ACC ON) para evitar accionamientos accidentales durante la conducción."
  },
        {
    title: "Protección del Sistema:",
    text: "Cuenta con mecanismos de protección contra polaridad reversa, cortocircuitos y sobrecarga de voltaje, asegurando la durabilidad del módulo y del sistema eléctrico del auto."
  },
        {
    title: "Modos de Operación Configurables:",
    text: "Permite elegir entre dos modos de aprendizaje para adaptarse a diferentes sistemas de señales del vehículo (luces intermitentes o cierre de seguros), seleccionable mediante jumper."
  },
      {
    title: "Programación Flexible:",
    text: "Ofrece opciones para configurar la polaridad del pulso (positivo o negativo) para la entrada y la salida de señales, adaptándose a las necesidades de cada instalación."
  },
        {
    title: "Tiempo de Subida/Bajada:",
    text: "Aproximadamente 8 segundos o más, con detección automática del motor."
  },
        {
    title: "Tipo de Pulso:",
    text: "Soporta pulsos positivos/negativos y señales digitales."
  },
        {
    title: "Alimentación:",
    text: "Compatible con voltajes de 9V a 15V."
  },
        {
    title: "Corriente Máxima de Consumo:",
    text: "Soporta hasta 20A."
  }
],
    image: '/modulo-alzavidrio.webp',
  },
    {
    id: 6,
    title: 'Luces HID',
    description: 'Los focos HID son la solución ideal para quienes buscan mejorar la visibilidad sin gastar una fortuna. el sistema HID utiliza gas xenón para crear una luz mucho más blanca y potente, permitiéndote ver baches, peatones y señales de tránsito con mucha más anticipación.',
list: [
  {
    title: "Tecnología de Arco de Xenón",
    text: "Genera hasta un 300% más de luminosidad en comparación con focos estándar."
  },
  {
    title: "Temperatura de Color (Kelvin)",
    text: "Disponible en rangos de 4300K (Blanco cálido/OEM) hasta 6000K (Blanco puro), ideal para reducir la fatiga ocular."
  },
  {
    title: "Construcción en Cuarzo Anti-UV",
    text: "Cápsula de alta resistencia que protege la óptica del faro contra el amarillamiento y la degradación por radiación ultravioleta."
  },
  {
    title: "Consumo Eficiente",
    text: "Operación optimizada a 35W/55W, reduciendo la carga sobre el sistema eléctrico del automóvil."
  },
  {
    title: "Estabilidad Lumínica",
    text: "Compatible con balastos electrónicos de alta precisión para evitar el parpadeo y garantizar un encendido rápido."
  },
  {
    title: "Vida Útil Extendida",
    text: "Promedio de 3,000 a 5,000 horas de uso, superando por cinco veces la durabilidad de un foco halógeno."
  }
],
    image: '/luces-HID.webp',
  },
      {
    id: 7,
    title: 'Neblineros toyota yaris 3era generacion',
    description: 'Nuestro kit de neblineros están diseñados para iluminar el suelo directamente, permitiéndote ver los baches, las líneas de la carretera y cualquier obstáculo que las luces altas no muestran. Además de darte mucha más seguridad al conducir de noche o con mal clima, le dan a tu Toyota ese toque elegante y completo que tienen las versiones de lujo.',
list: [
  {
    title: "Compatibilidad Exacta",
    text: "Diseñado exclusivamente para el Toyota Yaris Sedán de 3ra Generación (modelos 2014, 2015, 2016 y 2017)."
  },
  {
    title: "Tecnología de Iluminación",
    text: "Sistema halógeno de alta eficiencia con soporte para actualización a LED (Plug & Play)."
  },
  {
    title: "Temperatura de Color",
    text: "Configuración de 2500K - 3000K (Amarillo selectivo), ideal para suprimir longitudes de onda azules que causan deslumbramiento."
  },
  {
    title: "Construcción Robusta",
    text: "Carcasa de alta resistencia térmica y lentes de policarbonato con protección UV para evitar el amarillamiento."
  },
  {
    title: "Grado de Protección",
    text: "Certificación de sellado contra agua y polvo, garantizando operatividad en climas extremos."
  },
  {
    title: "Kit de Instalación Completo",
    text: "Incluye biseles frontales con acabado cromado/negro (según versión), ramal de cables reforzado, relé de protección y switch original para el tablero."
  },
  {
    title: "Integración Estética",
    text: "Acabado tipo OEM (Original Equipment Manufacturer) que respeta las líneas de diseño originales de la fascia del vehículo."
  }
],
    image: '/neblineros.webp',
  },
      {
    id: 8,
    title: 'Insonorizante',
    description: 'Transforma la experiencia de conducción con nuestro insonorización, diseñada para eliminar el ruido de rodadura, las vibraciones metálicas y el calor exterior, convirtiendo tu cabina en un santuario de confort y fidelidad sonora. Nuestro material utiliza tecnología CLD (Constrained Layer Damping), que convierte la energía mecánica de la vibración en energía térmica mínima, logrando un habitáculo hasta un 40% más silencioso y mejorando drásticamente la respuesta de tus altavoces.',
list: [
  {
    title: "Composición Multicapa",
    text: "Base de polímero viscoelástico (caucho butílico) de alta adherencia con capa de restricción de aluminio gofrado."
  },
  {
    title: "Factor de Pérdida Acústica",
    text: "Elevado nivel de amortiguación (superior a 0.33), ideal para reducir la resonancia en puertas, piso y techo."
  },
  {
    title: "Espesor Profesional",
    text: "Calibre de 2.0 mm a 2.3 mm, optimizado para ofrecer la máxima absorción sin añadir peso excesivo al vehículo."
  },
  {
    title: "Resistencia Térmica",
    text: "Actúa como barrera aislante, manteniendo el interior fresco en verano y conservando la calefacción en invierno."
  },
  {
    title: "Instalación Plug & Play Técnica",
    text: "Adhesivo de grado industrial que no requiere calor para su aplicación y es resistente al agua y aceites."
  },
  {
    title: "Certificación de Seguridad",
    text: "Material ignífugo y no tóxico, diseñado específicamente para entornos automotrices exigentes."
  }
],
    image: '/insonorizante.webp',
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const modalRef = useRef(null);

  const closeModal = () => {
    setSelectedService(null);
  };

  // Cerrar al hacer clic fuera del modal
  const handleModalClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Services Grid */}
      <main className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-10">
            <h3 className="text-4xl font-bold">Nuestros Productos</h3>
            <p className="text-gray-600 mt-2">
              Equipamiento y tecnología para mejorar tu vehículo
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article key={service.id} className="group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white" onClick={() => setSelectedService(service)}>
                <figure className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} width={400} height={200} className="object-cover transition-transform duration-500 group-hover:scale-105"/>
                </figure>
                <header className="p-6 text-center w-full">
                  <h2 className="font-bold text-lg text-black">{service.title}</h2>
                </header>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/50 backdrop-blur-sm" onClick={handleModalClick}>
          <div ref={modalRef} className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
                              <header>
              <div className="flex justify-between items-start">
                  <h1 className="text-xl font-bold text-gray-900">{selectedService.title}</h1>
                <button onClick={closeModal} className="p-2 cursor-pointer rounded-full hover:bg-gray-100 transition-colors" aria-label="Cerrar">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              </header>
            </div>
            <div className="p-2">
              <figure className="mb-6">
                <img src={selectedService.image} alt={selectedService.title} width={624} height={256} className="w-full h-64 object-contain rounded-lg"/>
              </figure>
              <p className="text-black leading-relaxed p-2 mb-6">{selectedService.description}</p>

              <div>
                <ul className="list-disc pl-6 text-black">
                  {selectedService.list.map((item, index) => (
                    <li key={index} className="mb-2"><b>{item.title}</b><span>{item.text}</span></li>
                  ))}
                </ul>
              </div>
              <a href={getWhatsappLink(selectedService.title)} target="_blank" rel="noopener noreferrer" className="block w-full bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors text-center py-3">Contactar ahora</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}