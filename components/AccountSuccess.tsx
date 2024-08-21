import Image from "next/image";
import Link from "next/link";
import React from "react";
import AccountSuccessLogo from "@/core/icons/accountSuccess.svg";
type Props = {};

const AccountSuccess = (props: Props) => {
  return (
    <div className="max-w-[539px] w-full p-12 mx-auto shadow-md bg-white flex flex-col items-center h-[390px] sm:w-4/5">
      <div className="flex flex-col gap-9 items-center">
        <span className="text-lg"> You account is ready !</span>
        <Image
          src={AccountSuccessLogo}
          alt="success"
          width={100}
          height={100}
        />
        <p className="max-w-[200px] text-center text-gray-600">
          Please verify your email and continue to Roundrush
        </p>
        <Link href="/login" className="text-blue-500 text-sm">
          Go To Login Page
        </Link>
        
      </div>
    </div>
  );
};

export default AccountSuccess;
