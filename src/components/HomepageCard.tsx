import React from "react";
import Image from "next/image";

export const HomepageCard = (props: {
        projectImage: string;
        projectName: string;
        prodUrl: string;
        localUrl: string;
        margin: string;
}) => {
        return (
                <div
                        className={`relative bg-[#12372A] rounded-lg aspect-square w-1/4 ${props.margin}`}
                >
                        <div className="text-center">{props.projectName}</div>
                        <Image
                                className="object-scale-down"
                                src={props.projectImage}
                                alt={"image"}
                                width={500}
                                height={500}
                        />
                        <div className="absolute opacity-0 hover:opacity-100">
                                <div>{props.prodUrl}</div>
                                <div>{props.localUrl}</div>
                        </div>
                </div>
        );
};
