import React from "react";
import TextField from "@mui/material/TextField";
import { sanitizeText } from "@/core/lib/helper";

type TProps = {
  id: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  fullWidth?: boolean;
  type?: string;
  label?: String;
  InputProps?: string;
  disabled?: boolean;
};

const TextInput: React.FC<TProps> = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  className,
  required = false,
  fullWidth = false,
  type = "text",
  label,
  disabled = false,
}) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className=" text-gray-400 text-sm font-normal">
          {label}
        </label>
      )}
      <TextField
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        fullWidth={fullWidth}
        InputProps={{
          className: "h-[50px] w-[350px]",
        }}
        disabled={disabled}
        value={value && sanitizeText(value)}
        onChange={onChange}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "lightgray",
            },
          },
        }}
      />
    </>
  );
};

export default TextInput;
