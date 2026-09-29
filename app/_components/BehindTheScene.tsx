import Image from "next/image";
import BeeIcon from "./BeeIcon";
import { sectionPadding } from "./sectionPadding";

const beePositions = [
  { top: "28%", left: "43%", delay: "0s", size: 26 },
  { top: "33%", left: "62%", delay: "1.2s", size: 24 },
  { top: "18%", right: "23%", delay: "0.6s", size: 22 },
  { top: "42%", right: "16%", delay: "2.0s", size: 24 },
  { top: "34%", right: "3%", delay: "1.5s", size: 22 },
];

const BehindTheScene = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen lg:h-screen w-full overflow-hidden bg-[#f9edf7] flex flex-col justify-between pt-8 sm:pt-12 lg:pt-14 pb-12 sm:pb-16 lg:pb-20 xl:pb-24"
    >
      {/* Top Left Bricks - Positioned in the upper region */}
      <div className="pointer-events-none absolute left-[8%] sm:left-[9%] lg:left-[11%] xl:left-[12%] top-[8%] sm:top-[10%] z-10 w-22 sm:w-26 md:w-32 lg:w-38 xl:w-42">
        <Image
          src="/frame2/bricks-top-left.png"
          alt=""
          width={300}
          height={250}
          className="h-auto w-full object-contain"
          aria-hidden="true"
        />
      </div>

      {/* Top Right Hanging Polaroids String */}
      <div className="pointer-events-none absolute right-0 top-0 z-20 w-[68%] sm:w-[58%] md:w-[50%] lg:w-[45%] xl:w-[42%] max-w-[700px]">
        <Image
          src="/frame2/picture-frame-row-art.png"
          alt="Hanging polaroid photo frames with golden clips"
          width={1500}
          height={900}
          className="h-auto w-full object-contain object-top-right"
          aria-hidden="true"
        />
      </div>

      {/* Floating Bees / Fireflies */}
      {beePositions.map((b, i) => (
        <div
          key={i}
          className="pointer-events-none absolute z-25 hidden sm:block"
          style={{
            top: b.top,
            left: b.left,
            right: b.right,
          }}
        >
          <BeeIcon
            size={b.size}
            className="animate-bee drop-shadow-sm"
            style={{ animationDelay: b.delay }}
          />
        </div>
      ))}

      {/* Main Content: Aligned on Bottom with Breathable Spacing */}
      <div className={`relative z-20 mt-auto grid grid-cols-1 lg:grid-cols-12 items-end gap-8 lg:gap-8 xl:gap-10 w-full ${sectionPadding}`}>
        {/* Left Column: Heading & Text */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-start justify-end">
          <div className="flex flex-col items-start max-w-[540px]">
            {/* Heading Image - Smaller in width than the text below */}
            <h2 className="block mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]">
              <Image
                src="/frame2/behind-the-scenes-text.png"
                alt="behind the scenes"
                width={1400}
                height={380}
                priority
                className="h-8 sm:h-9 md:h-11 lg:h-[50px] xl:h-[58px] w-auto object-contain object-left"
              />
            </h2>

            {/* Paragraph Text - Increased Size */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 font-playfair text-[14px] sm:text-[16px] md:text-[17px] lg:text-[19px] xl:text-[20px] leading-[1.7] text-[#000000] font-normal">
              <p>
                Welcome to my little corner of beautiful chaos, where fashion, art, and
                imagination happily coexist. From fashion illustrations and trend
                explorations to creative experiments and artistic musings, this space is
                home to everything that sparks joy and curiosity.
              </p>
              <p>
                Whether you&apos;re here for inspiration, collaboration, or simply to
                wander through a world of colors, textures, and ideas, I&apos;m so glad you
                stopped by.
              </p>
              <p>
                Consider this your invitation to slow down, stay curious, and celebrate
                the beauty in creating.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Books & Flowers + Right Wall Bricks (aligned on bottom) */}
        <div className="lg:col-span-5 xl:col-span-5 flex items-end justify-center lg:justify-end gap-6 sm:gap-8 lg:gap-10 xl:gap-14 2xl:gap-16">
          <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] xl:max-w-[420px] shrink-0">
            <Image
              src="/frame2/books-and-flowers-art.png"
              alt="Vintage pastel book stack blooming with botanical wildflowers"
              width={1200}
              height={1100}
              className="h-auto w-full object-contain object-bottom"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
          </div>

          {/* Right Wall Bricks - spaced further to the right */}
          <div className="hidden sm:block shrink-0 w-18 sm:w-22 md:w-26 lg:w-32 xl:w-36 pb-2 sm:pb-3">
            <Image
              src="/frame2/bricks-bottom-right.png"
              alt=""
              width={280}
              height={400}
              className="h-auto w-full object-contain object-bottom"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindTheScene;
