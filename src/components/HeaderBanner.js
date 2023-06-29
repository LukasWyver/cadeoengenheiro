import Image from "next/image";

function HeaderBanner() {
  return (
    <>
      <Image
        fill
        alt=""
        priority
        src="/banners/bg-header.jpg"
        className="absolute inset-0 w-full max-h-[118px] bg-no-repeat object-cover -z-10"
      />
      <div className="w-full mx-auto px-3 relative -z-10">
        <div className="max-w-[1465px] h-[44px] bg-secondary mx-auto rounded-b-full"></div>
      </div>
    </>
  );
}

export default HeaderBanner;
