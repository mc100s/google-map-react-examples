import React, { Component } from 'react';

const K_WIDTH = 50;
const K_HEIGHT = 50;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT,

  backgroundImage: 'url(/images/pin.png)',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
};

class CircleMarker extends Component {
  render() {
    return (
      <div style={greatPlaceStyle} onClick={this.props.onClick} onMouseLeave={this.props.onMouseLeave} >
        <div>{this.props.children}</div>
      </div>
    );
  }
}


export default CircleMarker;