import Link from "next/link";
import { messageWhatsapp } from "@/utils/messageWhatsapp";

function Cta() {
  const seuNumeroAqui = 554330251230;
  const seuTextoAqui = "Olá, gostaria de saber mais a respeito dos seus serviços"

    return (
      <>
        <section className="bg-secondary h-[150px] flex items-center justify-center">
            <Link target="_blank" href={messageWhatsapp(seuNumeroAqui, seuTextoAqui)} className="text-white border border-white font-bold text-[26px] leading-[30px] py-5 px-8 rounded-full">Quero contratar</Link>
        </section>
      </>
      )
    }
export default Cta;
