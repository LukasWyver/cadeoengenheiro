import Link from "next/link";
import { FaWhatsapp } from 'react-icons/fa'
import { messageWhatsapp } from "@/utils/messageWhatsapp";

function WhatsappButton() {
     return (
      <Link target="_blank" href={messageWhatsapp()} className="h-20 w-20 flex justify-center items-center bg-emerald-500 hover:brightness-105 transition-all duration-300 hover:-translate-y-1.5 drop-shadow-2xl fixed bottom-6 right-6 text-white font-bold text-2xl rounded-full">
        <FaWhatsapp size={56} className="drop-shadow-2xl" />
      </Link>
      )
    }
export default WhatsappButton;
