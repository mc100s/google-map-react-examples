import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Example1 from './Example1'
import Example2 from './Example2'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ backgroundColor: 'red', color: 'white', height: 30, padding: '5px 10px', fontSize: 25 }}>
          google-map-react examples
        </div>

        <Route path="/" exact render={() => (
          <div>
            <Link to="/example/1">Example1</Link> <br />
            <Link to="/example/2">Example2</Link> <br />
            <a href="http://google-map-react.github.io/google-map-react/map/simple_hover">Online Example</a> (<a href="https://github.com/google-map-react/old-examples/blob/master/web/flux/components/examples/x_simple_hover/simple_hover_map_page.jsx">source</a>) <br />
          </div>
        )} />
        <Route path="/example/1" component={Example1} />
        <Route path="/example/2" component={Example2} />
      </div>
    );
  }
}

export default App;
