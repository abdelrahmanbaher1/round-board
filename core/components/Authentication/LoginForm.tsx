"use client";

import { handleInputChange, isEmptyString } from "@/core/lib/helper";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Button } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import TextInput from "../TextInput";
import { INPUT_CLASSNAME } from "@/core/lib/constants";
import { useMutation } from "@tanstack/react-query";
import { getApiInstance } from "@/core/server/api";
import { useRouter } from "next/navigation";
import SpinnerLoader from "../Loaders/SpinnerLoader";
import clsx from "clsx";
import useAppContext from "@/core/contexts/AppContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setOrganizationId } = useAppContext();

  const renderErrorMessage = () => (
    <div className="bg-slate-100 flex gap-2 text-rose-500 rounded-md w-[344px] px-3 py-2 mb-3">
      <ExclamationTriangleIcon width={35} height={35} />
      <span>Please make sure you have the correct email or password.</span>
    </div>
  );

  const { mutate, isPending, isError } = useMutation({
    mutationFn: () => getApiInstance().auth.signIn(email, password),
    onSuccess: (response) => {
      console.log({ response });

      router.push(`/dashboard/${response.data.user.organizationId}`);
      setOrganizationId(response.data.user.organizationId);
    },
    onError: (error) => {
      console.error("Error signing in:", error);
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutate();
  };

  return (
    <form
      className={clsx(
        "max-w-[540px] p-12 mx-auto shadow-md bg-white flex flex-col gap-5 justify-center items-center h-[389px] sm:w-4/5",
        {
          "h-[540px]": isError,
        }
      )}
      onSubmit={handleSubmit}
    >
      <div className="text-center w-full text-xl mb-4" data-test-id="Login">
        Login
      </div>
      <div className="w-[350px] flex flex-col items-center gap-5">
        {isError && renderErrorMessage()}
        <TextInput
          id="email"
          name="email"
          type="email"
          placeholder="Email Address"
          className={INPUT_CLASSNAME}
          onChange={(event) => handleInputChange(event, setEmail)}
          value={email}
        />
        <TextInput
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className={INPUT_CLASSNAME}
          onChange={(event) => handleInputChange(event, setPassword)}
          value={password}
        />
        <Button
          variant="contained"
          className="w-full h-12 bg-blue-500 text-white text-sm rounded-md"
          disabled={isEmptyString(email) || isEmptyString(password)}
          type="submit"
          data-testid="LoginSubmit"
        >
          <SpinnerLoader isLoading={isPending} title="Login" />
        </Button>
        <div className="text-sm flex justify-between text-blue-500 w-full">
          <Link href="/forgotPassword">I forgot my password</Link>
          <Link href="/signup">I don’t have an account</Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
