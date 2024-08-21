import React from "react";
import Icon from "./common/Icon";

const TaskType = ({ type }: { type: "TASK" | "MACRO" }) => {
  switch (type) {
    case "TASK":
      return <Icon name="taskIcon" alt="Task" />;
    case "MACRO":
      return <Icon name="macroIcon" alt="Macro" />;
  }
};

export default TaskType;
