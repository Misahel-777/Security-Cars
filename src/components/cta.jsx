import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const whatsappText = encodeURIComponent(
  "Hola 👋, estoy interesado en sus servicios"
);

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

export default function ContactSection() {
  return (
        <section className="relative py-20 md:py-10">
      <div className="max-w-5xl mx-auto px-4 md:px-10 lg:px-8">
        <div className="rounded-3xl bg-[#FAFAFA] shadow-xl/30 grid grid-cols-1 md:grid-cols-2 items-center">

            {/* LEFT */}
            <div id="contact" className="p-8 md:p-16 lg:p-20">

                <h4 className="text-3xl md:text-4xl lg:text-4xl text-center font-extrabold text-black leading-tight">Contactanos</h4>
                <div className="flex flex-col gap-8 pt-10">
                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-xl bg-green-500 text-white flex items-center justify-center"><Phone /></div>
                    <div>
                      <p className="text-gray-700">907 300 174</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gray-200 text-red-600 flex items-center justify-center"><Mail /></div>
                    <div>
                      <p className="text-gray-700">misahel@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <p className='font-medium text-[20px]'>Redes sociales</p>
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

            {/* RIGHT */}
            <div className="relative p-4 md:p-6 lg:p-20 mx-auto rounded-b-3xl flex flex-col items-center justify-center text-center">
                <div className="mb-4">
                  <h4 className="text-2xl font-bold mb-2">Atención Personalizada</h4>
                </div>
                {/* BOTÓN WHATSAPP */}
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group w-full py-5 px-8 rounded-full flex items-center justify-center gap-2 text-white font-extrabold text-[20px] transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg" style={{background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",}}>WhatsApp</a>
            </div>
          </div>
        </div>
    </section>
  );
}