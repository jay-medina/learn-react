import React from 'react';
import Popular from './popular';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import Battle from './battle';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/battle" component={Battle} />
            <Route path="/popular" component={Popular} />
            <Route render={ function () {
              return <p> Not Found </p>
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
