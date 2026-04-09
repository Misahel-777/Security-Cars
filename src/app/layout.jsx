import "./globals.css";
import Navbar from '../components/Navbar';
import Footer from "../components/footer";

import { Rubik } from 'next/font/google'

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-rubik',
  display: 'swap',
});

export const metadata = {
    title: "Security Cars | Seguridad y Accesorios para Autos en Lima",
    description: "Security Cars ofrece sistemas de seguridad, GPS, alarmas, cámaras de retroceso, luces LED, alzavidrios y audio para autos en Lima Metropolitana. Instalación a domicilio y en taller. Cotiza hoy.",
    keywords: ["sistemas de seguridad para autos", "gps para autos lima", "alarmas para autos", "corte corriente auto", "alzavidrios electricos", "luces led para autos", "cierre centralizado", "camaras de retroceso", "insonorizacion de auto", "parlantes y audio para carros", "security cars lima"],
    openGraph: {
        title: "Security Cars | Seguridad y Accesorios para Autos en Lima",
        description: "Protege tu vehículo con expertos. Instalamos GPS, alarmas, cámaras de retroceso, luces LED, alzavidrios y audio para autos en Lima Metropolitana.",
        url: "https://securitycars.com",
        type: "website",
        images: [
            {
                url: "/favicon.ico",
                width: 1200,
                height: 630,
                alt: "Security Cars"
            }
        ]
    },
    icons: {
        icon: "/favicon.ico"
    }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rubik.variable}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
