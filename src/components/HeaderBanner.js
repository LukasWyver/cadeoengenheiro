import Image from "next/image";

function HeaderBanner() {
  return (
    <>
      <div className="absolute inset-0 w-full max-h-[118px] bg-primary -z-10">
        <Image
            fill
            alt=""
            priority
            sizes="100vw"
            // onLoad={handleImageLoad}
            src="/banners/bg-header.jpg"
            className="object-cover -z-10"
            // className={`absolute inset-0 w-full max-h-[118px] bg-no-repeat object-cover -z-10 ${!imageLoaded && 'hidden'}`}
          />
        </div>

        <div className="w-full mx-auto px-3 relative -z-10">
          <div className="max-w-[1465px] h-[44px] bg-secondary mx-auto rounded-b-full"></div>
        </div>
    </>
  );
}

export default HeaderBanner;
