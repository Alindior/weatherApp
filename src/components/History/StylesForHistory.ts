import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 400,
      backgroundColor: theme.palette.background.paper,
      marginTop: 5,
      marginLeft: 5,
      flexGrow: 1,
    },
    nested: {
      // paddingLeft: theme.spacing(4),
    },
  })
);
