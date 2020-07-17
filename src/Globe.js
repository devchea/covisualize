import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactGlobe from 'react-globe';
import Button from "@material-ui/core/Button";
import defaultMarkers from './markers';


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
    console.log('hi')
}

export default function Globe() {
  const allMarkers = defaultMarkers.map(marker => ({
    ...marker,
    value: 1,
  }));
  const [markers, setMarkers] = useState([]);
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(null);
  const [stats, setStats] = useState(null);

  function onClickMarker(marker, markerObject, event) {
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
    setEvent({
      type: 'DEFOCUS',
      previousCoordinates,
      pointerEventPosition: { x: event.clientX, y: event.clientY },
    });
    setDetails(null);
  }

  return (
    <div style={{ width: '98vw', height: '70vh' }}>
      <ReactGlobe
        markers={markers}
        markerOptions={{
          getTooltipContent,
        }}
        onClickMarker={onClickMarker}
        onDefocus={onDefocus}
      />
      {details && (
        <div
          style={{
            background: 'white',
            position: 'absolute',
            fontSize: 20,
            top: 0,
            right: 0,
            padding: 12,
          }}>
          <p>{details}</p>
          <p>
            EVENT: type={event.type}, position=
            {JSON.stringify(event.pointerEventPosition)})
          </p>
        </div>
      )}
        <div>
          <Button
            onClick={() => setMarkers(allMarkers)}
            color='primary'
            >
            Show markers
          </Button>
          <Button disabled={markers.length === 0} onClick={() => setMarkers([])}>
            Clear markers
          </Button>
        </div>
      </div>
  );
}

