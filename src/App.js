import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, MemoryRouter } from 'react-router-dom';
import Login from './components/pages/Login';
import Events from './components/pages/Events';
import EventDetails from './components/pages/EventDetails';
import TeamList from './components/pages/TeamList';
import EditForm from './components/pages/EditForm';

class App extends Component {
  render() {
    return (
      <MemoryRouter 
        initialEntries={["/", "/events", "/events/:event", "teams" ]}
      >
        <div id="app-container">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/events" component={Events} />
            <Route path="/events/:event" component={EventDetails} />
            <Route path="/teams" component={TeamList} />
            <Route path="/edit" component={EditForm} />
          </Switch>
        </div>
      </MemoryRouter>
    );
  }
}

export default App;
