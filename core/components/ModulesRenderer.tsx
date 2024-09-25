import React from "react";
import RetroSpectives from "./modules/RetroSpectives";
import { TTab } from "@/app/[...slug]/page";
import Development from "./modules/Development";
import Objectives from "./modules/Objectives";

type TProps = {
  module: TTab;
};
const ModulesRenderer = ({ module }: TProps) => {
  switch (module) {
    case "development":
      return <Development />;
    case "objectives":
      return <Objectives />;
    default:
      return <div className="text-black">Module Not Found</div>;
  }
};

export default ModulesRenderer;
