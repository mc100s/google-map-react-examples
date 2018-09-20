import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import axios from 'axios'
import PinMarker from './markers/PinMarker'


class Example1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stations: []
    }
  }
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ width: 600, padding: '0 20px' }}>
          <h1>Station list</h1>
          {this.state.stations.map(s => (
            <div key={s.name}>{s.name}</div>
          ))}
        </div>

        <div style={{ position: 'relative', width: '100%', height: 'calc(100vh - 40px)' }}>
          <GoogleMap
            // apiKey={YOUR_GOOGLE_MAP_API_KEY}
            center={{ lat: 45.75801, lng: 4.8000159 }}
            zoom={10}>

            {this.state.stations.map(s => (
              <PinMarker key={s.name} lat={s.position.lat} lng={s.position.lng} />
            ))}



          </GoogleMap>
        </div>
      </div>
    );
  }
  componentDidMount() {
    axios.get('https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=31914cb97e2074dd91b0b77c5e6e62d8ea0587f9')
      .then(res => {
        this.setState({
          stations: res.data
        })
      })
  }
}

export default Example1;


