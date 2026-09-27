import Image from "next/image";
import BrushDivider from "./BrushDivider";
import { sectionPadding } from "./sectionPadding";

const processSteps = [
  {
    title: "DISCOVER",
    description: "Exploring ideas, inspiration and stories that spark creative possibilities.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 text-[#7D538B]">
        <circle cx="24" cy="24" r="13" stroke="currentColor" strokeWidth="1.4" />
        <path d="M24 13L26.2 21.8L35 24L26.2 26.2L24 35L21.8 26.2L13 24L21.8 21.8L24 13Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="1.5" fill="currentColor" />
        <path d="M16 16L17.5 17.5M30.5 30.5L32 32M32 16L30.5 17.5M17.5 30.5L16 32" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M9 11L9.8 9.2L11.5 8.5L9.8 7.8L9 6L8.2 7.8L6.5 8.5L8.2 9.2L9 11Z" fill="currentColor" />
        <path d="M39 37L39.8 35.2L41.5 34.5L39.8 33.8L39 32L38.2 33.8L36.5 34.5L38.2 35.2L39 37Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "CONCEPTUALIZE",
    description: "Turning thoughts into concepts and visual directions.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 text-[#7D538B]">
        <path d="M17 21C17 16.5817 20.134 13 24 13C27.866 13 31 16.5817 31 21C31 24.2 29.2 26.8 27.5 29H20.5C18.8 26.8 17 24.2 17 21Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M21 29H27M21.5 32H26.5M22.5 35H25.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M22 23V19M26 23V19M22 19H26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M24 7V10M13 12L15 14M35 12L33 14M9 21H12M36 21H39" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M38 28L38.8 26.2L40.5 25.5L38.8 24.8L38 23L37.2 24.8L35.5 25.5L37.2 26.2L38 28Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "DESIGN",
    description: "Bring concepts to life by crafting visuals that tell your story.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 text-[#7D538B]">
        <path d="M24 10L31 22C31.5 24 30 26 29 27L28 32H20L19 27C18 26 16.5 24 17 22L24 10Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M24 10V22" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="24" cy="22" r="1.5" fill="currentColor" />
        <path d="M19 32H29V36H19V32Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M11 13L11.8 11.2L13.5 10.5L11.8 9.8L11 8L10.2 9.8L8.5 10.5L10.2 11.2L11 13Z" fill="currentColor" />
        <path d="M37 15L37.8 13.2L39.5 12.5L37.8 11.8L37 10L36.2 11.8L34.5 12.5L36.2 13.2L37 15Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "REFINE",
    description: "Polishing, perfecting and refining every element to create timeless impact.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 text-[#7D538B]">
        <path d="M16 19L24 11L32 19L24 37L16 19Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M16 19H32" stroke="currentColor" strokeWidth="1.2" />
        <path d="M21 19L24 11L27 19L24 37L21 19Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <path d="M10 13L10.8 11.2L12.5 10.5L10.8 9.8L10 8L9.2 9.8L7.5 10.5L9.2 11.2L10 13Z" fill="currentColor" />
        <path d="M38 13L38.8 11.2L40.5 10.5L38.8 9.8L38 8L37.2 9.8L35.5 10.5L37.2 11.2L38 13Z" fill="currentColor" />
        <path d="M38 33L38.8 31.2L40.5 30.5L38.8 29.8L38 28L37.2 29.8L35.5 30.5L37.2 31.2L38 33Z" fill="currentColor" />
        <path d="M10 33L10.8 31.2L12.5 30.5L10.8 29.8L10 28L9.2 29.8L7.5 30.5L9.2 31.2L10 33Z" fill="currentColor" />
      </svg>
    ),
  },
];

const CreativeOfferings = () => {
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
          <div className="lg:col-span-4 flex flex-col space-y-3 sm:space-y-4 lg:space-y-4 xl:space-y-5">
            {processSteps.map((step) => (
              <div key={step.title} className="flex items-start gap-3 sm:gap-4 group">
                <div className="flex h-11 w-11 sm:h-12 sm:w-12 lg:h-11 lg:w-11 xl:h-12 xl:w-12 shrink-0 items-center justify-center rounded-full bg-[#EBE0EE] shadow-sm transition-transform duration-300 group-hover:scale-110">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-sans text-[11px] sm:text-xs lg:text-[12px] font-bold tracking-[0.2em] text-[#000000] uppercase">
                    {step.title}
                  </h3>
                  <p className="mt-0.5 font-playfair text-xs sm:text-[13px] lg:text-[13px] xl:text-[14px] leading-snug lg:leading-relaxed text-[#2D2530]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column: Featured Pillar (HOME) */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[340px] xl:max-w-[380px] 2xl:max-w-[410px] transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/frame3/center-bag-and-vas-art.png"
                alt="Home offerings artwork with vase, flowers, bag, and sunglasses"
                width={1000}
                height={1000}
                className="h-auto w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <p className="mt-2.5 sm:mt-3 font-times text-sm sm:text-base font-bold tracking-[0.25em] text-[#000000] uppercase text-center">
              HOME
            </p>
          </div>

          {/* Right Column: Editorial Paragraphs */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-3 sm:space-y-4 lg:space-y-4 xl:space-y-5 font-playfair text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] leading-[1.6] lg:leading-[1.65] text-[#000000] font-normal">
            <p>
              I understand that design is more than just aesthetics—it&apos;s about
              telling a story, evoking emotions, and creating lasting impressions.
              Each of these offerings is an extension of this belief, aiming to
              enhance every space, every outfit, every invitation, and every brand we
              touch.
            </p>
            <p>
              Together, these four pillars—Home, Fashion, Invitations, and Branding
              work harmoniously to elevate the everyday, offering you a complete
              experience that is thoughtfully designed and beautifully executed.
            </p>
            <p>
              Join me in celebrating the art of living with style, sophistication, and
              heart.
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
