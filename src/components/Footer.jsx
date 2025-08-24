// Importación de iconos de Lucide React
import { LuShield, LuPhone, LuMail, LuMapPin } from 'react-icons/lu'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

// Componente Footer - Pie de página
const Footer = () => {
  // Año actual para copyright
  const currentYear = new Date().getFullYear()

  // Función para scroll suave a secciones
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Información de la empresa */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 rounded-lg">
                <LuShield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Security Cars Import</h3>
                <p className="text-gray-400 text-sm">Sistemas de Seguridad Vehicular</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Especialistas en sistemas de seguridad vehicular. 
            </p>
            
            <div className="space-y-2">
              <p className="text-primary font-semibold">
                "Protege lo que más valoras"
              </p>
              <p className="text-gray-400 text-sm">
                Seguridad inteligente para tu auto
              </p>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                Contacto
              </button>
            </nav>
          </div>

          {/* Servicios */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Nuestros Servicios</h4>
            <div className="space-y-3">
              <div className="text-gray-300">
                <h5 className="font-medium text-white">GPS Trackers</h5>
                <p className="text-sm">Monitoreo en tiempo real</p>
              </div>
              <div className="text-gray-300">
                <h5 className="font-medium text-white">Alarmas con App</h5>
                <p className="text-sm">Control desde tu celular</p>
              </div>
              <div className="text-gray-300">
                <h5 className="font-medium text-white">Sistema Anti-Asalto</h5>
                <p className="text-sm">Protección automática</p>
              </div>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <LuPhone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-white font-medium">+51 999 888 777</p>
                  <p className="text-gray-400 text-sm">Lun - Sáb: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <LuMail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-white font-medium">info@securitycarsimport.com</p>
                  <p className="text-gray-400 text-sm">Respuesta en 24 horas</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <LuMapPin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-white font-medium">Lima, Perú</p>
                  <p className="text-gray-400 text-sm">Servicio a domicilio</p>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <h5 className="font-medium text-white mb-3">Síguenos</h5>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-gray-800 p-2 rounded-lg hover:bg-primary transition-colors"
                  aria-label="FaFacebook"
                >
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 p-2 rounded-lg hover:bg-primary transition-colors"
                  aria-label="FaInstagram"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-gray-800 p-2 rounded-lg hover:bg-primary transition-colors"
                  aria-label="FaYoutube"
                >
                  <FaYoutube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Security Cars Import. Todos los derechos reservados.
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Garantías
              </a>
            </div>
          </div>
          
          {/* Mensaje final */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Desarrollado con tecnología moderna para proteger tu patrimonio más valioso
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer