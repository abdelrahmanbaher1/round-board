import { TTask } from "@/tmpData";
import React from "react";
import TaskItem from "./TaskItem";
import { Divider } from "@mui/material";

type TProps = {
  tasks: TTask[];
  title: string;
};

const TaskList = ({ tasks, title }: TProps) => {
  return (
    <>
      <div>
        {title}{" "}
        <span className="border rounded-md p-1 bg-yellow-100">
          {tasks.length}
        </span>
      </div>
      <ul className="max-h-[200px] overflow-y-scroll ">
        {tasks.map((task) => (
          <>
            <TaskItem key={task.id} taskItem={task} />
            <Divider />
          </>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
