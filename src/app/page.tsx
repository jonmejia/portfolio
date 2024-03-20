import Image from "next/image";
import ProjectCarousel from '../components/ProjectCarousel'
export default function Home() {
  return (
    <main>
      <Image
        className="rounded-full border-4 border-[#ADBC9F]"
        src={"/jonathan.jpg"}
        width={250}
        height={250}
        alt="image of Jonathan"
      />
      <p>Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.</p>
			<ProjectCarousel/>
    </main>
  );
}
