import React from "react";
import { InputBase } from "@material-ui/core";

interface IInputSearchProps {
  classes?: {
    root: string;
    input: string;
  };
  onSearch: (city: string) => void;
}

export const InputSearch = ({ classes, onSearch }: IInputSearchProps) => {
  const [inputValue, setInputValue] = React.useState({ city: "" });
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };
  const onSearchCity = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      onSearch(inputValue.city);
      setInputValue({ city: "" });
    }
  };
  return (
    <InputBase
      onChange={onChangeInput}
      value={inputValue.city}
      onKeyPress={onSearchCity}
      placeholder="City..."
      name="city"
      classes={classes}
      inputProps={{ "aria-label": "search" }}
    />
  );
};
