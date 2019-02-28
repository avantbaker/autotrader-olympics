import React, { Component, Fragment } from 'react';
import Listing from '../molecules/Listing';
import Header from '../commons/Header';
import ProfileIcon from '../commons/ProfileIcon'

class Events extends Component {
  render() {
    return (
      <Fragment>
        <Header className="page">
          <h1 className="title">Events</h1>
          <ProfileIcon />
        </Header>
        <div className="container page-container">
          <div className="row">
            <div className="col-sm-12">
                <Listing 
                  topLeftContent={"Place"}
                  topRightContent={"Join"}
                  bottomLeftContent={"Event Name"}
                  bottomRightContent={"Spots"}
                />
                <Listing 
                  topLeftContent={"Place"}
                  topRightContent={"Join"}
                  bottomLeftContent={"Event Name"}
                  bottomRightContent={"Spots"}
                />
                <Listing 
                  topLeftContent={"Place"}
                  topRightContent={"Join"}
                  bottomLeftContent={"Event Name"}
                  bottomRightContent={"Spots"}
                />
                <Listing 
                  topLeftContent={"Place"}
                  topRightContent={"Join"}
                  bottomLeftContent={"Event Name"}
                  bottomRightContent={"Spots"}
                />
                <Listing 
                  topLeftContent={"Place"}
                  topRightContent={"Join"}
                  bottomLeftContent={"Event Name"}
                  bottomRightContent={"Spots"}
                />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Events;
