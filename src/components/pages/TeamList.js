import React, { Component, Fragment } from 'react';
import Header from '../commons/Header';
import Listing from '../molecules/Listing';
import ProfileIcon from '../commons/ProfileIcon.js'

class TeamList extends Component {
    render() {
        return (
            <Fragment>
                <Header className="page">
                    <ProfileIcon />
                </Header>
                <div className="container page-container event-details">
                    <div className="row">
                        <div className="col-sm-12">
                            <div>
                                <h1>Teams</h1>
                            </div>
                            <hr />
                            <div className="text-center">
                                <Listing
                                    topLeftContent={"Roster"}
                                    bottomLeftContent={"Team Name"}
                                />
                                <Listing
                                    topLeftContent={"Roster"}
                                    bottomLeftContent={"Team Name"}
                                />
                                <Listing
                                    topLeftContent={"Roster"}
                                    bottomLeftContent={"Team Name"}
                                />
                                <Listing
                                    topLeftContent={"Roster"}
                                    bottomLeftContent={"Team Name"}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default TeamList;