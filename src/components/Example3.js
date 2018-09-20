import React, { Component } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  // geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';


class Example3 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: null,
      lng: null,
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(latLng) {
    this.setState({
      lat: latLng.lat,
      lng: latLng.lng,
    })
  }
  render() {
    return (
      <div>
        <h1>Example3</h1>
        lat = {this.state.lat} <br />
        lng = {this.state.lng} <br />
        <hr />
        <LocationSearchInput onSelect={this.handleSelect} />
      </div>
    );
  }
}

export default Example3;



class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.onSelect(latLng))
      .catch(error => console.error('Error', error));
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}