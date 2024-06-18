import { HomeBanner } from "@/assets/images";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <section className="relative h-screen w-full bg-gray-200">
        <Image
          src={HomeBanner}
          layout="fill"
          objectFit="cover"
          alt="home-banner"
        />
        <div className="absolute w-full h-full bg-black/30"></div>
      </section>
      <section className="h-screen w-full"></section>
    </main>
  );
}
