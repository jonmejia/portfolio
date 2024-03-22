import React from "react";

interface SuccessAlertProps {
  message: string;
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({message}) => {
  return (
  <div className="absolute top-0 right-0 border-2 p-2 rounded-lg border-[#ADBC9F] bg-[#436850]">
			<span>{message}</span>
		</div>
  );
};

export default SuccessAlert;
