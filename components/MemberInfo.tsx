import { TMember } from "@/tmpData";
import React from "react";
import memberAvatar from "@/tmp.svg";
import ownerBadge from "@/ownerBadge.svg";

import Image from "next/image";

type TProps = {
  member: TMember;
};

const MemberInfo = ({ member }: TProps) => {
  const { name, email, status, isOwner } = member;
  console.log(isOwner);

  const renderStatus = () => {
    switch (status) {
      case "ACTIVE":
        return <div className="text-emerald-500">Active</div>;
      case "IN_ACTIVE":
        return <div className="text-rose-500">Inactive</div>;
    }
  };

  const renderOwnerBadge = () => {
    <Image src={ownerBadge} width={30} height={30} alt="ownerBadge" />;
  };
  return (
    <div
      className="flex items-center w-[1013px] h-[52px] border-b-2"
      style={{ gap: "0px" }}
    >
      <div className="flex gap-2 items-center flex-1 ">
        <Image src={memberAvatar} width={30} height={30} alt="Avatar" />
        <span className="text-base text-gray-700">
          {name}
          {isOwner && (
            <span className="text-sm bg-green-200 text-emerald-400 p-2 ml-5 rounded-md">
              {" "}
              OWNER{" "}
            </span>
          )}
        </span>
      </div>
      <span className="text-base text-gray-700 flex-1">{email}</span>
      <span className="text-base text-gray-700 flex-1 ml-8">
        {renderStatus()}
      </span>
    </div>
  );
};

export default MemberInfo;
