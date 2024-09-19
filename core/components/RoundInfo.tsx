import { TRound } from "@/tmpData";
import React from "react";
import Image from "next/image";
import { Avatar, Tooltip } from "@mui/material";

import memberAvatar from "@/tmp.svg";
import ownerBadge from "@/ownerBadge.svg";

type TProps = {
  round: TRound;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const RoundInfo = ({ round }: TProps) => {
  const { id, status, start_date, end_date, teamMembers } = round;

  const renderStatus = () => {
    switch (status) {
      case "DONE":
        return (
          <div className="text-yellow-400 font-light text-sm bg-orange-100 max-w-fit py-1 px-6 rounded-md">
            Done
          </div>
        );
      case "IN_PROGRESS":
        return (
          <div className="text-emerald-500 font-light text-sm bg-green-100 max-w-fit py-1 px-6 rounded-md">
            In Progress
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center w-full h-[52px] border-b-2 border-gray-200 px-4">
      <div className="flex-1">Round {id}</div>
      <span className="text-base text-gray-700 flex-1">{renderStatus()}</span>

      <span className="text-base text-gray-700 flex-1">
        {formatDate(start_date)}
      </span>
      <span className="text-base text-gray-700 flex-1">
        {formatDate(end_date)}
      </span>
      <div className="flex w-[20px] flex-1">
        {teamMembers.map((member) => (
          <Tooltip title={member.name} placement="top" key={member.email}>
            <Avatar
              alt="Member Avatar"
              key={member.email}
              src="https://ld-wms-eu1-avatars-prod.s3.eu-central-1.amazonaws.com/thumb/user/7460/ba4a73d5-60e0-4fa3-968e-44897cf97460.jpg"
              sx={{ width: 20, height: 20 }}
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default RoundInfo;
