import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hola 👋, estoy interesado en sus servicios de seguridad vehicular."
  )}`;

  return (
    <footer className="bg-[#0445ec] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* MARCA */}
        <div>
          <h4 className="text-xl font-bold mb-4">
            Seguridad Vehicular
          </h4>
          <p className="text-sm">
            Especialistas en instalación de GPS, alarmas, sensores y tecnología
            automotriz. Protegemos tu vehículo con soluciones modernas y seguras.
          </p>
        </div>

        {/* SERVICIOS */}
        <div>
          <h5 className="font-bold mb-4">Servicios</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/servicios">Cámaras de retroceso</Link></li>
            <li><Link href="/servicios">Sensores de estacionamiento</Link></li>
            <li><Link href="/servicios">Focos LED / HID</Link></li>
            <li><Link href="/servicios">Módulo alzavidrios</Link></li>
            <li><Link href="/servicios">insonorizante</Link></li>
          </ul>
        </div>

        {/* NAVEGACIÓN */}
        <div>
          <h5 className="font-bold mb-4">Navegación</h5>
          <ul className="space-y-2 text-sm">
            <li><Link href="/#inicio">Inicio</Link></li>
            <li><Link href="/servicios">Servicios</Link></li>
            <li><Link href="/servicios/alarmas">Alarma</Link></li>
            <li><Link href="/servicios/gps">GPS</Link></li>
            <li><Link href="/servicios/antiasalto">Antiasalto</Link></li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h5 className="font-bold mb-4">Contacto</h5>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Phone size={16} />
              <span>907 300 174</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={16} />
              <span>misahel@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={16} />
              <span>Lima, Perú</span>
            </div>
          </div>
          

          
          <div className="flex flex-col font-bold mt-3">
            <span className="mb-2">Redes sociales</span>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/profile.php?id=100049090133607" target="_blank" rel="noopener noreferrer">
                  <Image src="/facebook.webp" alt="Facebook" width={32} height={32} className="rounded-2xl" />
                </a>
                <a href="https://www.tiktok.com/@securitycars?lang=es-419" target="_blank" rel="noopener noreferrer">
                  <Image src="/tiktok.webp" alt="TikTok" width={35} height={35} className="rounded-2xl" />
                </a>
              </div>
            </div>

            
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-black text-center text-xs py-6">
        © {new Date().getFullYear()} Seguridad Vehicular. Todos los derechos reservados.
      </div>
    </footer>
  );
}