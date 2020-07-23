import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactGlobe from 'react-globe';
import Button from "@material-ui/core/Button";
import defaultMarkers from './Markers';
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';


const newsAPIKey = process.env.REACT_APP_NEWS_API_KEY

const useStyles = makeStyles((theme) => ({
  buttonShow: {
    position: "absolute",
    fontSize: '18',
    top: '0',
    left: '0',
    backgroundcolor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textalign: 'center',
    textdecoration: 'none',
    display: 'inline-block',
    fontsize: '16px',
    backgroundColor: '#4CAF50'

  },
  
  buttonClear: {
    position: 'absolute',
    fontSize: '18',
    top: '0',
    right: '0',
    backgroundcolor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    backgroundColor: '#transparent'

  },
  tooltipStyle: {
    background: '#edf0c0',
    position: "absolute",
    padding: '15px 32px',
    fontSize: '52',
    bottom: '0',
    left: '0',
    borderRadius: '25px'

  }
}))

function Globe (props) {
  const classes = useStyles()
  // console.log(props.fetchNews)
  const allMarkers = defaultMarkers.map((marker) => ({
    ...marker,
    color: "#ff2600",
  }));

  const [markers, setMarkers] = useState([]);
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(null);
  const [stats, setStats] = useState(null);


  const getTooltipContent = (marker) => {
    return `${marker.city}`;
  }


  const handleClickMarker = (marker) => {
    setDetails(getTooltipContent(marker))
  }

  return (
    <div
      id="div1"
      style={{
        position: "relative",
        width: "99vw",
        height: "60vh",
        border: "1px solid gray",
      }}
    >
      <ReactGlobe
        markers={markers}
        markerOptions={{
          getTooltipContent,
          radiusScaleRange: [0.009, 0.009],
        }}
        onClickMarker={(e) => {
          handleClickMarker(e);
          props.fetchNews()
          setDetails(getTooltipContent(e));
        }}
      />
      <Button
        className={classes.buttonShow}
        onClick={() => setMarkers(allMarkers)}
        style={{ backgroundColor: "transparent" }}
      >
        Show Cities
      </Button>
      <Button
        className={classes.buttonClear}
        disabled={markers.length === 0}
        onClick={() => {
          setDetails([]);
          setMarkers([]);
        }}
      >
        Clear Markers
      </Button>
      {/* {details && ( */}
        <div className={classes.tooltipStyle} disabled={markers.length === 0}>
          <p>{details}</p>
          <p>{}</p>
        </div>
      {/* )} */}
    </div>
  );
}

export default Globe