// Importación de iconos de Lucide React
import { LuShield, LuUsers, LuAward, LuClock } from 'react-icons/lu'

// Componente AboutSection - Sección "Quiénes Somos"
const AboutSection = () => {
  // Datos de estadísticas
  const stats = [
    {
      icon: LuUsers,
      number: "500+",
      label: "Clientes Satisfechos",
      description: "Familias que confían en nosotros"
    },
    {
      icon: LuShield,
      number: "100%",
      label: "Instalaciones Exitosas",
      description: "Garantía en cada trabajo"
    },
    {
      icon: LuAward,
      number: "5+",
      label: "Años de Experiencia",
      description: "Especializados en seguridad vehicular"
    },
    {
      icon: LuClock,
      number: "24/7",
      label: "Monitoreo Continuo",
      description: "Protección sin descanso"
    }
  ]

  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenido principal */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                ¿Quiénes Somos?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Somos especialistas en sistemas de seguridad vehicular, dedicados a proteger 
                lo que más valoras: tu vehículo, tu familia y tu tranquilidad.
              </p>
            </div>

            <div className="space-y-6">
              {/* Misión */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Nuestra Misión</h3>
                <p className="text-gray-600 leading-relaxed">
                  Brindar <strong>instalación de alarmas para autos</strong>, <strong>GPS para vehículos</strong> y <strong>sistemas antiasalto</strong> 
                  modernos, confiables y accesibles para personas que valoran su vehículo como parte fundamental de su vida y 
                  quieren protegerlo con tecnología efectiva, sin complicaciones.
                </p>
              </div>

              {/* Enfoque */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Nuestro Enfoque</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nos enfocamos en profesionales con trabajo estable, pequeños empresarios y 
                  familias de clase media que viven en zonas urbanas con alta percepción de 
                  inseguridad. Entendemos que tu vehículo es una herramienta esencial de trabajo 
                  y transporte familiar.
                </p>
              </div>

              {/* Valores */}
              <div className="bg-[#001d8b]/5 p-6 rounded-lg border-l-4 border-[#001d8b]">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Nuestros Valores</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Confiabilidad:</strong> GPS y alarmas con tecnología probada y garantizada</li>
                  <li>• <strong>Accesibilidad:</strong> Alarmas y GPS para autos sin mensualidad</li>
                  <li>• <strong>Profesionalismo:</strong> Instalación experta y servicio de calidad</li>
                  <li>• <strong>Tranquilidad:</strong> Seguridad que te permite dormir tranquilo</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Estadísticas y logros */}
          <div className="space-y-8">
            {/* Grid de estadísticas */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow text-center">
                  <div className="bg-[#001d8b]/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-[#001d8b]" />
                  </div>
                  <div className="text-3xl font-bold text-[#001d8b] mb-1">{stat.number}</div>
                  <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>

            {/* Mensaje destacado */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center space-y-4">
                <div className="bg-[#001d8b]/10 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                  <LuShield className="h-10 w-10 text-[#001d8b]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Compromiso con tu Seguridad: Instalación Garantizada de Sistemas Anti-Robo
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  "No es solo un carro, es tu herramienta de trabajo. Protege tu vehículo, 
                  protege tu futuro. Tranquilidad en todo momento, tu familia y tu auto 
                  siempre protegidos."
                </p>
              </div>
            </div>

            {/* Beneficios clave */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">¿Por qué elegirnos?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#001d8b]/10 p-2 rounded-full">
                    <LuShield className="h-4 w-4 text-[#001d8b]" />
                  </div>
                  <span className="text-gray-700">Instalación profesional con garantía real</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[#001d8b]/10 p-2 rounded-full">
                    <LuAward className="h-4 w-4 text-[#001d8b]" />
                  </div>
                  <span className="text-gray-700">Tecnología moderna y confiable</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[#001d8b]/10 p-2 rounded-full">
                    <LuUsers className="h-4 w-4 text-[#001d8b]" />
                  </div>
                  <span className="text-gray-700">Atención personalizada y seguimiento</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[#001d8b]/10 p-2 rounded-full">
                    <LuClock className="h-4 w-4 text-[#001d8b]" />
                  </div>
                  <span className="text-gray-700">Soporte técnico cuando lo necesites</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection