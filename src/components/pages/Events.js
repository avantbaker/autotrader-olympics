import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

import Header from '../commons/Header';
import EventListing from '../molecules/EventListing';
import eventsDuck from '../../redux/eventsDuck';
import mapActions from '../../redux/mapActions';

class EventList extends Component {

    componentDidMount() {
        this.props.actions.loadEvents();
    }

    render() {
        return (
            <Fragment>
                <Header className="page">
                    <h1 className="title">Events</h1>
                </Header>
                <div className="container page-container event-details">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="text-center">
                                {Object.keys(this.props.events).map(key => <EventListing key={this.props.events[key].id} event={this.props.events[key]} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        events: eventsDuck.selectors.getEvents(state),
    };
};

export default connect(mapStateToProps, mapActions({
    createEvent: eventsDuck.creators.createEvent,
    loadEvents: eventsDuck.creators.loadEvents,
}))(EventList);