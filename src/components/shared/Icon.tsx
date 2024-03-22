"use client";
import React from "react";
import Image from "next/image";

interface IconProps {
  src: string;
  alt: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ src, alt, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Image
      className="cursor-pointer"
      onClick={handleClick}
      src={src}
      alt={alt}
      width={30}
      height={30}
    />
  );
};

export default Icon;
