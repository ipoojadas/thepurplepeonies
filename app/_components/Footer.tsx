import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { sectionPadding } from "./sectionPadding";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: "/frame6/instagram-icon.svg",
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com",
    icon: "/frame6/pinterest-icon.svg",
  },
  {
    label: "Behance",
    href: "https://behance.net",
    icon: "/frame6/behance-icon.svg",
  },
  {
    label: "Email",
    href: "mailto:hello@thepurplepeonies.com",
    icon: "/frame6/mail-icon.svg",
  },
];

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative min-h-screen lg:h-screen w-full overflow-hidden flex flex-col justify-between"
    >
      {/* Top Outro Section ("before you go..") - 55% Height */}
      <div className="bg-[#f9edf7] h-[55%] flex flex-col justify-between pt-8 sm:pt-12 lg:pt-0 relative overflow-hidden">
        <div className={`w-full my-auto relative z-10 ${sectionPadding}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12 w-full">
            {/* Left Column: Heading & Note */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
              <h2 className="relative inline-flex items-center">
                <Image
                  src="/frame6/before-you-go-font-text.png"
                  alt="before you go.."
                  width={1400}
                  height={380}
                  priority
                  className="h-9 sm:h-11 md:h-13 lg:h-[48px] xl:h-[58px] 2xl:h-[66px] w-auto object-contain object-left"
                />
                <Image
                  src="/frame1/moving-bee.GIF"
                  alt="Moving Bee"
                  width={800}
                  height={800}
                  unoptimized
                  className="absolute right-[-160px] sm:right-[-220px] md:right-[-290px] lg:right-[-370px] xl:right-[-450px] 2xl:right-[-520px] -top-[80px] sm:-top-[110px] md:-top-[145px] lg:-top-[185px] xl:-top-[225px] w-[270px] h-[270px] sm:w-[360px] sm:h-[360px] md:w-[470px] md:h-[470px] lg:w-[585px] lg:h-[585px] xl:w-[700px] xl:h-[700px] max-w-none object-contain pointer-events-none z-10 rotate-[135deg]"
                />
              </h2>

              <div className="mt-5 sm:mt-7 space-y-4 sm:space-y-5 font-playfair text-[13.5px] sm:text-[14.5px] md:text-[15.5px] lg:text-[13.5px] xl:text-[15px] 2xl:text-[16.5px] leading-[1.85] sm:leading-[1.9] text-[#2D2530]">
                <p>
                  I hope you found something that inspired you,
                  <br className="hidden sm:inline" />
                  made you smile or sparkled an idea worth chasing.
                </p>
                <p>Thanks for stopping by.</p>
              </div>
            </div>

            {/* Right Column Placeholder for Grid Balance on Large Screens */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-6" />
          </div>
        </div>

        {/* Bicycle Artwork (anchored directly to bottom-right resting on the divider) */}
        <div className="relative lg:absolute lg:bottom-0 lg:right-0 w-full pointer-events-none z-10 mt-4 sm:mt-6 lg:mt-0 leading-none">
          <div className={`w-full flex justify-end ${sectionPadding}`}>
            <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[440px] xl:max-w-[520px] 2xl:max-w-[580px] leading-none -mb-1.5 sm:-mb-2 lg:-mb-2.5">
              <Image
                src="/frame6/cycle-bottom-right.png"
                alt="Pastel vintage bicycle with flower basket on green mound"
                width={1200}
                height={630}
                priority
                className="h-auto w-full object-contain object-bottom block"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Textured Brush Divider (bottom-border-orange.svg) - positioned on the edge between sections */}
      <div
        className="relative w-full shrink-0 leading-none z-20 pointer-events-none -my-2 sm:-my-2.5 md:-my-3 lg:-my-3.5"
        aria-hidden="true"
      >
        <Image
          src="/frame6/bottom-border-orange.svg"
          alt=""
          width={1970}
          height={146}
          className="w-full h-4 sm:h-5 md:h-6 lg:h-7 xl:h-8 object-cover object-center block"
        />
      </div>

      {/* Bottom Footer Bar - 45% Height */}
      <div className="bg-[#fff5f0] h-[45%] flex flex-col justify-between pt-6 sm:pt-8 lg:pt-8 xl:pt-10 pb-6 sm:pb-10 md:pb-12 lg:pb-16 xl:pb-24 2xl:pb-32">
        <div className={`flex flex-col justify-between h-full w-full ${sectionPadding}`}>
          {/* Top Center: "designed with heart" */}
          <div className="w-full flex justify-center pt-5 sm:pt-7 md:pt-9 lg:pt-8 xl:pt-11">
            <Image
              src="/frame6/design-with-heart-text.png"
              alt="designed with heart"
              width={800}
              height={200}
              className="h-9 sm:h-10 md:h-12 lg:h-13 xl:h-15 2xl:h-16 w-auto object-contain"
            />
          </div>

          {/* Bottom Row: Logo (Left) | Copyright (Center) | Social Icons (Right) */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 items-end justify-between gap-6 lg:gap-4">
            {/* Left: Logo */}
            <div className="flex justify-center lg:justify-start items-end">
              <Logo imageClassName="h-16 sm:h-20 md:h-24 lg:h-26 xl:h-32 2xl:h-36 w-auto object-contain object-left-bottom" />
            </div>

            {/* Center: Copyright */}
            <div className="text-center flex justify-center items-end pb-1 sm:pb-1.5 md:pb-2">
              <p className="font-sans text-xs sm:text-[13px] md:text-sm lg:text-[14px] xl:text-[15px] tracking-wider text-[#111111] font-bold">
                © 2026 The Purple Peonies. All rights reserved.
              </p>
            </div>

            {/* Right: Social Links */}
            <div className="flex items-center justify-center lg:justify-end gap-6 sm:gap-7 lg:gap-7 xl:gap-8 pb-1 sm:pb-1.5 md:pb-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="transition-transform duration-200 hover:scale-110 opacity-90 hover:opacity-100"
                >
                  <Image
                    src={link.icon}
                    alt={link.label}
                    width={36}
                    height={36}
                    className="h-7 w-7 sm:h-8 sm:w-8 md:h-8.5 md:w-8.5 lg:h-9 lg:w-9 xl:h-10 xl:w-10 object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
