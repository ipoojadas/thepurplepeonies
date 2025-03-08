import Image from "next/image";
import Banner from "./_components/Banner";
import NavBar from "./_components/NavBar";

export default function Home() {
  return (
    <div className="grid justify-items-center font-[family-name:var(--font-geist-sans)] bg-primary relative">
      <NavBar />
      <Banner />
      <Image src="./peonies-creeper.svg" alt="peonies creeper" width={200} height={100} className="absolute top-0 right-0"/>
    </div>
  );
}
