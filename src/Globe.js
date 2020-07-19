import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactGlobe from 'react-globe';
import Button from "@material-ui/core/Button";
import defaultMarkers from './Markers';
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';

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
    backgroundColor: '#4CAF50'

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

function Globe () {
  const classes = useStyles()

  const allMarkers = defaultMarkers.map(marker => ({
    ...marker,
    color: 'red'
  }));
  const [markers, setMarkers] = useState([]);
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(null);
  const [stats, setStats] = useState(null);

  console.log('markers:', markers)
  console.log('event:', event)
  console.log('details:', details)
  // console.log('stat:', stats)


  const getTooltipContent = (marker) => {
    return `${marker.city}`;
  }
  
  const handleClickMarker = (marker, markerObject, e) => {
    // console.log('e:', e)
    console.log('marker:', marker)

    // console.log('markerObject:', markerObject)
    // console.log('onclick markers:', markers)
    // console.log('onclick event:', event)
    // console.log('onclick details:', details)
    setEvent({
      type: 'CLICK',
      marker,
      // markerObjectID: markerObject.uuid,
      // pointerEventPosition: { x: event.clientX, y: event.clientY },
    });
    setDetails(getTooltipContent(marker))
  }
  // useEffect(() => {
    // fetch('https://api.covid19api.com/total/country/south-africa/status/confirmed?from=2020-07-16T00:00:00Z&to=2020-07-18T00:00:00Z')
    //   .then(res => res.json())
    //   .then(stats => {
        // console.log('useEffect:')
        // setStats(stats)
      // })
  // })

  // const onClickMarker = (e) => {
  //   console.log('e:',e)
  //   setEvent({
  //     type: 'CLICK',
  //     marker,
  //     markerObjectID: markerObject.uuid,
  //     pointerEventPosition: { x: event.clientX, y: event.clientY },
  //   });
  //   setDetails(getTooltipContent(marker));
  // }

  // const onDefocusNow = (previousCoordinates, event) => {
    // console.log('defocus e:', event)
    // console.log('defocus pc:', previousCoordinates)
    // setEvent({
    //   type: 'DEFOCUS',
    //   previousCoordinates,
    //   pointerEventPosition: { x: event.clientX, y: event.clientY },
    // });
    // setDetails(null);
  // }

  return (
    < div 
    style = {
      {
        width: "100vw",
        height: "60vh",
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        border: '1px solid gray',
      }
    } >
      <ReactGlobe
        markers={markers}
        markerOptions={{
          getTooltipContent,
          radiusScaleRange: [0.009, 0.009],
        }}
        onClickMarker={(e) => handleClickMarker(e)}
        // onDefocus={onDefocusNow}
      />
      {details && (
        <div className={classes.tooltipStyle}
          
        >
          <p>{details}</p>
          <p>Show Covid stats here from the api</p>
        </div>
      )}
      <div>
        <Box m={10} p={1}>
          <Button
            className={classes.buttonShow}
            onClick={() => setMarkers(allMarkers)}
          >
            Show Cities
          </Button>
          <Button
            className={classes.buttonClear}
            disabled={markers.length === 0}
            onClick={() => setMarkers([])}
          >
            Clear Cities
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Globe