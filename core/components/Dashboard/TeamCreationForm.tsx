import SpinnerLoader from "@/core/components/Loaders/SpinnerLoader";
import SuccessMessage from "@/core/components/SuccessMessage";
import TextInput from "@/core/components/TextInput";
import useAppContext from "@/core/contexts/AppContext";
import useAuthContext from "@/core/contexts/AuthContext";
import { INPUT_CLASSNAME, REACT_QUERY_KEYS } from "@/core/lib/constants";
import { handleInputChange, isEmptyString } from "@/core/lib/helper";
import { getApiInstance } from "@/core/server/api";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Button } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";

const TeamCreationForm = ({ organizationId }: { organizationId: string }) => {
  const [teamName, setTeamName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess, isError, data } = useMutation({
    mutationFn: () =>
      getApiInstance().team.createTeam({
        organizationId,
        name: teamName,
        description,
      }),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [REACT_QUERY_KEYS.GET_TEAMS, organizationId],
      }),
    onError: (error: any) => {
      console.error("Error creating team:", error);
      setError(error.message || "An error occurred while creating the team.");
    },
  });

  const renderInputs = () => (
    <div className="flex flex-col w-[400px] gap-2">
      <TextInput
        id="teamName"
        name="teamName"
        type="text"
        placeholder="Insert team name"
        required
        fullWidth
        className={INPUT_CLASSNAME}
        value={teamName}
        onChange={(event) => handleInputChange(event, setTeamName)}
        label="Team Name"
      />
      <TextInput
        id="description"
        name="description"
        type="text"
        placeholder="Insert team description"
        required
        fullWidth
        className={INPUT_CLASSNAME}
        value={description}
        onChange={(event) => handleInputChange(event, setDescription)}
        label="Description"
      />
      {isSuccess && <SuccessMessage message="Team Created Successfully" />}
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
      className="h-[450px] w-[540px] mx-auto  bg-white flex flex-col gap-5 justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="text-center flex w-full justify-center text-xl mt-5">
        Team Creation
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
          className="w-[400px] h-12 rounded-md"
          disabled={isEmptyString(teamName) || isEmptyString(description)}
          type="submit"
        >
          <SpinnerLoader isLoading={isPending} title="Create Team" />
        </Button>
      </div>
    </form>
  );
};

export default TeamCreationForm;

//  expandIcon: isDrawerOpen ? <ExpandMore /> : <KeyboardArrowRight />,
