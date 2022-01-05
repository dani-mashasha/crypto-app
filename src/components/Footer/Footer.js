import { Grid } from "@mui/material";
import "./style.js";
import useStyles from "./style.js";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Grid container className={classes.main}>
      <Grid item xs={12} sm={4} className={classes.item}>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Careers</li>
        </ul>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.item}>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Careers</li>
        </ul>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.item}>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Careers</li>
        </ul>
      </Grid>
    </Grid>
  );
};
export default Footer;
