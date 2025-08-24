import React, { useState } from 'react';
import { FiMessageCircle, FiX  } from "react-icons/fi";


const WhatsApp = () => {
  // Estado para controlar si el modal está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);
  
  // Número de WhatsApp (reemplaza con tu número real)
  // Formato: código de país + número sin espacios ni símbolos
  const phoneNumber = "51907300174"; // Ejemplo: número de Argentina
  
  // Lista de consultas disponibles
  const consultations = [
    "Alarma para auto",
    "GPS para auto", 
    "Antiasalto para auto",
  ];

  // Función para abrir/cerrar el modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  // Función para enviar mensaje a WhatsApp
  const sendWhatsAppMessage = (consultation) => {
    // Crear el mensaje personalizado
    const message = `Hola estoy interesado en ${consultation.toLowerCase()}`;
    
    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Crear la URL de WhatsApp Web
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abrir WhatsApp en una nueva ventana
    window.open(whatsappURL, '_blank');
    
    // Cerrar el modal después de enviar
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón flotante de WhatsApp - siempre visible */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleModal}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Abrir chat de WhatsApp">
          <FiMessageCircle size={35} />
        </button>
      </div>

      {/* Modal/Overlay - solo se muestra cuando isOpen es true */}
      {isOpen && (
        <div className="fixed right-0 bottom-20 bg-opacity-50 z-50 flex items-center justify-center p-4">
          {/* Contenedor del modal */}
          <div className="max-w-100 w-full bg-neutral-300 rounded-lg overflow-hidden shadow-2xl animate-in fade-in duration-300">
            
            {/* Header del modal */}
            <div className="bg-green-500 text-white p-4 flex justify-between items-center">
              <h3 className="font-semibold text-lg">¿En qué podemos ayudarte?</h3>
              {/* Botón para cerrar el modal */}
              <button 
                onClick={toggleModal}
                className="text-white hover:bg-green-600 p-1 rounded transition-colors"
                aria-label="Cerrar chat"
              >
                <FiX  size={20} />
              </button>
            </div>

            {/* Contenido del modal */}
            <div className="p-6">
              {/* Mensaje de bienvenida */}
              <div className="mb-4">
                <div className="bg-gray-100 p-3 rounded-lg mb-4">
                  <p className="text-black text-sm">
                    ¡Hola! Gracias por comunicarte con Gamor. ¿Cómo podemos ayudarte?
                  </p>
                </div>
              </div>


                            {/* Lista de consultas */}
              <div className="relative h-40 w-full">
                <p className="text-sm text-black mb-3">Selecciona una opción:</p>
                
                {/* Consultas con posicionamiento absoluto basado en tu código */}
                <button
                  onClick={() => sendWhatsAppMessage("Alarma para auto")}
                  className="absolute top-12 left-30 bg-white rounded-md px-4 py-2 shadow hover:bg-green-50 hover:shadow-md transition-all duration-200 text-sm">
                  Alarma para auto
                </button>
                
                <button
                  onClick={() => sendWhatsAppMessage("GPS para auto")}
                  className="absolute top-25 left-50 bg-white rounded-md px-4 py-2 shadow hover:bg-green-50 hover:shadow-md transition-all duration-200 text-sm">
                  GPS para auto
                </button>
                
                <button
                  onClick={() => sendWhatsAppMessage("Antiasalto para auto")}
                  className="absolute top-25 right-40 bg-white rounded-md px-4 py-2 shadow hover:bg-green-50 hover:shadow-md transition-all duration-200 text-sm">
                  Antiasalto para auto
                </button>
                
              </div>

              {/* Nota informativa */}
              <div className="text-xs text-black text-center">
                Al hacer clic serás redirigido a WhatsApp
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default WhatsApp;