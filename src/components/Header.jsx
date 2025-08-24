// Importación de hooks de React
import { useState } from 'react'

// Importación de iconos de Lucide React
import { LuShield, LuMenu, LuX } from 'react-icons/lu'

// Componente Header - Navegación principal
const Header = () => {
  // Estado para controlar el menú móvil
  const [isMobileLuMenuOpen, setIsMobileLuMenuOpen] = useState(false)

  // Función para scroll suave a secciones
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileLuMenuOpen(false) // Cerrar menú móvil después de navegar
  }

  // Función para alternar menú móvil
  const toggleMobileLuMenu = () => {
    setIsMobileLuMenuOpen(!isMobileLuMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo y nombre de la empresa */}
          <div className="flex items-center space-x-3">
            <div className="bg-[#001d8b] p-2 rounded-lg">
              <LuShield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Security Cars Import</h1>
              <p className="text-xs text-gray-600">Sistemas de Seguridad Vehicular</p>
            </div>
          </div>

          {/* Navegación desktop */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Botón CTA desktop */}
          <button 
            onClick={() => scrollToSection('contacto')}
            className="hidden md:block bg-[#001d8b] text-white px-6 py-2 rounded-lg hover:bg-[#001d8b]/90 transition-colors"
          >
            Cotizar Ahora
          </button>

          {/* Botón menú móvil */}
          <button 
            onClick={toggleMobileLuMenu}
            className="md:hidden p-2"
          >
            {isMobileLuMenuOpen ? (
              <LuX className="h-6 w-6 text-gray-700" />
            ) : (
              <LuMenu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Menú móvil */}
        {isMobileLuMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Contacto
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-[#001d8b] text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors w-fit"
              >
                Cotizar Ahora
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header