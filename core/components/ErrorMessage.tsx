import React from "react";

type TProps = {
  icon?: React.ReactNode;
  message: string;
};

const ErrorMessage = ({ icon, message }: TProps) => {
  return (
    <div className="bg-slate-100 flex items-center gap-2 text-rose-500 rounded-md w-full px-3 py-2 mb-3">
      {icon}
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;
