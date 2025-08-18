// Importación de iconos de Lucide React
import { MapPin, Shield, AlertTriangle, Smartphone, Zap, Eye } from 'lucide-react'

// Componente ServicesSection - Sección de servicios
const ServicesSection = () => {
  // Función para scroll suave a contacto
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Datos de los servicios
  const services = [
    {
      icon: MapPin,
      title: "GPS Trackers para Auto",
      subtitle: "Monitoreo y Localización en Tiempo Real",
      description: "Rastreador GPS para auto que te permite saber dónde está tu vehículo en todo momento. GPS para autos sin mensualidad con control total desde tu celular, apagado remoto y monitoreo 24/7.",
      features: [
        "Localizador GPS para auto en tiempo real",
        "Sistema de apagado remoto del vehículo",
        "Botón SOS para emergencias",
        "Alertas inteligentes de movimiento",
        "GPS para vehículos empresas y particulares"
      ],
      highlight: "GPS para auto: Recupera tu vehículo, incluso si te lo roban"
    },
    {
      icon: Shield,
      title: "Alarmas para Auto con App",
      subtitle: "Seguridad Inteligente y Control Remoto",
      description: "Alarma para carros con control desde celular. Instalación de alarma para autos con tecnología moderna, sensores avanzados y sirena disuasiva. Alarma para auto con cierre centralizado.",
      features: [
        "Alarma para auto con aviso al celular",
        "Alarma para auto con encendido a distancia",
        "Sensores de movimiento",
        "Alarma para auto con bluetooth",
        "Instalación profesional garantizada"
      ],
      highlight: "Alarmas para auto: Seguridad confiable, sin complicaciones"
    },
    {
      icon: AlertTriangle,
      title: "Sistema Anti-Asalto para Auto",
      subtitle: "Protección Automática por Proximidad",
      description: "Antiasalto para auto con apagado automático tras un asalto. Antiasalto por proximidad con seguridad discreta y efectiva que protege sin necesidad de intervención.",
      features: [
        "Antiasalto por proximidad automático",
        "Sistema antiasalto discreto",
        "Activación automática sin intervención",
        "Seguridad física garantizada",
        "Tecnología antiasalto avanzada"
      ],
      highlight: "Sistema antiasalto: Actúa antes que sea tarde"
    }
  ]

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos <strong>instalación de alarmas para autos</strong>, <strong>GPS para vehículos</strong> y <strong>sistemas antiasalto </strong> 
            con tecnología moderna, confiable y accesible para proteger tu inversión más importante.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white border-2 border-gray-100 rounded-lg p-6 hover:shadow-xl hover:border-[#001d8b]/20 transition-all duration-300">
              {/* Header del servicio */}
              <div className="text-center mb-6">
                <div className="bg-[#001d8b]/10 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <service.icon className="h-12 w-12 text-[#001d8b]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <h4 className="text-lg text-[#001d8b] font-medium">Características del {service.title.split(' ')[0]}: {service.subtitle}</h4>
              </div>
              
              {/* Descripción */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              {/* Características */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Características:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="bg-[#001d8b]/10 p-1 rounded-full">
                        <Eye className="h-3 w-3 text-[#001d8b]" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Frase destacada */}
              <div className="bg-[#001d8b]/5 p-4 rounded-lg border-l-4 border-[#001d8b] mb-6">
                <p className="font-medium text-gray-900">
                  "{service.highlight}"
                </p>
              </div>
              
              {/* Botón */}
              <button 
                onClick={() => scrollToSection('contacto')}
                className="w-full bg-[#001d8b] hover:bg-primary/90 text-white py-3 rounded-lg transition-colors"
              >
                Solicitar Información
              </button>
            </div>
          ))}
        </div>

        {/* Beneficios adicionales */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Beneficios Adicionales: Instalación de Alarmas y GPS sin Mensualidad
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-[#001d8b]/10 p-3 rounded-lg w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Smartphone className="h-8 w-8 text-[#001d8b]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Control Total</h3>
              <p className="text-gray-600 text-sm">Maneja todo desde tu celular</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#001d8b]/10 p-3 rounded-lg w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Zap className="h-8 w-8 text-[#001d8b]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Instalación Rápida</h3>
              <p className="text-gray-600 text-sm">Servicio profesional garantizado</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#001d8b]/10 p-3 rounded-lg w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Shield className="h-8 w-8 text-[#001d8b]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Garantía Real</h3>
              <p className="text-gray-600 text-sm">Respaldamos nuestro trabajo</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#001d8b]/10 p-3 rounded-lg w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-[#001d8b]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sin Mensualidades</h3>
              <p className="text-gray-600 text-sm">Inversión única, tranquilidad permanente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection