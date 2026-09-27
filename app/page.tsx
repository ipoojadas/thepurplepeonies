import Banner from "./_components/Banner";
import BehindTheScene from "./_components/BehindTheScene";
import Collaboration from "./_components/Collaboration";
import CreativeDump from "./_components/CreativeDump";
import CreativeOfferings from "./_components/CreativeOfferings";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-background">
      <Banner />
      <BehindTheScene />
      <CreativeOfferings />
      <Collaboration />
      <CreativeDump />
      <Footer />
    </main>
  );
}
