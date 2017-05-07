import React from 'react';
import Popular from './popular';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import Battle from './battle';
import Results from './results';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/battle/results" component={Results} />
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
