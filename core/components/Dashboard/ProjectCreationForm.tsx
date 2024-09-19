import SpinnerLoader from "@/core/components/Loaders/SpinnerLoader";
import TextInput from "@/core/components/TextInput";
import useAuthContext from "@/core/contexts/AuthContext";
import useParamState from "@/core/hooks/useParamState";
import { INPUT_CLASSNAME } from "@/core/lib/constants";
import { handleInputChange, isEmptyString } from "@/core/lib/helper";
import { getApiInstance } from "@/core/server/api";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";

const ProjectCreationForm: React.FC = () => {
  const [projectName, setProjectName] = useState<string>("");
  const [projectKey, setProjectKey] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // State to handle error
  const { organizationData, userInfo, teamData, projectData } =
    useAuthContext();

  const renderInputs = () => (
    <div className="flex flex-col w-[300px] gap-2">
      <TextInput
        id="projectName"
        name="projectName"
        type="text"
        placeholder="Insert project name"
        required
        fullWidth
        className={INPUT_CLASSNAME}
        value={projectName}
        onChange={(event) => handleInputChange(event, setProjectName)}
        label="Project Name"
      />
      <TextInput
        id="companySpace"
        name="companySpace"
        type="text"
        placeholder="Insert your company space"
        required
        fullWidth
        className={INPUT_CLASSNAME}
        value={projectKey}
        onChange={(event) => handleInputChange(event, setProjectKey)}
        label="Project Key"
      />
    </div>
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    mutate();
  };

  const renderErrorMessage = () => (
    <div className="bg-slate-100 flex gap-2 text-sm text-rose-500 rounded-md w-[300px] px-3 py-2 mb-3">
      <ExclamationTriangleIcon width={35} height={35} />
      <span>{error}</span>
    </div>
  );
  return (
    <form
      className="h-[450px] w-[540px] mx-auto shadow-md bg-white flex flex-col gap-5 justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="text-center flex w-full justify-center text-xl mt-5">
        Project Creation
      </div>
      {error && <div>{renderErrorMessage()}</div>}

      <div className="w-[300px] flex flex-col items-center gap-5 h-3/4">
        {renderInputs()}

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#29c293",
            ":hover": { backgroundColor: "#29c293" },
          }}
          className="w-full h-12 rounded-md"
          disabled={isEmptyString(projectName) || isEmptyString(projectKey)}
          type="submit"
        >
          <SpinnerLoader isLoading={isPending} title="Create Project" />
        </Button>
      </div>
    </form>
  );
};

export default ProjectCreationForm;
