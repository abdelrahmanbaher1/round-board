import {
  Box,
  Checkbox,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

import CloseIcon from "@/core/assets/icons/CloseIcon";
import DeleteIcon from "@/core/assets/icons/DeleteIcon";
import FolderIcon from "@/core/assets/icons/FolderIcon";
import HorizontalDotsIcon from "@/core/assets/icons/HorizontalDotsIcon";
import NewIcon from "@/core/assets/icons/NewIcon";
import { TObjective } from "./modules/Objectives";
import PriorityDropDown from "./PriorityDropDown";
import useParamState from "@/core/hooks/useParamState";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { REACT_QUERY_KEYS } from "@/core/lib/constants";
import { getApiInstance } from "@/core/server/api";
import SideBarSkeleton from "./Loaders/SideBarSkeleton";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

type TProps = {
  isOpened: boolean;
  setIsPanelOpened: (value: boolean) => void;
  objectiveData: TObjective;
  currIdx: number;
  lastIdx?: boolean;
  onPrevious: () => void;
  onNext: () => void;
  currPage: number;
};
const NotificationPanel = ({
  isOpened,
  setIsPanelOpened,
  objectiveData,
  currIdx,
  lastIdx,
  onPrevious,
  onNext,
  currPage,
}: TProps) => {
  const { title, status, priority, id, checkMarks } = objectiveData;
  const [param, setParam, getParamUrl] = useParamState("id", "");
  const queryClient = useQueryClient();

  const NotificationPanelStyles = {
    padding: "20px",
    fontSize: "14px",
    width: "500px",
    alignItems: "center",
    transition: "width 0.2s ease-in-out",
    display: "flex",
  };
  const { data, isLoading, isFetched, isError } = useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_TICKET_DATA, param],
    queryFn: async ({ signal }) => {
      try {
        return await getApiInstance().ticket.getTicketById(param, signal);
      } catch (error) {
        if ((error as Error).name === "AbortError") {
          console.log("Query aborted");
        } else {
          console.error("Error fetching ticket data:", error);
        }
        throw error;
      }
    },
  });

  const {
    mutate: deleteTicket,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: () => getApiInstance().ticket.deleteTicketById(param),
    onSuccess: (response) => {
      setIsPanelOpened(false);
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
    <Drawer
      anchor="right"
      open={isOpened}
      onClose={() => setIsPanelOpened(false)}
      PaperProps={{ sx: NotificationPanelStyles }}
    >
      {isLoading ? (
        <SideBarSkeleton position="right" width={500} />
      ) : (
        <div className="w-full">
          <div className="flex justify-between items-center ">
            <div>
              <IconButton onClick={onPrevious} disabled={currIdx === 0}>
                <ArrowLeftCircleIcon height={40} width={40} />
              </IconButton>
              <IconButton onClick={onNext} disabled={lastIdx}>
                <ArrowRightCircleIcon height={40} width={40} />
              </IconButton>
            </div>
            <div className="flex hover:cursor-pointer gap-2">
              <div onClick={() => deleteTicket()}>
                <DeleteIcon />
              </div>
              <div onClick={() => setIsPanelOpened(false)}>
                <CloseIcon />
              </div>
            </div>
          </div>
          <Box pr="0.6rem" pl="0.5rem" mt="1rem">
            <div className="text-2xl font-bold ">Notification Center</div>

            <Box>
              <Box>
                <Typography
                  fontSize="1.2rem"
                  sx={{ color: "#ADB0B8", mb: "1.4rem" }}
                >
                  Description
                </Typography>
                <p className="text-xl w-full text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  sed ullamcorper imperdiet consectetur pretium, vitae mattis
                  varius. Tortor et amet eget posuere quis. Cursus nibh amet
                  diam elementum accumsan, a. In tortor mauris in viverra et mi
                  scelerisque facilisi. Turpis ut ac egestas tempor. Eu pretium
                  nulla vitae scelerisque.
                </p>
              </Box>
              <Box mt="2.3rem">
                <Typography
                  fontSize="1.2rem"
                  sx={{ color: "#ADB0B8", mb: "1.4rem" }}
                >
                  Priority
                </Typography>
              </Box>
              <div className="flex gap-3 items-center">
                <PriorityDropDown
                  selectedPriority={priority}
                  currPage={currPage}
                />
              </div>
              <Typography
                fontSize="1.2rem"
                sx={{ color: "#ADB0B8", mb: "1.4rem", mt: "3rem" }}
              >
                Subproject
              </Typography>
              <div className="flex gap-3 items-center">
                <FolderIcon />
                <div className="text-lg">Wepp App</div>
              </div>
              <Typography
                fontSize="1.2rem"
                sx={{ color: "#ADB0B8", mb: "2.2rem", mt: "3rem" }}
              >
                Assignees
              </Typography>
              <Box display="flex" gap={2}>
                <div className="flex rounded-md px-1.5 py-1 items-center gap-1 bg-blue-300 text-blue-500 font-bold">
                  <Typography fontSize="1rem">Iene Robert</Typography>
                  <IconButton>
                    <CloseIcon />
                  </IconButton>
                </div>
                <div className="flex rounded-md px-1.5 py-1 items-center gap-1 bg-blue-300 text-blue-500 font-bold">
                  <Typography fontSize="1rem">Kristin Rich</Typography>
                  <IconButton>
                    <CloseIcon />
                  </IconButton>
                </div>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt="3.8rem"
          >
            <Typography
              fontSize="1.2rem"
              fontWeight="500"
              textTransform="uppercase"
              sx={{ color: "#4C84FF", ml: "0.5rem" }}
            >
              Checkmarks
            </Typography>
            {(checkMarks ?? []).length !== 10 && (
              <IconButton>
                <NewIcon />
              </IconButton>
            )}
          </Box>
          <List sx={{ width: "100%", height: "100px" }}>
            {(checkMarks ?? []).map((value) => {
              const labelId = `checkbox-list-secondary-label-${value}`;
              return (
                <ListItem
                  key={value.title}
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={() => !value.isChecked}
                      checked={value.isChecked}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  }
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText
                      id={labelId}
                      primary={`${value.title}`}
                      sx={{
                        "&.MuiListItemText-root": {
                          flex: "initial",
                          mr: "auto",
                        },
                      }}
                    />
                    <IconButton>
                      <HorizontalDotsIcon />
                    </IconButton>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </div>
      )}
    </Drawer>
  );
};

export default NotificationPanel;
