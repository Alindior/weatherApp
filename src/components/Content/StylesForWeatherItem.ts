import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      maxWidth: "100%",
      borderColor: "#abe39f",
      padding: "0 10px",
      marginTop: 2,
    },
    main__weather_prediction: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
});
