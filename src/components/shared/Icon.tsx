"use client";
import React from "react";
import Image from "next/image";

interface IconProps {
  src: string;
  alt: string;
  url?: string;
}

const Icon: React.FC<IconProps> = ({ src, alt, url }) => {
  const openNewTab = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <Image
      className="cursor-pointer"
      onClick={openNewTab}
      src={src}
      alt={alt}
      width={30}
      height={30}
    />
  );
};

export default Icon;
