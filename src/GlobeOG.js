import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactGlobe from 'react-globe';
import Button from "@material-ui/core/Button";
import defaultMarkers from './Markers';
import Box from "@material-ui/core/Box";
import GpsFixedOutlinedIcon from "@material-ui/icons/GpsFixedOutlined";



function getTooltipContent(marker) {
  return `${marker.city}`;
}


function fetchStats() {
  // fetch('https://api.covid19api.com/total/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z')
  //   .then(res => res.json())
  //   .then(stats => {
  //     console.log(stats)
  //     // setStats(stats)
  //   })
    console.log('fetchStats function')
}

export default function Globe() {
  const allMarkers = defaultMarkers.map(marker => ({
    ...marker,
    color: 'red'
  }));
  const [markers, setMarkers] = useState([]);
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(null);
  const [stats, setStats] = useState(null);

  function onClickMarker(marker, markerObject, event) {
    console.log('e:', event)
    console.log('marker:', marker)
    console.log('markerObject:', markerObject)
    setEvent({
      type: 'CLICK',
      marker,
      markerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY },
    });
    setDetails(getTooltipContent(marker));
    fetchStats()
  }

  function onDefocus(previousCoordinates, event) {
    console.log('defocus e:', event)
    console.log('defocus pc:', previousCoordinates)
    setEvent({
      type: 'DEFOCUS',
      previousCoordinates,
      pointerEventPosition: { x: event.clientX, y: event.clientY },
    });
    setDetails(null);
  }

  return (
    <div style={{ width: "100vw", height: "65vh" }}>
      <ReactGlobe
        markers={markers}
        markerOptions={{
          getTooltipContent,
          radiusScaleRange: [0.009, 0.009],
        }}
        onClickMarker={onClickMarker}
        onDefocus={onDefocus}
      />
      {details && (
        <div
          style={{
            background: "white",
            position: "absolute",
            fontSize: 18,
            top: 0,
            left: 0,
            padding: 12,
          }}
        >
          <p>{details}</p>
          <p>Show Covid stats here from the api</p>
        </div>
      )}
      <div>
        <Box>
          <Button
            onClick={() => setMarkers(allMarkers)}
            color="primary"
          >
            Show markers
          </Button>
          <Button
            disabled={markers.length === 0}
            onClick={() => setMarkers([])}
          >
            Clear markers
          </Button>
        </Box>
      </div>
    </div>
  );
}

