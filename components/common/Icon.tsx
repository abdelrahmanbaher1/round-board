import React from "react";

import { TConfigIcons, ICONS, DEFAULT_ICON_SIZE } from "@/core/icons/icon";
import Image from "next/image";

// IF AN ICON YOU ADD NEEDS AUTO FLIPPING - IT SHOULD BE ADDED TO AR_FLIP_ICONS ARRAY BELOW

export type TColors =
  | "offBlack"
  | "gold"
  | "orange"
  | "grey1"
  | "grey2"
  | "systemBlue"
  | "systemGreen"
  | "systemOrange"
  | "systemRed"
  | "red" // this is just for cs so i won't put it in the design system
  | "white"
  | "theme"
  | "theme-d2";

type TProps = {
  alt: string;
  color?: string;
  name: TConfigIcons;
  size?: number;
};
const Icon = ({
  alt,
  color = "offBlack",
  name,
  size = DEFAULT_ICON_SIZE,
}: TProps) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <Image
      alt={alt || name}
      color={color}
      height={size}
      src={ICONS[name]}
      width={size}
      loading="eager"
      style={{
        minWidth: size,
      }}
    />
  );
};

export default Icon;
