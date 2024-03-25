import React from "react";
import Image from "next/image";
import github from "../../public/github.svg";

export const HomepageCard = (props: {
  projectImage: string;
  projectName: string;
  prodUrl?: string;
  githubUrl: string;
  margin: string;
  imageClasses?: string;
}) => {
  const openNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div
      className={`relative bg-[#12372A] rounded-lg aspect-square w-1/4 ${props.margin}`}
    >
      <div className="text-center pt-4">{props.projectName}</div>
      <Image
        className={`${props.imageClasses}`}
        src={props.projectImage}
        alt={"image"}
        width={500}
        height={500}
      />
      <div className="flex justify-center">
        <Image
          className="cursor-pointer"
          onClick={() => openNewTab(props.githubUrl)}
          src={github}
          alt={"gitub icon"}
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};
