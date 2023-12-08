import Image from "next/image";
import { useState } from "react";

function HeaderBanner() {
  const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
      setImageLoaded(true);
    };


  return (
    <>
      {!imageLoaded && (
        <div className="absolute inset-0 w-full max-h-[118px] bg-primary -z-10"></div>
      )}

      <Image
          fill
          alt=""
          priority
          onLoad={handleImageLoad}
          src="/banners/bg-header.jpg"
          className={`absolute inset-0 w-full max-h-[118px] bg-no-repeat object-cover -z-10 ${!imageLoaded && 'hidden'}`}
        />

      <div className="w-full mx-auto px-3 relative -z-10">
        <div className="max-w-[1465px] h-[44px] bg-secondary mx-auto rounded-b-full"></div>
      </div>
    </>
  );
}

export default HeaderBanner;
