import Image from "next/image";
import { sectionPadding } from "./sectionPadding";

const Collaboration = () => {
  return (
    <section
      id="portfolio"
      className="relative min-h-screen lg:h-screen w-full overflow-hidden bg-[#f9edf7] flex flex-col justify-between py-12 sm:py-16 lg:py-0"
    >
      <div className={`relative z-20 w-full my-auto ${sectionPadding}`}>
        {/* Left Column: Heading & Text */}
        <div className="flex flex-col justify-center max-w-xl lg:max-w-[52%] xl:max-w-[48%] 2xl:max-w-[46%]">
          <h2 className="flex flex-col items-start">
            <span className="font-times text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[54px] 2xl:text-[62px] text-[#4B2154] font-normal leading-[1.12] tracking-tight">
              Let&apos;s create something
            </span>
            <div className="relative inline-flex items-center mt-1 sm:mt-2">
              <Image
                src="/frame4/beautiful-together-font-text.png"
                alt="beautiful together"
                width={1200}
                height={350}
                priority
                className="h-9 sm:h-11 md:h-13 lg:h-[46px] xl:h-[56px] 2xl:h-[66px] w-auto object-contain object-left"
              />
              <Image
                src="/frame1/moving-bee.GIF"
                alt="Moving Bee"
                width={800}
                height={800}
                unoptimized
                className="absolute right-[-90px] sm:right-[-125px] md:right-[-165px] lg:right-[-205px] xl:right-[-245px] -top-[70px] sm:-top-[100px] md:-top-[135px] lg:-top-[170px] xl:-top-[205px] w-[270px] h-[270px] sm:w-[360px] sm:h-[360px] md:w-[470px] md:h-[470px] lg:w-[585px] lg:h-[585px] xl:w-[700px] xl:h-[700px] max-w-none object-contain pointer-events-none z-10"
              />
            </div>
          </h2>

          <div className="mt-6 sm:mt-8 lg:mt-6 xl:mt-8 space-y-4 sm:space-y-4.5 lg:space-y-3.5 xl:space-y-4 2xl:space-y-5 font-playfair text-[13.5px] sm:text-[14.5px] md:text-[15.5px] lg:text-[13.5px] xl:text-[15px] 2xl:text-[16.5px] leading-[1.6] text-[#111111] font-normal">
            <p>
              Big ideas, ambitious brands, and slightly obsessive attention to detail?
              <br className="hidden sm:inline" />
              Count me in.
            </p>
            <p>
              I love partnering with brands, creatives, and businesses
              <br className="hidden sm:inline" />
              that care deeply about what they create and how it&apos;s experienced.
              <br className="hidden sm:inline" />
              From thoughtful identities to beautifully crafted visuals,
              <br className="hidden sm:inline" />
              I am here to help turn exciting ideas into things people remember,
              <br className="hidden sm:inline" />
              save, and talk about.
            </p>
            <p>
              Because great collaborations aren&apos;t just about making things look
              pretty
              <br className="hidden sm:inline" />
              they are about creating something worth falling in love with.
            </p>
            <p>
              If you have got the vision, I have got the fonts, florals and
              <br className="hidden sm:inline" />
              an unhealthy attachment to color palettes.
            </p>
          </div>
        </div>
      </div>

      {/* Absolutely Positioned Right Illustration on Bottom Right */}
      <div className="pointer-events-none relative lg:absolute lg:right-0 lg:bottom-0 z-10 flex items-end justify-center lg:justify-end w-full lg:w-auto h-[380px] sm:h-[480px] md:h-[540px] lg:h-[84vh] xl:h-[88vh] 2xl:h-[92vh]">
        <Image
          src="/frame4/creative-girl-art.png"
          alt="Creative girl illustration working on laptop by an arched lilac window with peonies"
          width={2000}
          height={2900}
          priority
          className="h-full w-auto object-contain object-bottom"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  );
};

export default Collaboration;
