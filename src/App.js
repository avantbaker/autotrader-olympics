import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

import Login from './components/pages/Login';
import Team from './components/pages/Team';
import Events from './components/pages/Events';
import Event from './components/pages/Event';
import Teams from './components/pages/Teams';
import EditForm from './components/pages/EditForm';

import teamsDuck from "./redux/teamsDuck";
import eventsDuck from "./redux/eventsDuck";
import mapActions from "./redux/mapActions";


class App extends Component {

  componentDidMount() {
      this.props.actions.loadEvents();
      this.props.actions.loadTeams();
  }

  render() {
    return (
      <Router>
        <div id="app-container">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/team/create" component={Team} />
            <Route exact path="/team/update/:teamId" component={Team} />
            <Route exact path="/events" component={Events} />
            <Route path="/events/:eventId" component={Event} />
            <Route path="/teams" component={Teams} />
            <Route path="/edit" component={EditForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default connect(
    null,
    mapActions({
        loadTeams: teamsDuck.creators.loadTeams,
        loadEvents: eventsDuck.creators.loadEvents
    })
)(App);
