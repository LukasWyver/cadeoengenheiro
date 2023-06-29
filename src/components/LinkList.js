
import React from "react";
import ActiveLink from "./ActiveLink";


function LinkList() {
  const links = [
    { id: 1, text: "Home", href: "/" },
    { id: 2, text: "Quem somos", href: "/sobre" },
    { id: 3, text: "Serviços", href: "/servicos" },
    { id: 4, text: "Cases de sucesso", href: "/cases" },
    { id: 5, text: "Blog", href: "/blog" },
    { id: 6, text: "Contato", href: "/contato" },
  ];

  return (
    <>
      {links.map((link) => (
        <li key={link.id}>
          <ActiveLink href={link.href} title={link.text}/>
        </li>
      ))
      }
    </>

  )
}

export default LinkList;



