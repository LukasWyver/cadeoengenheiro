import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import LinkList from "./LinkList";
import { FiX } from "react-icons/fi";

function NavbarModal({ isVisible, onClose }) {

  if (isVisible) {
    return (
      <>
        <button onClick={onClose} className="bg-black/75 fixed inset-0 z-40" id="overlay"></button>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}

          className="fixed left-0 top-0 bottom-0 w-full max-w-[280px] xs:max-w-xs bg-primary h-full z-50 p-4 overflow-y-scroll">
          <div className="space-y-16">
            <div className="flex justify-between">
            <Image
              priority
              width={215}
              height={61}
              className=""
              src="/icons/logo.svg"
              alt="logo Cadê o Engenheiro?"
            />

              <button onClick={onClose} className="hover:bg-white/20 rounded-lg w-7 h-7 flex items-center justify-center p-1">
                <FiX color="#fff" size={24}/>
              </button>
          </div>

            <ul className="flex flex-col rounded text-white space-y-2.5">
              <LinkList />
            </ul>
          </div>

          <div className="space-y-4 mt-4">
            <button className="btn primary w-fit min-w-[109px]">
              <Image
                src="/icons/btn-cliente.svg"
                width={16}
                height={16}
                alt="area dos clientes"
              />
              <Link href="/" className="!text-sm !leading-['18px'] font-semibold">
                Cliente
              </Link>
            </button>

            <button className="btn secondary w-fit min-w-[109px]">
              <Image
                src="/icons/btn-parceiro.svg"
                width={16}
                height={16}
                alt="area dos parceiros"
              />
              <Link href="/" className="!text-sm !leading-['18px'] font-semibold">
                Parceiro
              </Link>
            </button>
          </div>
        </motion.div>
      </>

    )
  } else {
    null
  }
}


export default NavbarModal;
