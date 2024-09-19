import React, { useState, useEffect } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import TaskPriority from "./TaskPriority";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getApiInstance } from "@/core/server/api";
import { REACT_QUERY_KEYS } from "@/core/lib/constants";
import useParamState from "@/core/hooks/useParamState";
import SpinnerLoader from "./Loaders/SpinnerLoader";

type TProps = {
  selectedPriority: "URGENT" | "HIGH" | "MEDIUM" | "LOW";
  currPage: number;
};

const OPTIONS = ["URGENT", "HIGH", "MEDIUM", "LOW"];

const PriorityDropDown = ({ selectedPriority, currPage }: TProps) => {
  const [priority, setPriority] = useState<string>(selectedPriority);
  const [param, setParam, getParamUrl] = useParamState("id", "");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPriority(event.target.value as string);
    updateTicket();
  };
  const queryClient = useQueryClient();

  useEffect(() => {
    setPriority(selectedPriority);
  }, [selectedPriority]);

  const {
    mutate: updateTicket,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: () =>
      getApiInstance().ticket.updateTicketPriority(param, priority),
    onSuccess: (response) => {
      console.log("Mutation success response:", response);
      queryClient.invalidateQueries({
        queryKey: [REACT_QUERY_KEYS.GET_TICKETS],
      });
    },
    onError: (error) => {
      console.log({ error });

      console.error("Error deleting ticket:", error);
    },
  });
  return (
    <FormControl variant="outlined">
      <InputLabel id="priority-label">Priority</InputLabel>
      <Select
        labelId="priority-label"
        value={priority}
        onChange={handleChange}
        label="Priority"
      >
        {OPTIONS.map((option) => (
          <MenuItem key={option} value={option}>
            <div className="flex gap-4">
              <TaskPriority priority={option} text={false} />
              {option}
              <SpinnerLoader isLoading={isPending} />
            </div>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PriorityDropDown;
