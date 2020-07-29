import React from "react";
import Globe from "./Globe";
import { makeStyles, Paper, Grid } from "@material-ui/core";
import theme from "./theme";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
  },
  paper: {
    textAlign: "center",
  },
  bg: {
    color: "black",
  },
}));



export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item>
            <Globe/>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
