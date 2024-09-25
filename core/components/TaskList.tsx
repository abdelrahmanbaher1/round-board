import React from "react";
import TaskItem from "./TaskItem";
import { Divider } from "@mui/material";
import { TTicket } from "../server/definations";

type TProps = {
  tasks: TTicket[];
  title: string;
  isLoading: boolean;
};

const TaskList = ({ tasks, title, isLoading }: TProps) => {
  return (
    <>
      <div>
        {title}{" "}
        <span className="border rounded-md p-1 bg-yellow-100">
          {tasks.length}
        </span>
      </div>
      <ul className="max-h-[200px] overflow-y-scroll ">
        {isLoading ? (
          <>
            {Array.from({ length: 5 }).map((_, idx) => (
              <li key={idx} className="flex flex-col gap-2 p-2">
                <div className="h-3 bg-gray-300 rounded-md animate-pulse w-full" />
                <Divider />
              </li>
            ))}
          </>
        ) : (
          tasks.map((task) => (
            <>
              <TaskItem key={task.id} taskItem={task} />
              <Divider />
            </>
          ))
        )}
      </ul>
    </>
  );
};

export default TaskList;
