"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProjectCarousel from "../components/ProjectCarousel";
import Icon from "../components/shared/Icon";
import SuccessAlert from "../components/shared/SuccessAlert";
import linkedin from "../../public/linkedin.svg";
import github from "../../public/github.svg";
import mail from "../../public/mail.svg";

export default function Home() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const openNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setShowSuccessAlert(true);
    setTimeout(() => setShowSuccessAlert(false), 3000); //
  };

  return (
    <main>
      <div className="flex flex-wrap justify-center my-14">
        {showSuccessAlert && (
          <SuccessAlert
            message="Successfully copied email to clipboard"
            visibility={true}
          />
        )}

        <Image
          className="rounded-full border-4 border-[#ADBC9F]"
          src={"/jonathan.jpg"}
          width={250}
          height={250}
          alt="image of Jonathan"
        />
        <span className="mt-20 w-2/5 text-lg">
          <p className="mx-6">
            Hey! I'm Jonathan. I'm currently a freelance software engineer
            (keyboard for hire), and an avid vim enthusiast. Feel free to reach
            out and let's have a cup of tea some time :)
          </p>
          <div className="mt-8 flex justify-evenly">
            <Icon
              src={linkedin}
              alt="linkedin icon"
              onClick={() =>
                openNewTab("https://www.linkedin.com/in/jonathan-mejia-swe/")
              }
            />
            <Icon
              src={github}
              alt="github-mark icon"
              onClick={() => openNewTab("https://github.com/jonmejia")}
            />
            <Icon
              src={mail}
              alt="mail icon"
              onClick={() => copyText("jonathan@dataminded.net")}
            />
          </div>
        </span>
      </div>
      <h2 className="text-center text-xl"> Recent Projects</h2>
      <div className="flex justify-center">
        <hr className="w-2/3 my-4" />
      </div>
      <ProjectCarousel />
    </main>
  );
}
