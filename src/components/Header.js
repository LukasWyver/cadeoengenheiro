import { useState } from "react";
import { HiMenu } from "react-icons/hi";

import Image from "next/image";
import Link from "next/link";

import { motion } from 'framer-motion';

import LinkList from "./LinkList";

import NavbarModal from "./NavbarModal";
import ActiveLink from "./ActiveLink";

function Header() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

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

          <ul className="items-center ml-auto w-full max-w-[595px] justify-between text-[15px] font-medium leading-5 hidden lg:flex">
            <LinkList />
          </ul>

          <div className="ml-auto lg:ml-8 flex items-center gap-1.5">
            <button className="btn primary w-fit min-w-[109px] max-lg:hidden">
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
            <button className="btn secondary w-fit min-w-[109px] max-lg:hidden">
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

            <motion.div
              whileTap={{ scale: 0.8 }}
            >
              <HiMenu
                size={22}
                color="#fff"
                className="lg:hidden"
                onClick={openModal}
              />
            </motion.div>

          </div>
        </nav>
      </header>

      <NavbarModal isVisible={isOpen} onClose={closeModal} />
    </>
  );
}

export default Header;
