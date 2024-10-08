"use client";

import { INPUT_CLASSNAME } from "@/core/lib/constants";
import { handleInputChange, isEmptyString } from "@/core/lib/helper";
import { Button } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import TextInput from "../TextInput";
import useCheckIfEmailExists from "@/core/hooks/useCheckIfEmailExists";
import ErrorMessage from "../ErrorMessage";
import SpinnerLoader from "../Loaders/SpinnerLoader";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

const ForgotPassowrd = () => {
  const [email, setEmail] = useState<string>("");

  const renderSuccessMessage = () => (
    <div className="bg-slate-100 text-sm items-center flex  gap-2 text-emerald-400 mt-3 mb-3 rounded-md w-[344px] px-3 py-2 mb-3">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.9487 23C18.0239 23 22.9487 18.0751 22.9487 12C22.9487 5.92487 18.0239 1 11.9487 1C5.8736 1 0.94873 5.92487 0.94873 12C0.94873 18.0751 5.8736 23 11.9487 23ZM11.9487 21C6.97817 21 2.94873 16.9706 2.94873 12C2.94873 7.02944 6.97817 3 11.9487 3C16.9193 3 20.9487 7.02944 20.9487 12C20.9487 16.9706 16.9193 21 11.9487 21ZM6.24162 12.2929C6.63215 11.9024 7.26531 11.9024 7.65584 12.2929L9.94873 14.5858L16.2416 8.29289C16.6321 7.90237 17.2653 7.90237 17.6558 8.29289C18.0464 8.68342 18.0464 9.31658 17.6558 9.70711L10.6558 16.7071C10.2653 17.0976 9.63215 17.0976 9.24162 16.7071L6.24162 13.7071C5.8511 13.3166 5.8511 12.6834 6.24162 12.2929Z"
          fill="#29C293"
        />
      </svg>
      <p>Well done, we'll email you with a reset link.</p>
    </div>
  );

  const { isEmailExists, isPending, mutate } = useCheckIfEmailExists(email);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutate();
  };
  return (
    <form
      className="max-w-[539px] w-full flex flex-col items-center justify-between p-12 mx-auto shadow-md bg-white h-[369px] sm:w-4/5"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-1 items-center">
        <span className="text-2xl">Forgot your password</span>
        <span className="text-gray-500 text-sm text-center">
          Enter you details below
        </span>
        {isEmailExists && (
          <ErrorMessage
            message="Email Already Exists , Authenticate"
            icon={<ExclamationCircleIcon width={20} height={20} />}
          />
        )}
      </div>
      {/* {renderSuccessMessage()} */}

      <div className="w-[344px] flex flex-col gap-3">
        <TextInput
          id="email"
          name="email"
          type="email"
          placeholder="Insert your email"
          required
          fullWidth
          className={INPUT_CLASSNAME}
          value={email}
          onChange={(event) => handleInputChange(event, setEmail)}
          label="Email"
        />

        <Button
          variant="contained"
          className="w-[344px] h-12 bg-blue-500 text-white text-sm rounded-md"
          sx={{ fontSize: "14px" }}
          disabled={isEmptyString(email) || isPending}
          type="submit"
        >
          <SpinnerLoader
            isLoading={isPending}
            title="          Recover Your Password
"
          />
        </Button>
        <Link href="/login" className="text-blue-500 text-sm text-center">
          Back To Login Page
        </Link>
      </div>
    </form>
  );
};

export default ForgotPassowrd;
