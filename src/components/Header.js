import { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { HiUser } from "react-icons/hi2";

import Image from "next/image";
import Link from "next/link";

import LinkList from "./LinkList";
import NavbarModal from "./NavbarModal";

function Header() {
  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  /* Drawer Navbar Menu */
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

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


  return (
    <>
      <header className="h-[118px] pt-5">
        <nav className="max-w-[1170px] h-[61px] mb-9 mx-auto px-2 flex items-center relative ">
          <Link href="/" className="mr-8 w-auto h-auto">
            <Image
              priority
              width={215}
              height={61}
              className=""
              src="/icons/logo.svg"
              alt="logo Cadê o Engenheiro?"
            />
          </Link>

          <ul className="items-center ml-auto w-full max-w-[595px] justify-end mr-16 space-x-16 text-[15px] font-medium leading-5 hidden lg:flex">
            <LinkList />
          </ul>

          <div className="ml-auto lg:ml-8 flex items-center gap-1.5">
            {/* <button className="btn primary w-fit min-w-[109px] max-lg:hidden">
              <HiUser size={18} color="#fff" />
              <Link href="/" className="!text-sm !leading-['18px'] font-semibold">Cliente</Link>
            </button> */}

            <Link href="https://admin.cadeoengenheiro.com.br/login" target="_blank" className="!text-sm !leading-['18px'] font-semibold btn primary w-fit min-w-[109px] max-lg:hidden">
              <HiUser size={18} color="#fff" />
              <span>Login</span>
            </Link>

            {/* <div className="" ref={dropDownRef}>
              <button className="btn secondary w-fit min-w-[109px] max-lg:hidden" onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
                <HiUser size={18} color="#f4af38" />
                <span className="!text-sm !leading-['18px'] font-semibold">Parceiro</span>
              </button>
              {isOpenDropdown && (
                <nav className={`${isOpenDropdown ? "flex" : "hidden"} absolute top-full right-2.5 z-10 w-64 mt-1 flex list-none flex-col rounded bg-white py-2 shadow-md shadow-black/10`}>
                  <Link href="/servicos/acompanhamento-de-obras/parceiro"
                    className="text-body p-2 px-5 transition-all duration-300 ease-linear hover:bg-body/10 hover:font-medium hover:text-primary focus:bg-body/10 focus:text-primary focus:outline-none focus:border-noe focus:ring-0 focus-visible:outline-none">
                    Saiba mais
                  </Link>
                  <Link href="/"
                    className="text-body p-2 px-5 transition-all duration-300 ease-linear hover:bg-body/10 hover:font-medium hover:text-primary focus:bg-body/10 focus:text-primary focus:outline-none focus:border-noe focus:ring-0 focus-visible:outline-none">
                    Login
                  </Link>
                </nav>
              )}
            </div> */}

            <HiMenu size={22} color="#fff" className="lg:hidden" onClick={openModal} />
          </div>
        </nav>
      </header>

      <NavbarModal isVisible={isOpen} onClose={closeModal} />
    </>
  );
}

export default Header;
