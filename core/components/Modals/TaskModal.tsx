"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TTask } from "@/tmpData";
import TaskType from "../TaskType";
import { Divider, TextField } from "@mui/material";
import TaskPriority from "../TaskPriority";
import TaskStatusDropDown from "../TaskStatusDropDown";

type TProps = {
  isOpen: boolean;
  handleClose: () => void;
  taskInfo: TTask;
};

const TaskModal = ({ isOpen, handleClose, taskInfo }: TProps) => {
  const { type, id, title, status, module, priority } = taskInfo;
  const [textValue, setTextValue] = React.useState<string>(title);

  React.useEffect(() => {
    // Update the textValue whenever the title changes
    if (title) {
      setTextValue(title);
    }
  }, [title]);
  const renderInfo = () => (
    <div className="grid">
      <TaskType type={type} />
      <TaskPriority priority={priority} />
    </div>
  );
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="flex flex-col mb-5">
          <TaskType type={type} />
          <Divider />
        </div>
        <div className="flex w-full ">
          <div className="w-1/2 flex flex-col gap-3">
            <span className="text-xl font-bold">
              <TextField
                multiline
                minRows={1}
                maxRows={4}
                value={textValue}
                variant="outlined"
                fullWidth
                onChange={(e) => setTextValue(e.target.value)}
                InputProps={{
                  style: {
                    padding: "8px",
                    fontSize: "24px",
                    fontWeight: 500,
                    color: "#151B26",
                    fontFamily: "Rubik, sans-serif",
                    lineHeight: "26px",
                    borderRadius: "4px",
                  },
                }}
              />
            </span>
            <span className="flex justify-end"> {status}</span>
          </div>
          <Divider orientation="vertical" />
          <div className="w-1/2 ">{JSON.stringify(type)}</div>
          <TaskStatusDropDown />
        </div>
      </Box>
    </Modal>
  );
};

export default TaskModal;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1290,
  height: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
