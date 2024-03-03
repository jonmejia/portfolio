import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        className='rounded-full'
        src={'/jonathan.jpg'}
        width={250}
        height={250}
        alt='image of Jonathan' />
    </div>
  );
}
