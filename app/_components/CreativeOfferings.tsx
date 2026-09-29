"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import BrushDivider from "./BrushDivider";
import { sectionPadding } from "./sectionPadding";

const processSteps = [
  {
    title: "DISCOVER",
    line1: "Exploring ideas, inspiration and",
    line2: "stories that spark creative possibilities.",
    icon: "/frame3/discover-icon.png",
  },
  {
    title: "CONCEPTUALIZE",
    line1: "Turning thoughts into concepts",
    line2: "and visual directions.",
    icon: "/frame3/conceptualize-icon.png",
  },
  {
    title: "DESIGN",
    line1: "Bring concepts to life by crafting visuals",
    line2: "that tell your story.",
    icon: "/frame3/design-icon.png",
  },
  {
    title: "REFINE",
    line1: "Polishing, perfecting and refining every",
    line2: "element to create timeless impact.",
    icon: "/frame3/refine-icon.png",
  },
];

const offeringsPillars = [
  {
    title: "HOME",
    image: "/frame3/center-bag-and-vas-art.png",
    alt: "Home offerings artwork with vase, flowers, bag, and sunglasses",
  },
  {
    title: "FASHION",
    image: "/frame3/fashion-and-homedecor-art.png",
    alt: "Fashion and apparel collection with clothing rack, dress, and flowers",
  },
  {
    title: "INVITATIONS",
    image: "/frame3/invitation-card-and-greetings-art.png",
    alt: "Invitation cards, envelope, and floral greeting cards",
  },
  {
    title: "BRANDING",
    image: "/frame3/branding-kit-art.png",
    alt: "Branding stationery kit with logo, tags, business cards, and vase",
  },
];

const CreativeOfferings = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offeringsPillars.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="services"
      className="relative min-h-screen lg:h-screen w-full overflow-x-clip bg-[#fff5f0] flex flex-col justify-between pt-6 sm:pt-8 lg:pt-10 pb-0"
    >
      {/* Background Cloud Images */}
      {/* 1. Top-Left Cloud behind heading */}
      <div className="pointer-events-none absolute left-[10%] sm:left-[12%] md:left-[14%] lg:left-[16%] xl:left-[17%] top-[1.5%] sm:top-[2%] lg:top-[2.5%] z-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[210px] xl:w-[230px] max-w-none opacity-90">
        <Image
          src="/frame3/top-left-small-cloud.png"
          alt=""
          width={450}
          height={300}
          className="h-auto w-full object-contain"
          aria-hidden="true"
        />
      </div>

      {/* 2. Left-Center Large Cloud peeking from the left */}
      <div className="pointer-events-none absolute -left-[6%] sm:-left-[5%] md:-left-[4%] lg:-left-[3%] top-[30%] sm:top-[32%] md:top-[34%] z-0 w-[190px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] max-w-none opacity-90">
        <Image
          src="/frame3/left-center-large-cloud.png"
          alt=""
          width={650}
          height={400}
          className="h-auto w-full object-contain"
          aria-hidden="true"
        />
      </div>

      {/* 3. Right-Top Large Cloud floating on top right */}
      <div className="pointer-events-none absolute -right-[6%] sm:-right-[4%] md:-right-[3%] lg:-right-[2%] top-[5%] sm:top-[6%] md:top-[7%] z-0 w-[220px] sm:w-[270px] md:w-[320px] lg:w-[360px] xl:w-[400px] max-w-none opacity-90">
        <Image
          src="/frame3/right-top-large-cloud.png"
          alt=""
          width={700}
          height={450}
          className="h-auto w-full object-contain"
          aria-hidden="true"
        />
      </div>

      <div className={`relative z-10 w-full flex-1 flex flex-col justify-center my-auto ${sectionPadding}`}>
        {/* Section Heading */}
        <div className="mb-4 sm:mb-6 lg:mb-8">
          <h2 className="block max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]">
            <Image
              src="/frame3/creative-offering-font-text.png"
              alt="creative offerings"
              width={1400}
              height={380}
              priority
              className="h-10 sm:h-12 md:h-14 lg:h-[58px] xl:h-[66px] w-auto object-contain object-left"
            />
          </h2>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-10 items-center">
          {/* Left Column: 4 Process Steps */}
          <div className="lg:col-span-4 flex flex-col space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-6 xl:space-y-8 2xl:space-y-9">
            {processSteps.map((step) => (
              <div key={step.title} className="flex items-center gap-4 sm:gap-5 lg:gap-4 xl:gap-6 group">
                <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 lg:h-14 lg:w-14 xl:h-18 xl:w-18 2xl:h-20 2xl:w-20 shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={160}
                    height={160}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-sans text-[13px] sm:text-[14px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] font-bold tracking-[0.2em] text-[#000000] uppercase">
                    {step.title}
                  </h3>
                  <p className="mt-2 sm:mt-2.5 xl:mt-3 font-playfair text-[13px] sm:text-[15px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] leading-[1.38] text-[#111111]">
                    <span className="block">{step.line1}</span>
                    <span className="block">{step.line2}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Featured Pillars Carousel */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative aspect-square w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[340px] xl:max-w-[390px] 2xl:max-w-[430px]">
              {offeringsPillars.map((pillar, index) => {
                const isActive = index === currentSlide;
                return (
                  <div
                    key={pillar.title}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${
                      isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={pillar.image}
                      alt={pillar.alt}
                      width={1000}
                      height={1000}
                      priority={index === 0}
                      className="h-auto w-full object-contain"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                );
              })}
            </div>

            {/* Changing Pillar Title */}
            <div className="mt-3 sm:mt-4 h-7 sm:h-8 flex items-center justify-center overflow-hidden">
              <p
                key={offeringsPillars[currentSlide].title}
                className="font-times text-base sm:text-lg md:text-[18px] lg:text-[17px] xl:text-[19px] font-bold tracking-[0.25em] text-[#000000] uppercase text-center transition-all duration-500"
              >
                {offeringsPillars[currentSlide].title}
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Paragraphs */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4 sm:space-y-5 lg:space-y-4 xl:space-y-5 2xl:space-y-6 font-playfair text-[13px] sm:text-[15px] md:text-[16px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px] leading-[1.65] lg:leading-[1.7] text-[#000000] font-normal">
            <p>
              I understand that design is more than just aesthetics—
              <br className="hidden xl:inline" />
              it&apos;s about telling a story, evoking emotions,
              <br className="hidden xl:inline" />
              and creating lasting impressions.
              <br />
              Each of these offerings is an extension of this belief,
              <br className="hidden xl:inline" />
              aiming to enhance every space, every outfit,
              <br className="hidden xl:inline" />
              every invitation, and every brand we touch.
            </p>
            <p>
              Together, these four pillars—
              <br className="hidden xl:inline" />
              Home, Fashion, Invitations, and Branding
              <br className="hidden xl:inline" />
              work harmoniously to elevate the everyday,
              <br className="hidden xl:inline" />
              offering you a complete experience
              <br className="hidden xl:inline" />
              that is thoughtfully designed and beautifully executed.
            </p>
            <p>
              Join me in celebrating the art of living
              <br className="hidden xl:inline" />
              with style, sophistication, and heart.
            </p>
          </div>
        </div>
      </div>

      {/* Textured SVG Brush Divider seamlessly straddling Frame 3 and Frame 4 */}
      <div className="relative w-full z-30 translate-y-1/2 pointer-events-none">
        <BrushDivider className="w-full" />
      </div>
    </section>
  );
};

export default CreativeOfferings;
