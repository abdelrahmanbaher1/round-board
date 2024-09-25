import TaskPriority from "./TaskPriority";
import TaskType from "./TaskType";
import { TTicket } from "../server/definations";

type TProps = {
  taskItem: TTicket;
};

const TaskItem = ({ taskItem }: TProps) => {
  const { id, priority, title } = taskItem;

  const TYPES = ["MACRO", "TASK"];
  return (
    <li className="flex gap-2 overflow-hidden border border-transparent hover:border-gray-400 hover:bg-gray-100 p-2 hover:rounded-md ">
      <TaskPriority priority={priority} />
      <TaskType
        type={TYPES[Math.floor(Math.random() * 2)] as "MACRO" | "TASK"}
      />

      {id.slice(0, 4)}

      <span className="flex-1 max-w-[250px] overflow-hidden whitespace-nowrap text-ellipsis">
        {title}
      </span>
    </li>
  );
};

export default TaskItem;
