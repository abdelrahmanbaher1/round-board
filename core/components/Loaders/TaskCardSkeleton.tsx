import React from "react";
import { Avatar } from "@mui/material";

const TaskCardSkeleton = () => {
  return (
    <div className="bg-white w-[284px] min-h-[105px] p-2.5 rounded-md mb-2 text-sm flex flex-col gap-3 animate-pulse">
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>{" "}
          <div className="w-10 h-4 bg-gray-300 rounded-md"></div>{" "}
        </div>
        <div className="w-16 h-6 bg-gray-300 rounded-md"></div>{" "}
      </div>

      <div className="w-full h-5 bg-gray-300 rounded-md"></div>

      <div className="flex gap-2 items-center">
        <Avatar sx={{ width: 20, height: 20, backgroundColor: "gray" }} />{" "}
        <div className="w-10 h-4 bg-gray-300 rounded-md"></div>{" "}
      </div>
    </div>
  );
};

export default TaskCardSkeleton;
