import React, { useState } from "react";
import Badge from "./Badge"; // Make sure Badge component is correctly imported

type TProps = {};

const TASK_STATUS = [
  "CLOSED",
  "IN_PROGRESS",
  "TO_DO",
  "READY_FOR_REVIEW",
  "ERROR",
];

const TaskStatusDropDown = (props: TProps) => {
  const [selectedStatus, setSelectedStatus] = useState(TASK_STATUS[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (status: string) => {
    setSelectedStatus(status);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block cursor-pointer">
      <div
        className="py-1 px-4 border-solid"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
      >
        <Badge text={selectedStatus} status={selectedStatus} />
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {TASK_STATUS.map((status) => (
            <div
              key={status}
              className="dropdown-item"
              onClick={() => handleSelect(status)}
              role="button"
            >
              <Badge text={status.replace("_", " ")} status={status} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskStatusDropDown;
