import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import LinkList from "./LinkList";
import { FiX } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { HiUser } from "react-icons/hi2";

function NavbarModal({ isVisible, onClose }) {
  const router = useRouter();
  const dropDownRef = useRef(null);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  useEffect(() => {
    const closeOnPathChange = async () => {
      onClose();
    };

    closeOnPathChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])

   // UseEffect para adicionar o event listener quando o componente é montado
   useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsOpenDropdown(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    // Retorne uma função de limpeza para remover o event listener quando o componente é desmontado
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

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
                <FiX color="#fff" size={24} />
              </button>
            </div>

            <ul className="flex flex-col rounded text-white space-y-2.5">
              <LinkList />
            </ul>
          </div>

          <div className="space-y-4 mt-4">
            <button className="btn primary w-fit min-w-[109px]">
              <HiUser size={18} color="#fff" />
              <Link href="/" className="!text-sm !leading-['18px'] font-semibold">
                Cliente
              </Link>
            </button>

            <div className="" ref={dropDownRef}>
              <button className="btn secondary w-fit min-w-[109px]" onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
                <HiUser size={18} color="#f4af38" />
                <span className="!text-sm !leading-['18px'] font-semibold">Parceiro</span>
              </button>

              {isOpenDropdown && (
                <nav className={`${isOpenDropdown ? "flex" : "hidden"} flex-col bg-black/20 py-2 rounded-lg mt-4`}>
                   <Link href="https://cadeoengenheiro.vercel.app/servicos/acompanhamento-de-obras/parceiro"
                    className="text-white p-2 px-5 transition-colors duration-300 ease-linear hover:bg-black/20 hover:text-secondary focus:bg-black/20 focus:text-secondary focus:outline-none focus-visible:outline-none">
                    Saiba mais
                  </Link>
                  <Link href="/"
                    className="text-white p-2 px-5 transition-colors duration-300 ease-linear hover:bg-black/20 hover:text-secondary focus:bg-black/20 focus:text-secondary focus:outline-none focus-visible:outline-none">
                    Login
                  </Link>
                </nav>
              )}
            </div>

          </div>
        </motion.div>
      </>

    )
  } else {
    null
  }
}


export default NavbarModal;
