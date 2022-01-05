import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#3e4143",
    padding: "50px",
    textAlign: "center",
  },
  item: {
    "& ul": {
      color: "#ff6d00",
      listStyleType: "none",
      padding: 0,
    },
  },
}));

export default useStyles;
