import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="text-[color:var(--text-primary)] relative w-full">
      <Image src="./door-and-pot.svg" alt="door and pot" width={800} height={200} className="absolute top-20 left-0"/>
    </div>
  );
};

export default Banner;
