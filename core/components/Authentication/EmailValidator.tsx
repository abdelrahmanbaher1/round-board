"use client";

import { Button } from "@mui/material";
import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { getApiInstance } from "@/core/server/api";
import { useRouter } from "next/navigation";
import SpinnerLoader from "@/core/components/Loaders/SpinnerLoader";
import TextInput from "@/core/components/TextInput";
import { INPUT_CLASSNAME } from "@/core/lib/constants";
import { handleInputChange, isEmptyString } from "@/core/lib/helper";

const EmailValidator = () => {
  const [email, setEmail] = useState("");

  const router = useRouter();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: () => getApiInstance().user.fetchUserByEmail(email),
    onSuccess: (data) => {
      if (data.userExists) router.push("/login");
      else router.push("/signup/user");
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutate();
  };

  return (
    <form
      className="max-w-[539px] w-full p-12 mx-auto shadow-md bg-white flex flex-col justify-around items-center h-[300px] sm:w-4/5"
      onSubmit={handleSubmit}
    >
      <div className="text-center flex flex-col w-full text-xl mb-8 gap-3">
        <span className="font-normal text-lg">Sign Up</span>
        <span className="text-sm font-light">
          Let's Validate Your Email First
        </span>
      </div>
      <div className="w-[300px] flex flex-col items-center gap-5 h-3/4">
        <TextInput
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          className={INPUT_CLASSNAME}
          onChange={(event) => handleInputChange(event, setEmail)}
          value={email}
        />
        <Button
          variant="contained"
          className="w-[350px] h-12 bg-blue-500 text-white text-sm rounded-md"
          disabled={isEmptyString(email) || isPending}
          type="submit"
        >
          <SpinnerLoader isLoading={isPending} title="Next" />
        </Button>

        {isError && (
          <p className="text-red-500">
            Error: An error occurred while checking the email.
          </p>
        )}
      </div>
    </form>
  );
};

export default EmailValidator;
