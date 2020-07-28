import React, { useState, useEffect} from 'react';
import ReactGlobe from 'react-globe';
import Button from "@material-ui/core/Button";
import defaultMarkers from './Markers';
import { makeStyles, Grid } from "@material-ui/core";
import NewsPanel from "./NewsPanel";


const useStyles = makeStyles((theme) => ({
  buttonShow: {
    position: "absolute",
    fontSize: "18",
    top: "10px",
    left: "10px",
    border: "1px",
    borderColor: "white",
    borderStyle: "solid",
    color: "white",
    padding: "15px 32px",
    textalign: "center",
    textdecoration: "none",
    display: "inline-block",
    fontsize: "16px",
    backgroundColor: "#transparent",
    borderRadius: "25px",
  },

  buttonClear: {
    position: "absolute",
    fontSize: "18",
    top: "10px",
    right: "10px",
    border: "1px",
    borderColor: "white",
    borderStyle: "solid",
    color: "white",
    padding: "15px 32px",
    textalign: "center",
    textdecoration: "none",
    display: "inline-block",
    fontsize: "16px",
    backgroundColor: "#transparent",
    borderRadius: "25px",
  },
  tooltipStyle: {
    position: "absolute",
    fontSize: "18px",
    bottom: "10px",
    left: "10px",
    border: "1px",
    borderColor: "white",
    // borderStyle: "solid",
    padding: "15px 32px",
    textAlign: "center",
    display: "inline-block",
    color: "white",
    backgroundColor: "#transparent",
    borderRadius: "25px",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    flexGrow: 1,
  },
  cardContainer: {
    display: "flex",
    margin: "20px",
  },
  gridItem: {
    margin: "40px",
  },
  // paper: {
  //   padding: "1px",
  //   margin: "1px",
  //   textAlign: "center",
  // },
}));

function Globe () {
  const classes = useStyles()
  const newsAPIKey = process.env.REACT_APP_NEWS_API_KEY;
  
  const allMarkers = defaultMarkers.map((marker) => ({
    ...marker,
    color: "#ff2600",
  }));

  const [markers, setMarkers] = useState([]);
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(["Current City"]);
  const [stats, setStats] = useState(null);
  const [news, setNews] = useState([]);


  const getTooltipContent = (marker) => {
    return `${marker.city}`;
  }


  // const handleClickMarker = (marker) => {
  //   setDetails(getTooltipContent(marker))
  // }

  const fetchNews = () => {

    fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/NewsSearchAPI?fromPublishedDate=2020-07-24T00%253A00%253A00&autoCorrect=false&pageNumber=1&pageSize=10&q=${details}%20covid&safeSearch=false`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
          "x-rapidapi-key": `${newsAPIKey}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(data.value);
      });
  };

  useEffect(() => {
  fetchNews();
  console.log(details)
  },[details]);


  return (
    <div
    >
      <div id="div1"
      style={{
        position: "relative",
        width: "99vw",
        height: "55vh"
      }}>
      <ReactGlobe
        markers={markers}
        markerOptions={{
          getTooltipContent,
          radiusScaleRange: [0.009, 0.009],
        }}
        onClickMarker={(e) => {
          // handleClickMarker(e);
          setDetails(getTooltipContent(e));
          // fetchNews();
        }}
      />
      <Button
        className={classes.buttonShow}
        onClick={() => setMarkers(allMarkers)}
      >
        Show Cities
      </Button>
      <Button
        className={classes.buttonClear}
        onClick={() => {
          setDetails([]);
          setMarkers([]);
        }}
      >
        Clear Markers
      </Button >
      {/* {details && ( */}
      <div className={classes.tooltipStyle} disabled={markers.length === 0}>
        <p>{details}</p>
        <p>{}</p>
      </div>
      {/* )} */}
      </div>
      <div className={classes.gridItem}>
        <p>General News</p>
      <Grid container item xs={12} spacing={0}>
          {news.map((newsObj) => (
            <NewsPanel
              key={newsObj.id}
              title={newsObj.title}
              description={newsObj.description}
              image={newsObj.image.url}
              source={newsObj.provider.name}
              url={newsObj.url}
            />
          ))}
      </Grid>
      </div>
    </div>
  );
}

export default Globe