import { TTask } from "@/tmpData";

import Image from "next/image";
import { Divider } from "@mui/material";
import TaskPriority from "./TaskPriority";
import TaskType from "./TaskType";

type TProps = {
  taskItem: TTask;
};

const TaskItem = ({ taskItem }: TProps) => {
  const { id, type, priority, status, title, assignee } = taskItem;

  return (
    <li className="flex gap-2 overflow-hidden border border-transparent hover:border-gray-400 hover:bg-gray-100 p-2 hover:rounded-md ">
      <TaskPriority priority={priority} />
      <TaskType type={type} />

      {id.slice(0, 4)}

      <span className="flex-1 max-w-[250px] overflow-hidden whitespace-nowrap text-ellipsis">
        {title}
      </span>
    </li>
  );
};

export default TaskItem;
