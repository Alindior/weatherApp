import React from "react";
import { Typography } from "@material-ui/core";

interface ITitle {
  text: string;
  classes?: string;
}

export const Title = ({ text, classes }: ITitle) => {
  return (
    <Typography className={classes} variant="h6" noWrap>
      {text}
    </Typography>
  );
};
