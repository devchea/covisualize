import React from 'react';
import Globe from './Globe'
import NewsPanel from './NewsPanel'
import StatPanel from './StatPanel'
import { makeStyles, Paper, Grid} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
  },
  paper: {
    padding: '1px',
    margin: '1px',
    textAlign: "center",
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item>
          {<Globe />}
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item>
          {<NewsPanel />}
          {/* <Paper className={classes.paper}></Paper> */}
        </Grid>
      </Grid>
    </div>
  );
}