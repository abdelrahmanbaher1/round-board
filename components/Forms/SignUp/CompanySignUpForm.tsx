"use client";

import {
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import React, { useState } from "react";

type Props = {};
const INDUSTRIES = ["Retail", "Software", "Entertainment"];
const COMPANY_SIZES = ["0-10", "10-50", "50-200", "200+"];

const CompanySignUpForm = (props: Props) => {
  const [age, setAge] = React.useState("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <form className="h-[580px] w-[540px] mx-auto shadow-md bg-white flex flex-col gap-5 justify-center items-center">
      <div className="text-center w-full text-xl mb-4">SignUp</div>

      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-400">Company Name</span>
        <TextField
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          required
          InputProps={{
            className: "h-[50px] w-[344px]",
          }}
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-gray-400">Your Space Will Be</span>
        <TextField
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          required
          InputProps={{
            className: "h-[50px] w-[344px]",
          }}
        />
      </div>

      <FormControl className="w-[344px]">
        <InputLabel id="demo-simple-select-label">Industry Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="industry-type"
          onChange={handleChange}
        >
          {INDUSTRIES.map((industry) => (
            <MenuItem>{industry}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className="w-[344px]">
        <InputLabel id="demo-simple-select-label">Industry Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="industry-type"
          onChange={handleChange}
        >
          {COMPANY_SIZES.map((size) => (
            <MenuItem>{size}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className="flex w-[344px] flex-row-reverse gap-5 justify-center items-center">
        <span>
          Accetto le Condizioni di utilizzo e Informativa sulla Privacy
        </span>
        <Checkbox
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
      </div>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#29c293",
          ":hover": { backgroundColor: "#29c293" },
        }}
        className="w-[344px] h-12  rounded-md "
        disabled={!isChecked}
      >
        Register
      </Button>
    </form>
  );
};

export default CompanySignUpForm;
