import clsx from "clsx";
import React from "react";

const commonClassName = "text-xs rounded-md w-fit px-2.5 py-0.5";
const Badge = ({ text, status }: { text: string | number; status: string }) => {
  switch (status) {
    case "TO_DO":
      return (
        <span className={clsx(commonClassName, " bg-blue-200 text-blue-300")}>
          {text}
        </span>
      );
    case "IN_PROGRESS":
      return (
        <span className={clsx(commonClassName, "bg-amber-200 text-amber-300")}>
          {text}
        </span>
      );
    case "READY_FOR_REVIEW":
      return (
        <span
          className={clsx(commonClassName, "bg-fuchsia-200 text-fuchsia-500")}
        >
          {text}
        </span>
      );
    case "ERROR":
      return (
        <span className={clsx(commonClassName, "bg-rose-200 text-rose-500")}>
          {text}
        </span>
      );
    case "CLOSED":
      return (
        <span
          className={clsx(commonClassName, "bg-green-200 text-emerald-400")}
        >
          {text}
        </span>
      );
  }
};

export default Badge;
