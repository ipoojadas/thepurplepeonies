import Image from "next/image";
import BeeIcon from "./BeeIcon";
import { sectionPadding } from "./sectionPadding";

const Collaboration = () => {
  return (
    <section
      id="portfolio"
      className="relative w-full overflow-hidden bg-[#f9edf7] py-16 sm:py-20 md:py-28"
    >
      <div className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-14 w-full ${sectionPadding}`}>
        {/* Left Column: Heading & Text */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[74px] text-[#4B2154] font-normal leading-[1.1] tracking-tight">
            Let&apos;s create something
            <br />
            <span className="inline-flex items-center gap-3 sm:gap-4 mt-1">
              <span className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[92px] text-[#D48432] leading-none">
                beautiful together
              </span>
              <BeeIcon className="animate-bee translate-y-1 sm:translate-y-2" size={32} />
            </span>
          </h2>

          <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-7 font-serif text-base sm:text-lg md:text-[19px] leading-[1.8] text-[#2D2530] max-w-xl">
            <p>
              Big ideas, ambitious brands, and slightly obsessive attention to detail?
              Count me in.
            </p>
            <p>
              I love partnering with brands, creatives, and businesses that care deeply
              about what they create and how it&apos;s experienced. From thoughtful
              identities to beautifully crafted visuals, I am here to help turn exciting
              ideas into things people remember, save, and talk about.
            </p>
            <p>
              Because great collaborations aren&apos;t just about making things look
              pretty they are about creating something worth falling in love with.
            </p>
            <p>
              If you have got the vision, I have got the fonts, florals and an unhealthy
              attachment to color palettes.
            </p>
          </div>
        </div>

        {/* Right Column: Girl on Desk by Arched Window Illustration */}
        <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center">
          <div className="relative w-full max-w-[560px] sm:max-w-[620px] transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/collaboration-desk-illustration.png"
              alt="Creative workspace illustration with girl working on laptop by an arched window adorned with peonies"
              width={1400}
              height={1950}
              priority
              className="h-auto w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
