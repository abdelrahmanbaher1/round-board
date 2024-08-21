import taskUrgent from "@/core/icons/Tasks_Priority/urgent.svg";
import taskHigh from "@/core/icons/Tasks_Priority/high.svg";
import taskMedium from "@/core/icons/Tasks_Priority/medium.svg";
import taskLow from "@/core/icons/Tasks_Priority/low.svg";
import taskIcon from "@/core/icons/Task_Type/Task.svg";
import macroIcon from "@/core/icons/Task_Type/Macro.svg";
import SearchIcon from "@/core/icons/SearchIcon.svg";

export const ICONS = {
  taskUrgent,
  taskHigh,
  taskMedium,
  taskLow,
  taskIcon,
  macroIcon,
  SearchIcon,
};

export type TConfigIcons = keyof typeof ICONS;

export const DEFAULT_ICON_SIZE = 21;
