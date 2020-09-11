import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: "#abe39f",
    },
    icon: {
      width: 100,
      height: 100,
      objectFit: "cover",
    },
    weather__info: {
      height: "70px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      fontWeight: "bold",
      fontSize: 18,
    },
    weather__wind: {
      display: "flex",
      justifyContent: "space-around",
    },
  })
);
