// Importación de hooks de React
import { useState } from 'react'

// Importación de iconos de Lucide React
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, XCircle } from 'lucide-react'

// Componente ContactSection - Sección de contacto
const ContactSection = () => {
  // Estado del formulario
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })
  // Estado para manejar el estado de envío del formulario (cargando, éxito, error)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null) // Para mostrar mensajes de éxito o error

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault() // Evitar el comportamiento por defecto del formulario (recargar la página)
    setLoading(true) // Activar el estado de carga
    setMessage(null) // Limpiar cualquier mensaje anterior

    try {
      // Enviar los datos del formulario a tu API backend
      // ASEGÚRATE de cambiar 'http://localhost:3001/send-email' por la URL real de tu servidor.
      // Si el backend está en el mismo dominio pero en una ruta diferente, podría ser '/send-email'.
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST', // Método HTTP POST para enviar datos
        headers: {
          'Content-Type': 'application/json', // Indicar que el cuerpo de la solicitud es JSON
        },
        body: JSON.stringify(formData), // Convertir los datos del formulario a una cadena JSON
      })

      // Verificar si la respuesta fue exitosa
      if (response.ok) {
        setMessage({ type: 'success', text: '¡Gracias por tu consulta! Te contactaremos pronto.' })
        // Resetear formulario después de un envío exitoso
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: ''
        })
      } else {
        // Si la respuesta no fue exitosa, leer el mensaje de error del servidor
        const errorData = await response.json()
        setMessage({ type: 'error', text: errorData.message || 'Hubo un error al enviar tu consulta. Por favor, inténtalo de nuevo.' })
      }
    } catch (error) {
      // Capturar errores de red o cualquier otra excepción
      console.error('Error al enviar el formulario:', error)
      setMessage({ type: 'error', text: 'No se pudo conectar con el servidor. Por favor, revisa tu conexión e inténtalo de nuevo.' })
    } finally {
      setLoading(false) // Desactivar el estado de carga al finalizar
    }
  }

  // Información de contacto
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "+51 999 888 777",
      description: "Llámanos para consultas inmediatas"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@securitycarsimport.com",
      description: "Envíanos tu consulta por correo"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: "Lima, Perú",
      description: "Servicio a domicilio disponible"
    },
    {
      icon: Clock,
      title: "Horarios",
      content: "Lun - Sáb: 8:00 AM - 6:00 PM",
      description: "Emergencias 24/7"
    }
  ]

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Listo para proteger tu vehículo? Contáctanos para una cotización personalizada 
            y descubre cómo podemos darte la tranquilidad que necesitas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#001d8b]/10 p-3 rounded-lg">
                      <info.icon className="h-6 w-6 text-[#001d8b]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-lg text-[#001d8b] font-medium">{info.content}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mensaje motivacional */}
            <div className="bg-[#001d8b]/5 border border-[#001d8b]/20 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="h-6 w-6 text-[#001d8b]" />
                <h4 className="text-lg font-semibold text-gray-900">¿Por qué contactarnos?</h4>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#001d8b]/10 p-1 rounded-full">
                    <div className="w-2 h-2 bg-[#001d8b] rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Cotización gratuita y sin compromiso</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[#001d8b]/10 p-1 rounded-full">
                    <div className="w-2 h-2 bg-[#001d8b] rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Asesoría personalizada según tu vehículo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[#001d8b]/10 p-1 rounded-full">
                    <div className="w-2 h-2 bg-[#001d8b] rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Instalación profesional garantizada</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-[#001d8b]/10 p-1 rounded-full">
                    <div className="w-2 h-2 bg-[#001d8b] rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Soporte técnico post-instalación</span>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border-l-4 border-[#001d8b]">
                <p className="font-medium text-gray-900">
                  "Inversión única, tranquilidad permanente. Protección al alcance de tu bolsillo."
                </p>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-xl/40 p-8">
            <h3 className="text-2xl font-bold text-[#001d8b] text-center mb-6">
              Solicita tu Cotización
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Mensajes de éxito/error */}
              {message && (
                <div className={`p-4 rounded-lg flex items-center space-x-3 ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {message.type === 'success' ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                  <p className="font-medium">{message.text}</p>
                </div>
              )}

              {/* Nombre y Teléfono */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Tu nombre completo"
                    className="w-full placeholder-black/70 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#001d8b] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="999 888 777"
                    className="w-full placeholder-black/70 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#001d8b] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="tu@email.com"
                  className="w-full placeholder-black/70 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#001d8b] focus:border-transparent"
                />
              </div>

              {/* Servicio */}
              <div>
                <label htmlFor="service" className="block text-lg font-medium text-gray-700 mb-2">
                  Servicio de Interés *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#001d8b] focus:border-transparent"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="gps">GPS Tracker</option>
                  <option value="alarma">Alarma con App</option>
                  <option value="antiasalto">Sistema Anti-Asalto</option>
                  <option value="combo">Paquete Completo</option>
                  <option value="consulta">Consulta General</option>
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Cuéntanos sobre tu vehículo y qué tipo de protección necesitas..."
                  rows={4}
                  className="w-full placeholder-black/70 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#001d8b] focus:border-transparent"
                />
              </div>

              {/* Botón enviar */}
              <button 
                type="submit"
                className="w-full bg-[#001d8b] hover:bg-[#001d8b]/90 text-white text-lg py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
                disabled={loading} // Deshabilitar el botón mientras se envía el formulario
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <Send className="h-5 w-5" />
                )}
                <span>{loading ? 'Enviando...' : 'Enviar Consulta'}</span>
              </button>

              <p className="text-sm text-gray-600 text-center">
                * Campos obligatorios. Te contactaremos en menos de 24 horas.
              </p>
            </form>
          </div>
        </div>

        {/* Llamada a la acción final */}
        <div className="mt-16 text-center bg-[#001d8b]/5 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Necesitas Atención Inmediata?
          </h3>
          <p className="text-gray-600 mb-6">
            Para emergencias o consultas urgentes, contáctanos directamente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className=" bg-green-500 text-white hover:bg-green-600 hover:text-white px-25 py-8 rounded-lg transition-colors flex items-center justify-center space-x-4"
              onClick={() => window.open('https://wa.me/51999888777')}
            >
              <MessageCircle className="h-7 w-7" />
              <span className='text-xl'>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection