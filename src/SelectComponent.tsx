import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

type Option = {
  value: string;
  label: string;
};
type SelectComponentProps = {
  label: string;
  options: Option[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  fullWidth?: boolean;
};
export function SelectComponent({
  label,
  options,
  value,
  setValue,
  fullWidth = true,
}: SelectComponentProps) {
  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        label={label}
        labelId="select-label"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        fullWidth={fullWidth}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
