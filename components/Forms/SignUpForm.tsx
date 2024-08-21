import { Button, Stack, TextField } from "@mui/material";
import Link from "next/link";
import React from "react";

type Props = {};

const SignUpForm = (props: Props) => {
  return (
    <form className="max-w-[539px] w-full p-12 mx-auto shadow-md bg-white flex flex-col justify-around items-center h-[390px] sm:w-4/5">
      <div className="text-center w-full text-xl mb-4">Login</div>
      <div className="w-full flex flex-col items-center gap-5 h-3/4">
        <div className="w-full flex flex-col gap-5">
          <TextField
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
            fullWidth
            InputProps={{
              className: "py-2 px-3 h-[40px] w-[344px]",
            }}
          />
          <TextField
            id="password"
            name="password"
            type="password"
            placeholder="Enter Your password"
            fullWidth
            InputProps={{
              className: "py-2 px-3 h-[40px] w-[344px]",
            }}
          />
        </div>

        <Button
          variant="contained"
          className="w-full h-12 bg-blue-500 text-white rounded-md hover:scale-105"
        >
          Login
        </Button>
        <div className="flex w-full justify-between sm:justify-around">
          <Link href="/forgetPassword" className="text-blue-500">
            Forgot Password?
          </Link>
          <Link href="/signup" className="text-blue-500">
            Don’t have an account?
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
