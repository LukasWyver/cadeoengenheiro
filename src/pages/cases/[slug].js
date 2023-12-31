import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";

import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import api from "@/services/api";

import HeaderBanner from "@/components/HeaderBanner";

const DynamicCta = dynamic(() => import("@/components/Cta"))
const DynamicBlog = dynamic(() => import("@/components/Blog"))
const DynamicFooter = dynamic(() => import("@/components/Footer"))
const DynamicBanner = dynamic(() => import("@/components/Banner"))
const DynamicFormulario = dynamic(() => import("@/components/Formulario"))
const DynamicEmpresas = dynamic(() => import("@/components/Carrossel/Empresas"))

export async function getStaticPaths() {
  const { data } = await api.get("/cases");

  const paths = data.map((customer) => ({
    params: { slug: customer.slug }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { data } = await api.get(`/cases`);
  const customer = data.find(customer => customer.slug === params.slug)

  return {
    props: { customer },
    revalidate: 60 * 60 * 24, // 24 hours
  };
}

export default function Details({ customer }) {
  const [openLightBox, setOpenLightBox] = useState(false);
  const [SlidesImage, setSlidesImage] = useState([])
  const [SlidesIndex, setSlidesIndex] = useState([])

  const photos = customer.photos.map(photo => ({ src: photo.thumb }))

  function handleSlideLightBox(index, imgUrl) {
    setSlidesIndex(index)
    setSlidesImage({ src: imgUrl });
    setOpenLightBox(true);
  }

  return (
    <>
      <Head>
        <title> {`${customer.name} | Cases de sucesso`}</title>
      </Head>

      <HeaderBanner />

      <main className="mt-[43px] sm:mt-[118px] mb-[153px] px-3">
        <h5 className="text-secondary text-lg leading-6 font-medium text-center">
          Cases de sucesso
        </h5>
        <h3 className="text-primary text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up">
          {customer.name}
        </h3>

        <div className="max-w-[1086px] mx-auto mt-[84px]">
          <p className="text-base font-normal leading-6 text-body">
            {customer.description}
          </p>
        </div>

        <div className="mt-[75px]">
          {customer.photos.length === 0 ?
            (
              <div className="flex flex-col">
                <p className="text-base leading-6 font-normal text-body text-center max-w-sm mx-auto">
                  Desculpe, mas não foi encontrado nenhuma foto para este cliente ainda.
                </p>

                <Link href="/cases" className="text-base leading-6 font-semibold text-body text-center max-w-sm mx-auto mt-4">voltar</Link>
              </div>
            )
            : (
              <div className="w-full max-w-[1155px] mx-auto grid sm:grid-cols-2 xm:grid-cols-3 gap-7">
                <Lightbox
                  slides={photos}
                  open={openLightBox}
                  index={SlidesIndex - 1}
                  currentIndex={SlidesIndex}
                  currentSlide={SlidesImage}
                  close={() => setOpenLightBox(false)}
                  styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" }, thumbnailsContainer: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
                  plugins={[Thumbnails, Counter, Slideshow]} // Counter, Slideshow,
                // counter={{ container: { style: { top: "unset", bottom: 0 } } }}
                />

                {customer.photos.map(photo => (
                  <>
                    <button key={photo.id} onClick={() => handleSlideLightBox(photo.id, photo.thumb)}>
                      <Image
                        src={photo.thumb}
                        alt={`photo ${photo.id}`}
                        className="mx-auto"
                        width={366}
                        height={366}
                      />
                    </button>
                  </>
                ))}
              </div>
            )}
        </div>
      </main >

      <DynamicBanner />
      <DynamicCta />
      <DynamicEmpresas />
      <DynamicBlog />
      <DynamicFormulario />
      <DynamicFooter />
    </>
  );
}
