import React from "react";
import Icon from "./common/Icon";

const TaskPriority = ({
  priority,
  size = 20,
}: {
  priority: string;
  size?: number;
}) => {
  switch (priority) {
    case "URGENT":
      return <Icon name="taskUrgent" alt="urgent" size={size} />;
    case "HIGH":
      return <Icon name="taskHigh" alt="high" size={size} />;
    case "MEDIUM":
      return <Icon name="taskMedium" alt="medium" size={size} />;
    case "LOW":
      return <Icon name="taskLow" alt="low" size={size} />;
  }
};

export default TaskPriority;
