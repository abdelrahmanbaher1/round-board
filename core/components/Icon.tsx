import React from "react";
import { TConfigIcons, ICONS, DEFAULT_ICON_SIZE } from "../assets/icons/icon";
import Image from "next/image";

type TProps = {
  alt: string;
  color?: string;
  name: TConfigIcons;
  size?: number;
  onClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
};
const Icon = ({
  alt,
  color = "offBlack",
  name,
  size = DEFAULT_ICON_SIZE,
  onClick,
  className,
  width,
  height,
}: TProps) => {
  return (
    <Image
      className={className}
      alt={alt || name}
      color={color}
      height={height ? height : size}
      src={ICONS[name]}
      width={width ? width : size}
      loading="eager"
      style={{
        minWidth: size,
      }}
      onClick={() => onClick?.()}
    />
  );
};

export default Icon;
