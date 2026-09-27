import Image from "next/image";
import Link from "next/link";
import BeeIcon from "./BeeIcon";
import BrushDivider from "./BrushDivider";
import Logo from "./Logo";
import { sectionPadding } from "./sectionPadding";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.373-.056.23-.182.28-.419.169-1.56-.725-2.533-3.006-2.533-4.841 0-3.94 2.863-7.559 8.257-7.559 4.336 0 7.705 3.09 7.705 7.219 0 4.309-2.716 7.778-6.485 7.778-1.267 0-2.458-.659-2.865-1.437l-.779 2.968c-.282 1.077-1.045 2.427-1.558 3.252 1.139.352 2.348.544 3.606.544 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "https://behance.net",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.115 0-6.625-2.915-6.625-7 0-4.141 2.656-7 6.625-7 4.195 0 6.375 3.087 6.375 6.812 0 .584-.067 1.188-.067 1.188h-9.766c.119 2.375 1.777 3.75 3.558 3.75 1.583 0 2.584-.75 2.973-1.75h2.028zm-7.698-5h5.812c-.156-1.844-1.39-3-2.906-3s-2.75 1.156-2.906 3zm-9.028 5h-4v-12h4.5c2.391 0 4.25 1.344 4.25 3.5 0 1.266-.641 2.312-1.609 2.875 1.312.562 2.109 1.781 2.109 3.266 0 2.406-1.922 3.359-4.25 3.359zm-2-7h2c1.234 0 2.25-.562 2.25-1.75s-1.016-1.75-2.25-1.75h-2v3.5zm0 5h2.25c1.375 0 2.5-.594 2.5-1.875 0-1.25-1.125-1.875-2.5-1.875h-2.25v3.75z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@thepurplepeonies.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l9.518 7.713 9.518-7.713v11.817h-19.036z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="relative w-full overflow-hidden">
      {/* Top Outro Section ("before you go..") */}
      <div className="bg-[#f9edf7] py-16 sm:py-20 md:py-24">
        <div className={`grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14 w-full ${sectionPadding}`}>
          {/* Left Column: Heading & Note */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            <h2 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] text-[#D48432] leading-none">
              before you go..{" "}
              <BeeIcon className="animate-bee translate-y-1 sm:translate-y-2 ml-2" size={32} />
            </h2>

            <p className="mt-6 sm:mt-8 font-serif text-base sm:text-lg md:text-[19px] leading-[1.8] text-[#2D2530] max-w-lg">
              I hope you found something that inspired you, made you smile or
              sparkled an idea worth chasing.
            </p>

            <p className="mt-4 sm:mt-6 font-serif text-base sm:text-lg md:text-[19px] leading-[1.8] text-[#2D2530] max-w-lg">
              Thanks for stopping by.
            </p>
          </div>

          {/* Right Column: Pastel Bicycle with Floral Basket */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] sm:max-w-[520px] transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/footer-bicycle-illustration.png"
                alt="Pastel vintage bicycle with flower basket on green mound"
                width={1300}
                height={750}
                className="h-auto w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Textured Brush Divider */}
      <BrushDivider />

      {/* Bottom Footer Bar */}
      <div className="bg-[#fff5f0] py-10 md:py-12">
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-8 w-full ${sectionPadding}`}>
          {/* Logo */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Center Message & Copyright */}
          <div className="text-center flex flex-col items-center">
            <p className="font-script text-2xl sm:text-3xl text-[#D48432] flex items-center gap-1.5">
              designed with heart{" "}
              <span className="inline-block text-xl" aria-hidden="true">
                ♡
              </span>
            </p>
            <p className="mt-2 font-sans text-xs tracking-wider text-[#6B5E6E]">
              © 2026 The Purple Peonies. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-[#7E5785]">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="transition-colors hover:text-[#4B2154] hover:scale-110 transform duration-200"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
