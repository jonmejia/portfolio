"use client";
import React, { useState } from "react";

interface SuccessAlertProps {
  message: string;
  visibility: boolean;
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({ message, visibility }) => {
  const [isVisible, setIsVisible] = useState(visibility);

  const handleClick = () => {
    setIsVisible(!visibility);
  };

  return isVisible ? (
    <div
      onClick={handleClick}
      className="absolute top-10 border-2 p-2 rounded-lg border-[#ADBC9F] bg-[#436850]"
    >
      <span>{message}</span>
    </div>
  ) : null;
};

export default SuccessAlert;
