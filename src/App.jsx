// Importación de estilos CSS
import './App.css'

// Importación de componentes
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import ServicesSection from './components/ServicesSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import SeccionFaq from './components/SeccionFaq.jsx'
import Footer from './components/Footer.jsx'
import Testimonials from './components/Testimonials.jsx'
import WhatsApp from './components/whatsapp.jsx'

// Componente principal de la aplicación
function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header con navegación */}
      <Header />
      
      {/* Sección principal */}
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <SeccionFaq />
        <Testimonials />
        <ContactSection />
      </main>
      
      {/* Pie de página */}
      <Footer />
      <WhatsApp />
    </div>
  )
}

export default App