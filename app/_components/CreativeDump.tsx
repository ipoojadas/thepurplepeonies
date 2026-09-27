import Image from "next/image";
import BeeIcon from "./BeeIcon";
import { sectionPadding } from "./sectionPadding";

const blogPosts = [
  {
    title: "EASE ERA",
    category: "Fashion - The Gen Z Shift",
    image: "/creative-dump-blog-photo.png",
  },
  {
    title: "EASE ERA",
    category: "Fashion - The Gen Z Shift",
    image: "/creative-dump-blog-photo.png",
  },
  {
    title: "EASE ERA",
    category: "Fashion - The Gen Z Shift",
    image: "/creative-dump-blog-photo.png",
  },
  {
    title: "EASE ERA",
    category: "Fashion - The Gen Z Shift",
    image: "/creative-dump-blog-photo.png",
  },
];

const CreativeDump = () => {
  return (
    <section
      id="blog"
      className="relative w-full overflow-hidden bg-[#fff5f0] py-16 sm:py-20 md:py-28"
    >
      <div className={`relative z-10 w-full ${sectionPadding}`}>
        {/* Header with Title, Description, and Flying Bee */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <div className="max-w-4xl">
            <h2 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] text-[#D48432] leading-none">
              creative dump
            </h2>

            <p className="mt-6 sm:mt-8 font-serif text-base sm:text-lg md:text-[19px] leading-[1.8] text-[#2D2530]">
              A lovingly curated collection of ideas, inspirations, observations, and
              the occasional 2 a.m. rabbit hole. Think of it as a digital sketchbook
              where unfinished thoughts, beautiful things, and creative curiosities are
              free to coexist. No strict categories. No perfectly polished
              masterpieces. Just a little corner of the internet where creativity gets
              to wander.
            </p>
          </div>

          <div className="hidden lg:block pt-4 shrink-0">
            <BeeIcon className="animate-bee" size={36} />
          </div>
        </div>

        {/* 4 Blog / Editorial Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
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
              <div className="p-5 sm:p-6 bg-[#FAF5F0]">
                <h3 className="font-sans text-xs sm:text-[13px] font-bold tracking-[0.18em] text-[#2D2530] uppercase">
                  {post.title}
                </h3>
                <p className="mt-1.5 font-serif text-sm sm:text-[15px] text-[#4A424D]">
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
