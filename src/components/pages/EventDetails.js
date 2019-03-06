import React, { Component, Fragment } from 'react';
import Header from '../commons/Header';
import Listing from '../molecules/Listing';
import ProfileIcon from '../commons/ProfileIcon.js'
import Image from '../commons/Image.js'


class EventDetails extends Component {
  render() {
    return (
      <Fragment>
        <Header className="page">
          <h1 className="title">Event Details</h1>
          <ProfileIcon />
        </Header>
        <div className="container page-container event-details">
          <div className="row">
            <div className="col-sm-12">
                <div>
                    <div className="margin-bottom-2 d-flex">
                      <div className="d-flex flex-column">
                          <div>Place:</div>
                          <div className="font-2 color-grey">Some Place</div>
                      </div>
                    </div>
                    <div className="margin-bottom-2 d-flex">
                      <div className="d-flex flex-column">
                        <div>Time: </div>
                        <div className="font-2 color-grey">Some Time</div>
                      </div>
                    </div>
                </div>
                <hr />
                <div className="text-center">
                    <h3 className="margin-bottom-3">Leaderboard</h3>
                    <Listing 
                        topLeftContent={"Place"}
                        topRightContent={"Join"}
                        bottomLeftContent={"Event Name"}
                        bottomRightContent={"Spots"}
                    />
                </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default EventDetails;
