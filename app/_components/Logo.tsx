import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  imageClassName?: string;
};

const Logo = ({ className = "", imageClassName }: LogoProps) => {
  return (
    <Link href="/" className={`block shrink-0 ${className}`}>
      <Image
        src="/frame1/the-purple-peonies-brand-logo.png"
        alt="The Purple Peonies"
        width={340}
        height={200}
        priority
        className={imageClassName || "h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain"}
      />
    </Link>
  );
};

export default Logo;
