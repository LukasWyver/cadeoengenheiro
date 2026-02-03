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
  const [isScrolled, setIsScrolled] = useState(false);

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


  /* Scroll do header */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // verifica imediatamente ao montar
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <header className={`
          sticky top-0 z-30 h-[118px] pt-5
          transition-all duration-300
          ${isScrolled ? "bg-primary/90 backdrop-blur-md shadow-lg" : "bg-transparent"}
        `}>
        <nav className="max-w-[1170px] h-[61px] mb-9 mx-auto px-4 md:px-2 flex items-center relative ">
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
            <Link href="https://admin.cadeoengenheiro.com.br/login" target="_blank" className="!text-sm !leading-['18px'] font-semibold btn primary w-fit min-w-[109px] max-lg:hidden">
              <HiUser size={18} color="#fff" />
              <span>Login</span>
            </Link>

            <HiMenu size={52} color="#fff" className="lg:hidden px-3 pr-0" onClick={openModal} />
          </div>
        </nav>
      </header>

      <NavbarModal isVisible={isOpen} onClose={closeModal} />
    </>
  );
}

export default Header;
