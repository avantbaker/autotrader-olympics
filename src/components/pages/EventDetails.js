import React, { Component, Fragment } from 'react';
import Header from '../commons/Header';
import Listing from '../molecules/Listing';
import ProfileIcon from '../commons/ProfileIcon.js'


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
                {/* Start Details section*/}
                <div className="d-flex justify-content-between">
                  {/* Details Left section*/}
                  <div>
                      <div className="margin-bottom-2">
                          <div>Place:</div>
                          <div>Some Place</div>
                      </div>
                      <div>
                          <div>Time: </div>
                          <div>Some Time</div>
                      </div>
                  </div>
                  {/* Details Right section*/}
                  <div className="d-flex flex-column align-items-center">
                      <div className="margin-bottom-2" style={{ height: '50px', width: '60px', backgroundColor: 'gray' }} />
                      <div className="margin-bottom-2" style={{ height: '50px', width: '50px', backgroundColor: 'black' }} />
                  </div>
                </div>
                {/* End Details section*/}
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
