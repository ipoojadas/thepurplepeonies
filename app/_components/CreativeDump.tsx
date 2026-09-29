import Image from "next/image";
import { sectionPadding } from "./sectionPadding";

const blogPosts = [
  {
    title: "EASE ERA",
    category: "Fashion - The Gen Z Shift",
    image: "/frame5/beautiful-athletic-girls.png",
  },
  {
    title: "EASE ERA",
    category: "Fashion - The Gen Z Shift",
    image: "/frame5/beautiful-athletic-girls.png",
  },
  {
    title: "EASE ERA",
    category: "Fashion - The Gen Z Shift",
    image: "/frame5/beautiful-athletic-girls.png",
  },
  {
    title: "EASE ERA",
    category: "Fashion - The Gen Z Shift",
    image: "/frame5/beautiful-athletic-girls.png",
  },
];

const CreativeDump = () => {
  return (
    <section
      id="blog"
      className="relative min-h-screen lg:h-screen w-full overflow-hidden bg-[#fff5f0] flex flex-col justify-center py-12 sm:py-16 lg:py-0"
    >
      <div className={`relative z-10 w-full my-auto ${sectionPadding}`}>
        {/* Header with Title, Description, and Flying Bee */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="max-w-4xl">
            <h2 className="block max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[440px] xl:max-w-[480px]">
              <Image
                src="/frame5/creative-dump-font-text.png"
                alt="creative dump"
                width={1400}
                height={380}
                priority
                className="h-10 sm:h-12 md:h-14 lg:h-[54px] xl:h-[64px] 2xl:h-[72px] w-auto object-contain object-left"
              />
            </h2>

            <p className="mt-4 sm:mt-6 font-playfair text-[13.5px] sm:text-[14.5px] md:text-[15.5px] lg:text-[13.5px] xl:text-[15px] 2xl:text-[16.5px] leading-[1.65] text-[#2D2530]">
              A lovingly curated collection of ideas, inspirations, observations, and
              the occasional 2 a.m. rabbit hole. Think of it as a digital sketchbook
              where unfinished thoughts, beautiful things, and creative curiosities are
              free to coexist. No strict categories. No perfectly polished
              masterpieces. Just a little corner of the internet where creativity gets
              to wander.
            </p>
          </div>

          <div className="hidden lg:flex items-center justify-center shrink-0 relative w-16 h-16 xl:w-20 xl:h-20 mt-2">
            <Image
              src="/frame1/moving-bee.GIF"
              alt="Moving Bee"
              width={800}
              height={800}
              unoptimized
              className="absolute -top-[168px] -left-[168px] xl:-top-[200px] xl:-left-[200px] w-[585px] h-[585px] xl:w-[700px] xl:h-[700px] max-w-none object-contain pointer-events-none z-10"
            />
          </div>
        </div>

        {/* 4 Blog / Editorial Cards */}
        <div className="mt-8 sm:mt-10 lg:mt-7 xl:mt-9 2xl:mt-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 xl:gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group cursor-pointer rounded-sm border border-[#E5D8CF] bg-[#FAF5F0] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE3DC]">
                <Image
                  src={post.image}
                  alt={`${post.title} - ${post.category}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Card Meta */}
              <div className="p-4 sm:p-5 bg-[#FAF5F0]">
                <h3 className="font-sans text-[11px] sm:text-xs xl:text-[13px] font-bold tracking-[0.18em] text-[#2D2530] uppercase">
                  {post.title}
                </h3>
                <p className="mt-1 font-playfair text-[13px] sm:text-sm xl:text-[15px] text-[#4A424D]">
                  {post.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeDump;
