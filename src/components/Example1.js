import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import CircleMarker from './markers/CircleMarker'

class Example1 extends Component {
  render() {
    return (
      <div style={{ position: 'relative', width: '100%', height: 'calc(100vh - 40px)' }}>
        <GoogleMap
          margin={[10, 20, 30, 40]}
          // apiKey={YOUR_GOOGLE_MAP_API_KEY}
          center={{ lat: 52.506, lng: 13.37 }}
          zoom={10}>

          <CircleMarker
            lat={52.5063688} lng={13.3711224}
            borderColor="red"
            onClick={e => console.log("click")}
            onMouseLeave={e => console.log("mouseLeave")}>
            Ironhack Berlin
          </CircleMarker>

          <CircleMarker lat={48.8710895} lng={2.3070486} borderColor="blue">
            Ironhack Paris
          </CircleMarker>
        </GoogleMap>
      </div>
    );
  }
}

export default Example1;


