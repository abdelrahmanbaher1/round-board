"use client";

import React, { useState } from "react";
import { Button, Checkbox } from "@mui/material";
import TextInput from "@/core/components/TextInput";
import { handleInputChange } from "@/core/lib/helper";
import { getApiInstance } from "@/core/server/api";
import { useMutation } from "@tanstack/react-query";
import SpinnerLoader from "@/core/components/Loaders/SpinnerLoader";
import useAuthContext from "@/core/contexts/AuthContext";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import ErrorMessage from "@/core/components/ErrorMessage";
import { useRouter } from "next/navigation";
import { hashPW } from "@/core/lib/authTools";
import { INPUT_CLASSNAME } from "@/core/lib/constants";

const CompanySignUpForm = () => {
  const { userInfo } = useAuthContext();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [displayName, setDisplayName] = useState("");
  const [companySpace, setCompanySpace] = useState("");
  const router = useRouter();

  const { mutate, data, isPending, isError, isSuccess } = useMutation({
    mutationFn: () =>
      getApiInstance().organization.createOrganization({
        displayName: displayName,
        key: companySpace,
      }),
    onSuccess: (response) => {
      console.log("Mutation success response:", response);
      getApiInstance().auth.signUp({
        ...userInfo,
        organizationId: response.data.organizationId,
      });
      router.push("/signup/success");
    },
    onError: (error) => {
      console.log({ error });

      console.error("Error creating organization:", error);
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutate();
  };

  const renderInputs = () => (
    <div className="flex flex-col w-full gap-3">
      <TextInput
        id="displayName"
        name="displayName"
        type="text"
        placeholder="Insert your company name"
        required
        fullWidth
        className={INPUT_CLASSNAME}
        value={displayName}
        onChange={(event) => handleInputChange(event, setDisplayName)}
        label="Company Name"
      />
      <TextInput
        id="companySpace"
        name="companySpace"
        type="text"
        placeholder="Insert your company space"
        required
        fullWidth
        className={INPUT_CLASSNAME}
        value={companySpace}
        onChange={(event) => handleInputChange(event, setCompanySpace)}
        label="Company Space"
      />
      {isError && (
        <ErrorMessage
          icon={<ExclamationCircleIcon width={20} height={20} />}
          message="This space name is not available"
        />
      )}
    </div>
  );
  return (
    <form
      className="h-[580px] w-[540px] p-6 mx-auto shadow-md bg-white flex flex-col gap-5 justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="text-center flex flex-col w-full text-xl mb-8 gap-3">
        <span className="font-normal text-lg">Sign Up</span>
        <span className="text-sm font-light">Create Your Company Space</span>
      </div>

      <div className="w-[400px] flex flex-col items-center gap-5 h-3/4">
        {renderInputs()}

        <div className="flex gap-2 items-center">
          <Checkbox
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <span>
            Accetto le Condizioni di utilizzo e Informativa sulla Privacy
          </span>
        </div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#29c293",
            ":hover": { backgroundColor: "#29c293" },
          }}
          className={"w-full h-12 rounded-md"}
          disabled={!isChecked || (!companySpace && !displayName)}
          type="submit"
        >
          <SpinnerLoader isLoading={isPending} title="Register" />
        </Button>
      </div>
    </form>
  );
};

export default CompanySignUpForm;
