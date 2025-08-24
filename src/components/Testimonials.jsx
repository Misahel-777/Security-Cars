import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Mendoza',
      role: 'Empresario',
      location: 'Ciudad de México',
      rating: 5,
      text: 'Excelente servicio. El GPS me ha salvado dos veces cuando intentaron robar mi camioneta. La app es muy fácil de usar y el soporte técnico es de primera.',
      service: 'GPS Tracker + Alarma'
    },
    {
      name: 'Ana Patricia López',
      role: 'Directora de Ventas',
      location: 'Guadalajara',
      rating: 5,
      text: 'Como mujer que maneja sola frecuentemente, estos sistemas me dan mucha tranquilidad. Puedo monitorear mi auto desde la oficina y recibo alertas inmediatas.',
      service: 'Sistema Antiasalto'
    },
    {
      name: 'Roberto Hernández',
      role: 'Gerente Regional',
      location: 'Monterrey',
      rating: 5,
      text: 'La instalación fue rápida y profesional. En 6 meses ya se pagó solo cuando recuperé mi auto gracias al GPS. Totalmente recomendado para cualquier empresario.',
      service: 'Paquete Completo'
   }
];

   return (
   <section id="testimonios" className="py-20 bg-white border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         {/* Section Header */}
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Testimonios reales de clientes que confían en nosotros para proteger sus vehículos. Conoce sus experiencias y por qué nos recomiendan.</p>
         </div>


         {/* Testimonials Grid */}
         <div className="grid lg:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (
            <div key={testimonial.name} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">

               {/* Author Info */}
               <div class="flex items-center mb-4">
                  <div class="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div className="border-t py-1 border-gray-200">
                     <div className="font-semibold text-gray-900">{testimonial.name}</div>
                     <div className="text-sm text-gray-600">{testimonial.role}</div>
                     <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
               </div>

               {/* Rating */}
               <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => ( <FaStar key={i} className="h-5 w-5 text-yellow-400 fill-current" />))}
               </div>

               {/* Testimonial Text */}
               <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
               </p>

               {/* Service Badge */}
               <div className="inline-block bg-blue-100 text-blue-800 px-3 rounded-full text-sm font-medium">
                  {testimonial.service}
               </div>
            </div>
         ))}</div>
      </div>
   </section>
      );
};

export default Testimonials;



