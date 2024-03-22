import Image from "next/image";
import ProjectCarousel from "../components/ProjectCarousel";
export default function Home() {
  return (
    <main>
      <div className="flex flex-wrap justify-center my-14">
        <Image
          className="rounded-full border-4 border-[#ADBC9F]"
          src={"/jonathan.jpg"}
          width={250}
          height={250}
          alt="image of Jonathan"
        />
        <p className="mt-20 mx-6 w-2/5 text-lg">
          Hey! I'm Jonathan. I'm currently a freelance software engineer
          (keyboard for hire), and an avid vim enthusiast. Feel free to reach
          out and let's have a cup of tea some time :)
        </p>
				<div></div>
      </div>
      <h2 className="text-center text-xl"> Recent Projects</h2>
      <div className="flex justify-center">
        <hr className="w-2/3 my-4" />
      </div>
      <ProjectCarousel />
    </main>
  );
}
