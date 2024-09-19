import { Box, Modal } from "@mui/material";
import React from "react";
import Icon from "./Icon";

type TProps = {
  children: React.ReactNode;
  handleClose: () => void;
  isOpen: boolean;
};

const CustomModal = ({ children, handleClose, isOpen }: TProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Icon
          name="CloseIcon"
          alt="closeIcon"
          size={25}
          onClick={handleClose}
          className="hover:cursor-pointer absolute right-7"
        />
        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
