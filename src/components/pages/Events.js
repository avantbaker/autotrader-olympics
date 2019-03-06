import React, { Component, Fragment } from 'react';
import Listing from '../molecules/Listing';
import Header from '../commons/Header';
import ProfileIcon from '../commons/ProfileIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

class Events extends Component {
  render() {
    const plusIcon = <FontAwesomeIcon className="margin-left-1" size="2x" icon={faPlusSquare} />;

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
                  topRightContent={plusIcon}
                  bottomLeftContent={"Event Name"}
                  bottomRightContent={"Spots"}
                />
                <Listing 
                  topLeftContent={"Place"}
                  topRightContent={plusIcon}
                  bottomLeftContent={"Event Name"}
                  bottomRightContent={"Spots"}
                />
                <Listing 
                  topLeftContent={"Place"}
                  topRightContent={plusIcon}
                  bottomLeftContent={"Event Name"}
                  bottomRightContent={"Spots"}
                />
                <Listing 
                  topLeftContent={"Place"}
                  topRightContent={plusIcon}
                  bottomLeftContent={"Event Name"}
                  bottomRightContent={"Spots"}
                />
                <Listing 
                  topLeftContent={"Place"}
                  topRightContent={plusIcon}
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
