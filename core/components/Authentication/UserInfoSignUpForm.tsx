"use client";

import { Button } from "@mui/material";
import React, { useState } from "react";
import TextInput from "@/core/components/TextInput";
import Link from "next/link";
import { INPUT_CLASSNAME } from "@/lib/ constants";
import { handleInputChange, isEmptyString } from "@/core/lib/helper";
import useAuthContext from "@/core/contexts/AuthContext";
import { useRouter } from "next/navigation";
import ErrorMessage from "@/core/components/ErrorMessage";
import useCheckIfEmailExists from "@/core/hooks/useCheckIfEmailExists";

const UserInfoSignUpForm = () => {
  const { setUserInfo, userInfo } = useAuthContext();

  const [email, setEmail] = useState<string>(userInfo.email ?? "");
  const [fullName, setFullName] = useState<string>(userInfo.fullName ?? "");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const { isEmailExists, isPending, mutate } = useCheckIfEmailExists(email);

  const isNotValidForm =
    isEmptyString(password) || isEmptyString(email) || isEmptyString(fullName);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutate();

    if (!isEmailExists) {
      setUserInfo({
        email,
        password,
        fullName,
        isAdmin: true,
      });
      router.push("/company-sign-up");
    } else {
      router.push("/login");
    }
  };

  const renderInputs = () => (
    <div className="flex flex-col w-[400px] gap-2">
      <TextInput
        id="fullName"
        name="fullName"
        type="text"
        placeholder="Insert your name"
        required
        fullWidth
        className={INPUT_CLASSNAME}
        value={fullName}
        onChange={(event) => handleInputChange(event, setFullName)}
        label="Full Name"
      />

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
      <TextInput
        id="password"
        name="password"
        type="password"
        placeholder="Insert yout password"
        required
        fullWidth
        className={INPUT_CLASSNAME}
        value={password}
        onChange={(event) => handleInputChange(event, setPassword)}
        label="Password"
      />
    </div>
  );

  return (
    <form
      className="max-w-[539px] py-6 p-2 mx-auto shadow-md bg-white flex flex-col justify-around items-center h-auto sm:w-4/5"
      onSubmit={handleSubmit}
    >
      <div className="text-center flex flex-col w-full text-xl mb-8 gap-3">
        <span>SignUp</span>
      </div>
      <div className="w-[300px] flex flex-col items-center gap-5 h-3/4">
        {renderInputs()}

        <Button
          variant="contained"
          className="w-[400px] h-12 bg-blue-500 text-white text-sm rounded-md"
          sx={{ fontSize: "14px" }}
          disabled={isNotValidForm || isPending}
          type="submit"
        >
          Next
        </Button>
        {isEmailExists && (
          <ErrorMessage message="Email Already Exists , Try Another one" />
        )}
      </div>
      <Link href="/login" className="w-full h-12 text-sm text-center mt-3">
        <span className="text-gray-500">Already have an account?</span>
        <span className="text-blue-500 "> Login</span>
      </Link>
    </form>
  );
};

export default UserInfoSignUpForm;
