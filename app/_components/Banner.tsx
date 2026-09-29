import Image from "next/image";
import Button from "./Button";
import NavBar from "./NavBar";
import { sectionPadding } from "./sectionPadding";

const Banner = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#fff5f0] flex flex-col justify-between">
      {/* Top Hanging Peonies Creeper */}
      <div className="pointer-events-none absolute right-0 top-0 z-30 w-[56px] sm:w-[68px] md:w-[92px] lg:w-[108px] xl:w-[132px] 2xl:w-[156px]">
        <Image
          src="/frame1/top-right-creeper-new.png"
          alt="Hanging purple peonies creeper"
          width={850}
          height={2100}
          priority
          className="h-auto w-full object-contain"
          aria-hidden="true"
        />
      </div>

      <NavBar />

      {/* Hero Content */}
      <div className={`relative z-20 flex-1 grid grid-cols-1 lg:grid-cols-12 items-center w-full py-8 lg:py-0 ${sectionPadding}`}>
        {/* Left Typography & CTA */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center pt-4 pb-12 lg:py-16 xl:py-20 text-left">
          <div className="flex flex-col items-start max-w-xl">
            <h1 className="font-times text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px] text-[#4d2756] font-normal leading-[1.08] tracking-tight">
              Where creativity
            </h1>

            <div className="relative inline-flex items-center mt-1 sm:mt-2">
              <Image
                src="/frame1/flourish-font-text.png"
                alt="flourish"
                width={914}
                height={362}
                priority
                className="h-12 sm:h-14 md:h-16 lg:h-[72px] xl:h-[84px] w-auto object-contain object-left"
              />
              <Image
                src="/frame1/moving-bee.GIF"
                alt="Moving Bee"
                width={800}
                height={800}
                unoptimized
                className="absolute left-[8%] sm:left-[12%] md:left-[16%] -top-[68px] sm:-top-[96px] md:-top-[135px] lg:-top-[168px] xl:-top-[200px] -translate-y-[20%] w-[270px] h-[270px] sm:w-[360px] sm:h-[360px] md:w-[470px] md:h-[470px] lg:w-[585px] lg:h-[585px] xl:w-[700px] xl:h-[700px] max-w-none object-contain pointer-events-none z-10"
              />
            </div>

            <p className="mt-8 sm:mt-10 md:mt-12 font-playfair font-normal text-[17px] sm:text-[19px] md:text-[21px] lg:text-[23px] xl:text-[24px] leading-[1.55] text-[#000000]">
              A creative studio crafting dreamy
              <br className="hidden sm:inline" />{" "}
              visual stories for brands, products
              <br className="hidden sm:inline" />{" "}
              and people with purpose.
            </p>

            <div className="mt-8 sm:mt-10 md:mt-12">
              <Button href="#portfolio">
                EXPLORE MY WORK
              </Button>
            </div>
          </div>
        </div>

        {/* Right Illustration - Arched Lilac Door with Purple Peonies */}
        <div className="lg:col-span-6 xl:col-span-7 relative flex items-end justify-center lg:justify-end h-[380px] sm:h-[480px] md:h-[580px] lg:h-[75vh] xl:h-[82vh] pointer-events-none mt-4 lg:mt-0">
          <div className="relative w-full h-full max-w-[840px] flex items-end justify-center lg:justify-end">
            <Image
              src="/frame1/door-and-wall-art-new.png"
              alt="Arched lilac door with blossoming purple peonies in hanging pots and planter boxes"
              width={4200}
              height={3800}
              priority
              className="h-full w-auto object-contain object-bottom"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
