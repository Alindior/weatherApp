import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  })
);

interface IAlertProps {
  text: string;
}

export const AlertError = ({ text }: IAlertProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="warning">
        <AlertTitle>{text}</AlertTitle>
      </Alert>
    </div>
  );
};
