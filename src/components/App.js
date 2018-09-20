import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Example1 from './Example1'
import Example2 from './Example2'
import Example3 from './Example3'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ backgroundColor: 'red', color: 'white', height: 30, padding: '5px 10px', fontSize: 25 }}>
          google-map-react examples
        </div>

        <Route path="/" exact render={() => (
          <div style={{ padding: 10 }}>
            <h2><code>google-map-react</code></h2>
            <Link to="/example/1">Example1</Link> <br />
            <Link to="/example/2">Example2</Link> <br />
            <a href="http://google-map-react.github.io/google-map-react/map/simple_hover">Online Example</a> (<a href="https://github.com/google-map-react/old-examples/blob/master/web/flux/components/examples/x_simple_hover/simple_hover_map_page.jsx">source</a>) <br />
            <h2><code>react-places-autocomplete</code></h2>
            <Link to="/example/3">Example3</Link> <br />
          </div>
        )} />
        <Route path="/example/1" component={Example1} />
        <Route path="/example/2" component={Example2} />
        <Route path="/example/3" component={Example3} />
      </div>
    );
  }
}

export default App;
