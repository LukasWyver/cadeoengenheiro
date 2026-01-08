import Image from "next/image";
import Link from "next/link";
import { messageWhatsapp } from "@/utils/messageWhatsapp";

function Footer() {
  return (
    <>
      <footer className="bg-secondary">
          <div className="w-full mx-auto px-3 relative">
            <div className="max-w-[1465px] h-[44px] bg-white rounded-b-full mx-auto"></div>
          </div>


          <div className="pt-[51px] px-3 pb-[59px] grid max-md:gap-4 grid-cols-1 sm:grid-cols-6 md:grid-cols-9  max-w-[905px] mx-auto">
                <Link href="/" className="col-span-1 sm:col-span-2 sm:col-start-2 md:col-start-1">
                  <Image src="/favicon.svg" alt="logo Cadê o Engenheiro?" width={76} height={76} />
                </Link>

                <div className="col-span-1 sm:col-span-2 md:col-span-3">
                  <strong className="text-[21px] leading-[21px] font-bold text-white mb-3">Entre em Contato</strong>
                  <ul>
                    <li><a href={messageWhatsapp()} target="_blank" className="text-[13px] leading-[17px] text-white mb-1">Whatsapp: (43) 99116-8074</a></li>
                    <li><a href="mailto:contato@cadeoengenheiro.com.br" target="_blank" className="text-[13px] leading-[17px] text-white">contato@cadeoengenheiro.com.br</a></li>
                  </ul>
                </div>

                <nav className="col-span-1 sm:col-span-2 sm:col-start-2 md:col-start-6">
                  <strong className="text-[21px] leading-[21px] font-bold text-white mb-[14px]">Mapa do site</strong>
                  <ul className="">
                    <li className="text-[13px] leading-[17px] text-white">.: <Link href="/">Home</Link></li>
                    <li className="text-[13px] leading-[17px] text-white">.: <Link href="/sobre">Quem somos</Link></li>
                    {/* <li className="text-[13px] leading-[17px] text-white">.: <Link href="/servicos/acompanhamento-de-obras">Serviços</Link></li> */}
                    {/* <li className="text-[13px] leading-[17px] text-white">.: <Link href="/planos">Planos</Link></li> */}
                    {/* <li className="text-[13px] leading-[17px] text-white">.: <Link href="/blog">Blog</Link></li> */}
                    <li className="text-[13px] leading-[17px] text-white">.: <Link href="/contato">Contato</Link></li>
                    {/* <li className="text-[13px] leading-[17px] text-white">.: <Link href="/">Área do Cliente</Link></li> */}
                  </ul>
                </nav>

                <div className="col-span-1 sm:col-span-2">
                  <strong className="text-[21px] leading-[21px] font-bold text-white mb-3">Redes Sociais</strong>
                  <div className="flex gap-[5px]">
                    <a href="https://www.facebook.com/profile.php?id=100071836304306" target="_blank" className="text-[13px] leading-[17px] text-white mb-1">
                        <Image src="/icons/facebook-footer.svg" alt="icone do facebook" width={19.7} height={19.7} />
                    </a>
                    <a href="https://www.instagram.com/cadeoengenheiro/" target="_blank" className="text-[13px] leading-[17px] text-white">
                        <Image src="/icons/instagram-footer.svg" alt="icone do instagram" width={19.5} height={19.5} />
                    </a>
                    <a href="https://www.linkedin.com/company/cadê-o-engenheiro/?viewAsMember=true" target="_blank" className="text-[13px] leading-[17px] text-white">
                        <Image src="/icons/linkedin-footer.svg" alt="icone do instagram" width={19.5} height={19.5} />
                    </a>
                  </div>
                </div>
          </div>

      </footer>

      <div className="bg-white p-4">
        <p className="text-center text-sm font-normal leading-4 text-headline">Todos os direitos reservados © 2023 | Site desenvolvido por <a className="hover:font-medium transition-all duration-75" href="https://web2midia.com.br/" target="_blank">Web2midia</a></p>
      </div>
    </>
  );
}
export default Footer;
