import React from "react";
import Icon from "./Icon";
import clsx from "clsx";

const TaskPriority = ({
  priority,
  text,
  size = 20,
}: {
  priority: string;
  size?: number;
  text?: boolean;
}) => {
  const baseClassName =
    "w-[130px] h-[32px] rounded-md text-white text-base flex items-center justify-center py-2";

  switch (priority) {
    case "URGENT":
      return text ? (
        <div className={clsx(baseClassName, "bg-fuchsia-500")}>{priority}</div>
      ) : (
        <Icon name="taskUrgent" alt="urgent" size={size} />
      );
    case "HIGH":
      return text ? (
        <div className={clsx(baseClassName, "bg-rose-500")}>{priority}</div>
      ) : (
        <Icon name="taskHigh" alt="high" size={size} />
      );
    case "MEDIUM":
      return text ? (
        <div className={clsx(baseClassName, "bg-amber-400")}>{priority}</div>
      ) : (
        <Icon name="taskMedium" alt="medium" size={size} />
      );
    case "LOW":
      return text ? (
        <div className={clsx(baseClassName, "bg-emerald-400")}>{priority}</div>
      ) : (
        <Icon name="taskLow" alt="low" size={size} />
      );
  }
};

export default TaskPriority;
