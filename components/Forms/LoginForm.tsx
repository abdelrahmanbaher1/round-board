"use client";

import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Button, Stack, TextField } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

const LoginForm = (props: Props) => {
  const [loginError, setLoginError] = useState<boolean>(false);

  const renderErrorMessage = () => (
    <div className="bg-slate-100 flex gap-2 text-rose-500 rounded-md w-[344px] px-3 py-2 mb-3">
      <ExclamationTriangleIcon width={35} height={35} />
      <span>Please make sure you have the correct email or password.</span>
    </div>
  );

  return (
    <form className="max-w-[539px] w-full p-12 mx-auto shadow-md bg-white flex flex-col gap-5 justify-center items-center  h-[460px] sm:w-4/5">
      <div className="text-center w-full text-xl mb-4">Login</div>
      {loginError && renderErrorMessage()}
      <TextField
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email address"
        required
        InputProps={{
          className: "py-2 px-3 h-[40px] w-[344px]",
        }}
      />
      <TextField
        id="password"
        name="password"
        type="password"
        placeholder="Enter Your password"
        InputProps={{
          className: "py-2 px-3 h-[40px] w-[344px]",
        }}
      />

      <Button
        variant="contained"
        className="w-[344px] h-12 rounded-md bg-blue-500 text-white rounded-md hover:scale-105"
      >
        Login
      </Button>
      <div className="flex  justify-around gap-10 ">
        <Link href="/forgetPassword" className="text-blue-500">
          Forgot Password?
        </Link>
        <Link href="/signup" className="text-blue-500">
          Don’t have an account?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
