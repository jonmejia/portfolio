import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        className="rounded-full border-4 border-[#ADBC9F]"
        src={"/jonathan.jpg"}
        width={250}
        height={250}
        alt="image of Jonathan"
      />
    </div>
  );
}
