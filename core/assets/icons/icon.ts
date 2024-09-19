import taskUrgent from "@/core/assets/svgs/task-urgent.svg";
import taskHigh from "@/core/assets/svgs/task-high.svg";
import taskMedium from "@/core/assets/svgs/task-medium.svg";
import taskLow from "@/core/assets/svgs/task-low.svg";
import taskIcon from "@/core/assets/svgs/Task.svg";
import macroIcon from "@/core/assets/svgs/Macro.svg";
import SearchIcon from "@/core/assets/svgs/SearchIcon.svg";
import CloseIcon from "@/core/assets/svgs/close.svg";
import MenuIcon from "@/core/assets/svgs/MenuIcon.svg";
import threeDotsHorz from "@/core/assets/svgs/threeDotsHorz.svg";
import RoundRushLogo from "@/core/assets/svgs/RoundRushLogo.svg";
import threeDotsVert from "@/core/assets/svgs/threeDotsVert.svg";
import slack from "@/core/assets/svgs/logos-slack.svg";
import calendar from "@/core/assets/svgs/logos-calendar.svg";
import video from "@/core/assets/svgs/logos-video.svg";
import rocket from "@/core/assets/svgs/rocket.svg";

export const ICONS = {
  taskUrgent,
  taskHigh,
  taskMedium,
  taskLow,
  taskIcon,
  macroIcon,
  SearchIcon,
  CloseIcon,
  MenuIcon,
  threeDotsHorz,
  threeDotsVert,
  RoundRushLogo,
  slack,
  calendar,
  video,
  rocket,
};

export type TConfigIcons = keyof typeof ICONS;

export const DEFAULT_ICON_SIZE = 21;
