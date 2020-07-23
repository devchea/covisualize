import React, { useState, useEffect } from "react";
import Globe from "./Globe";
import NewsPanel from "./NewsPanel";
import { makeStyles, Paper, Grid } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
  },
  paper: {
    padding: "1px",
    margin: "1px",
    textAlign: "center",
  },
}));



export default function Dashboard() {
  const newsAPIKey = process.env.REACT_APP_NEWS_API_KEY
  const classes = useStyles();
  const [news, setNews] = useState([]);
  const [markers, setMarkers] = useState([]);

  //test fetch
  const fetchNews = async () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("dd", data);
        setNews(data)
        console.log('news:', news)
      });
  };

  //real fetch
  // const fetchNews = async() => {
  //   await fetch(`https://gnews.io/api/v3/search?q=los$angeles%20covid%20&token=${newsAPIKey}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("dd", data);
  //       setNews(data);
  //       console.log("news:", news);
  //     });
  // };


  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item>
          {<Globe fetchNews={fetchNews}/>}
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item>
          {news.map (newsObj => (
            <NewsPanel
              key={newsObj.id}
              name={newsObj.name}
            />
          ))}
          {/* <Paper className={classes.paper}></Paper> */}
        </Grid>
      </Grid>
    </div>
  );
}
