// Importación de iconos de Lucide React
import { LuShield, LuSmartphone, LuCar } from 'react-icons/lu'

// Componente HeroSection - Sección principal de la página
const HeroSection = () => {
  // Función para scroll suave a secciones
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido principal */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Protege lo que más valoras:<span className="text-[#001d8b]"> Sistemas de Seguridad Vehicular para tu Auto</span></h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Somos un taller especializado en la instalación de sistemas de seguridad vehicular. 
                Protegemos tu auto, tu familia y tu tranquilidad con tecnología moderna, confiable y accesible.
              </p>
            </div>

            {/* Títulos SEO adicionales */}
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-gray-800">
                GPS para Auto, Alarmas con App y Antiasalto: Control Total desde tu Celular
              </h3>
              <h3 className="text-xl font-medium text-[#001d8b]">
                Tu Patrimonio Seguro: Rastreador GPS y Alarmas para LuCarros en Lima
              </h3>
            </div>

            {/* Beneficios principales */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-[#001d8b]/10 p-3 rounded-lg w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <LuShield className="h-8 w-8 text-[#001d8b]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Seguridad Total</h3>
                <p className="text-gray-600 text-sm">Protección 24/7</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#001d8b]/10 p-3 rounded-lg w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <LuSmartphone className="h-8 w-8 text-[#001d8b]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Control Total</h3>
                <p className="text-gray-600 text-sm">Desde tu celular</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#001d8b]/10 p-3 rounded-lg w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <LuCar className="h-8 w-8 text-[#001d8b]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Tu Patrimonio</h3>
                <p className="text-gray-600 text-sm">Siempre protegido</p>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('servicios')}
                className="bg-[#001d8b] text-white px-8 py-3 rounded-lg hover:bg-[#001d8b]/90 transition-colors font-medium"
              >
                Ver Nuestros Servicios
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="border border-[#001d8b] text-[#001d8b] px-8 py-3 rounded-lg hover:bg-[#001d8b] hover:text-white transition-colors font-medium"
              >
                Cotizar Ahora
              </button>
            </div>
          </div>

          {/* Área visual derecha */}
          <div className="relative">
            <div className="bg-[#001d8b]/5 rounded-2xl p-8 text-center">
              <div className="bg-white p-6 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center shadow-lg">
                <LuShield className="h-16 w-16 text-[#001d8b]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnología Avanzada</h2>
              <p className="text-gray-600 mb-6">GPS • Alarmas • Anti-asalto</p>
              <div className="flex justify-center space-x-4">
                <LuSmartphone className="h-8 w-8 text-[#001d8b]" />
                <LuShield className="h-8 w-8 text-[#001d8b]" />
                <LuCar className="h-8 w-8 text-[#001d8b]" />
              </div>
            </div>
          </div>
        </div>

        {/* Frase destacada */}
        <div className="mt-16 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#001d8b] max-w-2xl mx-auto">
            <p className="text-lg font-medium text-gray-900">
              "Tu auto es tu inversión, cuídalo. Seguridad inteligente para tu auto."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection