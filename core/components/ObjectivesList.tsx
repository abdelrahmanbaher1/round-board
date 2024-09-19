import React, { useMemo, useState, forwardRef } from "react";
import { TCheckMark, TObjective } from "./modules/Objectives";
import ObjectiveItem from "./ObjectiveItem";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import NotificationPanel from "./NotificationPanel";
import useParamState from "@/core/hooks/useParamState";

type TProps = {
  objectives: TObjective[];
  currPage: number;
};

const columns = [
  { id: "name", label: "NAME", minWidth: 500 },
  { id: "priority", label: "PRIORITY", minWidth: 155 },
  { id: "status", label: "STATUS", minWidth: 155 },
  { id: "assignees", label: "ASSIGNEES", minWidth: 155 },
  { id: "due date", label: "DUE DATE", minWidth: 155 },
  { id: "check marks", label: "CHECK MARKS", minWidth: 155 },
];

const randomTitles = [
  "Dolor pellentesque.",
  "Nullam maecenas sit.",
  "API Server",
  "Agile",
  "Synchronous vs. asynchronous communication: what’s the difference (and why it matters)",
  "Assignment DASHBOARD",
  "Assignment 2",
  "Lorem Ipsum",
  "TEST TEST TEST",
  "HEY HEY HEY",
];

const ObjectivesList = forwardRef<HTMLDivElement, TProps>(
  ({ objectives, currPage }, ref) => {
    const [isPanelOpened, setIsPanelOpened] = useState(false);
    const [selectedObjective, setSelectedObjective] = useState<TObjective>(
      objectives[0]
    );
    const [currIdx, setCurrIdx] = useState(0);

    const [param, setParam] = useParamState("id", "");

    const togglePanel = () => {
      setIsPanelOpened((prev) => !prev);
      if (!isPanelOpened) setParam("");
    };

    const generateRandomCheckMarks = (
      objectiveStatus: string
    ): TCheckMark[] => {
      if (objectiveStatus === "CLOSED") {
        return randomTitles.map((title) => ({
          title,
          isChecked: true,
        }));
      } else {
        const randomCount = Math.floor(Math.random() * randomTitles.length) + 1;
        return randomTitles.slice(0, randomCount).map((title) => ({
          title,
          isChecked: true,
        }));
      }
    };

    const handlePrevious = () => {
      setCurrIdx((prev) => Math.max(prev - 1, 0));
      setParam(objectives[currIdx].id);
    };

    const handleNext = () => {
      setCurrIdx((prev) => Math.min(prev + 1, objectives.length - 1));
      setParam(objectives[currIdx].id);
    };

    return (
      <div>
        <TableContainer sx={{ maxHeight: 750 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    sx={{
                      color: "#31394E80",
                      minWidth: column.minWidth || 100,
                      borderBottom: "none",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {objectives.map((objective, index) => {
                const checkMarks = generateRandomCheckMarks(objective.status);

                return (
                  <TableRow
                    hover
                    role="cell"
                    tabIndex={-1}
                    key={objective.id}
                    sx={{
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.04)",
                      },
                      height: "50px",
                      backgroundColor:
                        objective.status === "CLOSED" ? " #cef2d8" : "",
                    }}
                  >
                    <TableCell
                      colSpan={columns.length}
                      onClick={() => {
                        setIsPanelOpened(true);
                        setParam(objective.id);
                        setSelectedObjective({
                          checkMarks,
                          ...objective,
                        });
                        setCurrIdx(index);
                      }}
                    >
                      <ObjectiveItem
                        objective={{
                          checkMarks,
                          ...objective,
                        }}
                        key={objective.id}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <div ref={ref} />
        </TableContainer>
        <NotificationPanel
          isOpened={isPanelOpened}
          setIsPanelOpened={togglePanel}
          objectiveData={selectedObjective}
          currIdx={currIdx}
          lastIdx={currIdx === objectives.length - 1}
          onPrevious={handlePrevious}
          onNext={handleNext}
          currPage={currPage}
        />
      </div>
    );
  }
);

export default ObjectivesList;
