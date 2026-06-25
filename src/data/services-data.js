// services-data.js
import { generateServiceSchemas } from './schemas';

export const SERVICES = {
  insonorizacion: {
    slug: "insonorizacion",
    name: "Insonorización de Autos en Lima",
    description: "Instalación profesional de materiales acústicos y térmicos (butilo, espuma CCF, MLV) en puertas, piso, techo, capó y maletero. Reduce ruido, vibraciones y calor interior. Trabajo garantizado.",
    image: "og-insonorizante.webp",
    alternateNames: ["Insonorización automotriz Lima", "Instalación de insonorizante para autos", "Aislamiento acústico vehicular Lima"],
    serviceType: "Insonorización Automotriz",
    areaServed: "Lima Metropolitana, Perú",
    faq: [
      { question: "¿Cuánto cuesta insonorizar un auto en Lima?", answer: "Depende de las zonas... (tu texto)" },
      // ... todas las preguntas que tenías
    ],
    publishedDate: "2025-06-01T00:00:00-05:00"
  },
  // ============================================================
  // ALARMA PARA AUTO
  // Keywords consolidadas (sin duplicados, sin canibalización):
  // - Intención principal: instalación de alarmas para autos
  // - Eliminadas: variantes "coche/carro" redundantes con "auto",
  //   "tienda/venta" (no es e-commerce), "cierre centralizado" (otro servicio)
  // ============================================================
  alarma: {
    slug: "alarma",
    name: "Alarma para Auto en Lima",
    description: "Instalación profesional de alarmas para auto en La Molina, Lima. Sistemas básicos y Full Plus con antiasalto integrado, sensor de golpe graduable, sirena de alta potencia y encendido a distancia. Trabajo garantizado, precios económicos.",
    image: "/og-alarma.webp",
    alternateNames: [
      "Instalación de alarmas para autos Lima",
      "Alarmas vehiculares Lima",
      "Sistema de alarma para auto La Molina"
    ],
    serviceType: "Instalación de Alarmas Automotrices",
    areaServed: "Lima Metropolitana, Perú",
    faq: [
      {
        question: "¿Qué tipos de alarma para auto instalan en Security Cars?",
        answer: "Instalamos cuatro modelos: Alarma Básica (protección por apertura y sensor de golpe), Alarma Full Plus (incluye antiasalto, bloqueo de encendido y código de seguridad), Alarma Básica Integrada (se acopla al control original del vehículo) y Alarma Integrada Full Plus (compatible con vehículos que ya tienen control a distancia, con antiasalto y bajo consumo eléctrico)."
      },
      {
        question: "¿Cuánto cuesta instalar una alarma para auto en Lima?",
        answer: "El precio varía según el modelo elegido. Tenemos opciones desde sistemas básicos hasta alarmas Full Plus con antiasalto integrado. Escríbenos por WhatsApp al 907 300 174 para darte una cotización exacta según tu vehículo."
      },
      {
        question: "¿La instalación de alarma daña el cableado de mi auto?",
        answer: "No. Trabajamos con técnicos especializados que respetan el cableado original del vehículo. El resultado es una instalación limpia, ordenada y sin cables sueltos, tal como de fábrica."
      },
      {
        question: "¿Instalan alarmas a domicilio en Lima?",
        answer: "Sí, realizamos instalaciones a domicilio en La Molina y distritos cercanos como Surco, Ate, San Borja y Miraflores. También puedes traer tu vehículo directamente a nuestro taller en La Molina."
      },
      {
        question: "¿La alarma Full Plus sirve como antiasalto?",
        answer: "Sí. La Alarma Full Plus incluye función antiasalto: si te obligan a bajar del vehículo, el motor se apaga automáticamente al minuto y medio. Además cuenta con bloqueo de encendido por estacionamiento y un código de seguridad único."
      }
    ],
    publishedDate: "2025-06-01T00:00:00-05:00"
  },

  // ============================================================
  // GPS PARA AUTO
  // Keywords consolidadas:
  // - Intención principal: instalación y rastreo GPS vehicular
  // - Eliminadas: "gps para camiones" (diferente segmento),
  //   "gps con corta corriente" (puede confundirse con antiasalto),
  //   variantes idénticas de precio/instalación
  // ============================================================
  gps: {
    slug: "gps",
    name: "GPS para Auto en Lima",
    description: "Instalación de GPS 4G para autos en La Molina, Lima. Rastreo en tiempo real desde tu celular, corte de motor remoto, alertas de encendido y batería interna de respaldo. Pago único de por vida, sin mensualidad. Compatible con flotas.",
    image: "/og-gps.webp",
    alternateNames: [
      "Rastreador GPS para autos Lima",
      "GPS tracker vehicular Lima",
      "Sistema de rastreo GPS La Molina"
    ],
    serviceType: "Instalación de GPS Vehicular",
    areaServed: "Lima Metropolitana, Perú",
    faq: [
      {
        question: "¿Si desconectan los cables de la batería del auto el GPS sigue funcionando?",
        answer: "Sí. Nuestros equipos cuentan con una batería interna de respaldo que mantiene el rastreo activo por varias horas, aunque desconecten la batería principal del vehículo."
      },
      {
        question: "¿Instalar el GPS afecta la garantía de mi auto nuevo?",
        answer: "No. Realizamos instalaciones técnicas especializadas que no alteran el sistema eléctrico original del vehículo, manteniendo tu garantía de fábrica intacta."
      },
      {
        question: "¿Puedo rastrear varios vehículos desde el mismo aplicativo?",
        answer: "Sí. Puedes visualizar toda tu flota de vehículos desde el aplicativo, computadora o tablet bajo un mismo usuario."
      },
      {
        question: "¿El GPS tiene mensualidad?",
        answer: "No. El equipo es pago único de por vida. No hay mensualidad ni cargos adicionales por el rastreo."
      },
      {
        question: "¿Qué alertas envía el GPS a mi celular?",
        answer: "El sistema envía alertas cuando alguien enciende el motor sin tu permiso, si golpean el vehículo, si se viola la chapa de encendido y si desconectan la batería. También puedes hacer un corte de motor remoto desde tu celular en caso de robo."
      }
    ],
    publishedDate: "2025-06-01T00:00:00-05:00"
  },

  // ============================================================
  // ANTIASALTO PARA AUTO
  // Keywords consolidadas:
  // - Intención principal: sistema corta corriente / antiasalto
  // - Eliminadas: variantes exactas duplicadas ("corta corriente a distancia"
  //   aparece dos veces en el archivo original), "cortacorrientes coche"
  //   (mismo concepto), "corta corriente vehiculo/vehiculos" (redundante)
  // - Nota: "gps con corta corriente" se deja en GPS, no aquí
  // ============================================================
  antiasalto: {
    slug: "antiasalto",
    name: "Antiasalto para Auto en Lima",
    description: "Instalación de sistema antiasalto con corta corriente inteligente en La Molina, Lima. Protección modo antiatraco: si te bajan del vehículo el motor se apaga automáticamente al minuto y medio. Bloqueo de encendido por estacionamiento y modo Valet. Trabajo garantizado.",
    image: "/og-antiasalto.webp",
    alternateNames: [
      "Corta corriente para auto Lima",
      "Sistema antiasalto vehicular Lima",
      "Antiasalto por proximidad La Molina"
    ],
    serviceType: "Instalación de Sistema Antiasalto Vehicular",
    areaServed: "Lima Metropolitana, Perú",
    faq: [
      {
        question: "¿Qué es el antiasalto por proximidad y cómo funciona?",
        answer: "Es un sistema que detecta la presencia del conductor mediante un chip o control de proximidad. Al estacionar, el sistema se activa automáticamente después de un minuto y medio bloqueando el motor. Si te bajan forzosamente del vehículo, el ladrón puede llevárselo pero el motor se apagará solo al minuto y medio, aumentando las posibilidades de recuperación."
      },
      {
        question: "¿Es peligroso que el motor se apague mientras el auto está en marcha?",
        answer: "No. El protocolo de apagado es progresivo y emite alertas sonoras previas, lo que permite una detención segura que prioriza tanto la seguridad vial como la integridad del conductor."
      },
      {
        question: "¿Afecta la garantía de mi auto nuevo?",
        answer: "No. La instalación la realizan técnicos especializados que no alteran el sistema eléctrico original del vehículo."
      },
      {
        question: "¿Qué pasa si pierdo el chip o control de proximidad?",
        answer: "El sistema cuenta con un método de desactivación de emergencia que el técnico te enseña en el momento de la instalación."
      },
      {
        question: "¿Qué es el modo Valet del antiasalto?",
        answer: "El modo Valet te permite entregar tu auto a mantenimiento sin revelar tu sistema de seguridad. El sistema permanece oculto y bajo tu control absoluto. Lo reactivás cuando retiras el vehículo del mantenimiento."
      }
    ],
    publishedDate: "2025-06-01T00:00:00-05:00"
  },

  // ============================================================
  // ALZAVIDRIOS ELÉCTRICOS
  // Keywords consolidadas:
  // - Intención principal: reparación e instalación de alzavidrios
  // - Eliminadas: "kit de/para vidrios eléctricos" (producto, no servicio),
  //   "motores para vidrios eléctricos universales" (variante de "motores de
  //   vidrios eléctricos"), "alza vidrios eléctrico" = "alzavidrios eléctricos"
  // ============================================================
  alzavidrios: {
    slug: "alzavidrios",
    name: "Alzavidrios Eléctricos para Auto en Lima",
    description: "Reparación e instalación de alzavidrios eléctricos (elevalunas) en La Molina, Lima. Solucionamos vidrios que no suben, motores que suenan sin funcionar y sistemas lentos. También convertimos sistemas manuales a eléctricos. Servicio a domicilio disponible.",
    image: "https://securitycars.com/img/og-alzavidrios.jpg",
    alternateNames: [
      "Elevalunas eléctrico Lima",
      "Vidrios eléctricos para auto La Molina",
      "Reparación de alzavidrios Lima"
    ],
    serviceType: "Reparación e Instalación de Alzavidrios Eléctricos",
    areaServed: "Lima Metropolitana, Perú",
    faq: [
      {
        question: "¿Qué fallas de alzavidrios eléctricos reparan?",
        answer: "Reparamos vidrios que no suben ni bajan (falla de motor o mecanismo interno), motores que suenan pero no funcionan (daño en cables o engranajes) y vidrios lentos o forzados (falta de mantenimiento o fallo del sistema)."
      },
      {
        question: "¿Pueden instalar alzavidrios eléctricos si mi auto tiene sistema manual?",
        answer: "Sí. Convertimos sistemas manuales a eléctricos con kits universales para 2 y 4 puertas. La instalación queda limpia y sin modificar el cableado original del vehículo."
      },
      {
        question: "¿Cuánto cuesta reparar un alzavidrio eléctrico en Lima?",
        answer: "El precio depende de si es una reparación (cables, poleas, piezas dañadas) o una instalación nueva. Revisamos el sistema antes de reemplazar cualquier pieza para darte la solución más económica. Escríbenos al 907 300 174 para cotizar."
      },
      {
        question: "¿Hacen servicio de alzavidrios a domicilio?",
        answer: "Sí. Vamos a tu casa o lugar de trabajo en La Molina y distritos cercanos como Surco, Ate, San Borja y Miraflores."
      },
      {
        question: "¿Cuánto tiempo tarda la reparación de un alzavidrio?",
        answer: "La mayoría de reparaciones se resuelven el mismo día. Si es una instalación nueva de sistema eléctrico, el tiempo varía según el número de puertas. Te damos el tiempo exacto al momento de la evaluación."
      }
    ],
    publishedDate: "2025-06-01T00:00:00-05:00"
  },

  // ============================================================
  // PESTILLOS ELÉCTRICOS / CIERRE CENTRALIZADO
  // Keywords consolidadas:
  // - Intención principal: instalación y reparación de cierre centralizado
  // - Eliminadas: variantes "coche" redundantes con "auto",
  //   "cierre centralizado de puertas para autos" = "cierre centralizado para autos",
  //   variantes de número de puertas consolidadas en una keyword
  // - Nota: "instalación de cierre centralizado y alarma" se dejó en ALARMA
  //   para evitar canibalización
  // ============================================================
  pestillos: {
    slug: "pestillos",
    name: "Pestillos Eléctricos y Cierre Centralizado en Lima",
    description: "Reparación e instalación de pestillos eléctricos y cierre centralizado para autos en La Molina, Lima. Solucionamos puertas que no cierran, ruidos en seguros y sistemas intermitentes. Instalamos cierre centralizado universal para 2, 4 y 5 puertas. Trabajo garantizado.",
    image: "https://securitycars.com/img/og-pestillos.jpg",
    alternateNames: [
      "Cierre centralizado para autos Lima",
      "Pestillos eléctricos para autos La Molina",
      "Instalación cierre centralizado Lima"
    ],
    serviceType: "Instalación y Reparación de Cierre Centralizado",
    areaServed: "Lima Metropolitana, Perú",
    faq: [
      {
        question: "¿Qué problemas de cierre centralizado reparan?",
        answer: "Reparamos puertas que no cierran con el control remoto, ruidos molestos en los seguros (señal de que el motor del pestillo está fallando) y seguros lentos o intermitentes. Usamos herramientas que protegen la computadora del vehículo durante la revisión."
      },
      {
        question: "¿Instalan cierre centralizado universal si mi auto no tiene uno de fábrica?",
        answer: "Sí. Instalamos sistemas de cierre centralizado universal para 2, 4 y 5 puertas. El kit incluye todo lo necesario y la instalación queda integrada con el sistema eléctrico del vehículo."
      },
      {
        question: "¿Cuánto cuesta instalar cierre centralizado en Lima?",
        answer: "El precio varía según el número de puertas y si es reparación o instalación nueva. Escríbenos al 907 300 174 para una cotización exacta según tu modelo de auto."
      },
      {
        question: "¿La instalación de cierre centralizado consume batería?",
        answer: "No, si se instala correctamente. Verificamos que el sistema no consuma batería en reposo y que los seguros cierren perfectamente al arrancar el vehículo."
      },
      {
        question: "¿En qué se diferencia el pestillo eléctrico del cierre centralizado?",
        answer: "El pestillo eléctrico es el actuador individual de cada puerta (el mecanismo que mueve el seguro). El cierre centralizado es el sistema completo que controla todos los pestillos a la vez desde un mando a distancia o al arrancar el motor. Reparamos ambos componentes."
      }
    ],
    publishedDate: "2025-06-01T00:00:00-05:00"
  },
};

// Función auxiliar para obtener todos los schemas de un servicio dado su clave
export function getServiceSchemasByKey(key) {
  const service = SERVICES[key];
  if (!service) return [];
  return generateServiceSchemas(service);
}