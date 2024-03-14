import Image from "next/image";
import {HomepageCard} from '../components/HomepageCard'

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
<HomepageCard projectImage='img_string' projectName='Project Investing' prodUrl='www.projectinvesting.com' localUrl='localhost:4000'/>
    </main>
  );
}
