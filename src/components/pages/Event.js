import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import _get from "lodash.get";

import Header from "../commons/Header";
// import ProfileIcon from "../commons/ProfileIcon.js";
import teamsDuck from "../../redux/teamsDuck";
import eventsDuck from "../../redux/eventsDuck";
import mapActions from "../../redux/mapActions";

class Event extends Component {

    componentDidMount() {
        this.props.actions.loadEvents();
        this.props.actions.loadTeams();
    }

    render() {
        const { event = false } = this.props;

        const participants = Object.keys(event.participants).map((team) => (
            <div className="mb-3">
                <h4>{team}</h4>
                {event.participants[team].map(participant => <div>{participant}</div> )}
            </div>
        ));

        return (
            <Fragment>
                <Header className="page">
                    <h1 className="title">{event.name}</h1>
                </Header>
                <div className="container page-container event-details">
                    <div className="row">
                        <div className="col-sm-12">
                            {/* Start Details section*/}
                            <div className="d-flex justify-content-between">
                                {/* Details Left section*/}
                                <div>
                                    <div className="margin-bottom-2">
                                        <div>Place:</div>
                                        <div>{event.location}</div>
                                    </div>
                                    <div>
                                        <div>Time: </div>
                                        <div>{event.time}</div>
                                    </div>
                                </div>
                                {/* Details Right section*/}
                                <div className="d-flex flex-column align-items-center">
                                    <div
                                        className="margin-bottom-2"
                                        style={{
                                            height: "50px",
                                            width: "60px",
                                            backgroundColor: "gray"
                                        }}
                                    />
                                    <div
                                        className="margin-bottom-2"
                                        style={{
                                            height: "50px",
                                            width: "50px",
                                            backgroundColor: "black"
                                        }}
                                    />
                                </div>
                            </div>
                            {/* End Details section*/}
                            <hr />
                            <div className="text-center">
                                <h3 className="margin-bottom-3 ">Participants</h3>
                                {participants}
                            </div>
                            <hr />
                            <div className="text-center">
                                <h3 className="margin-bottom-3">Leaderboard</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state, props) => {
    const eventId = _get(props, "match.params.eventId");
    const events = eventsDuck.selectors.getEvents(state);
    console.log("events", events);

    return {
        event: _get(events, eventId, {}),
        isEditable: !!eventId,
    };
};

export default connect(
    mapStateToProps,
    mapActions({
        loadTeams: teamsDuck.creators.loadTeams,
        loadEvents: eventsDuck.creators.loadEvents
    })
)(Event);
