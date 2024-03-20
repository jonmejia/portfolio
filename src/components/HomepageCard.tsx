
import React from "react";

export const HomepageCard = (props: {
  projectImage: string;
  projectName: string;
  prodUrl: string;
  localUrl: string;
  margin: string;
}) => {
  return (
    <div className={`bg-blue-500 rounded-lg aspect-square w-1/4 ${props.margin}`}>
      <div className="opacity-0 hover:opacity-100">
        <div>{props.prodUrl}</div>
        <div>{props.localUrl}</div>
      </div>
      <div>{props.projectName}</div>
    </div>
  );
};
