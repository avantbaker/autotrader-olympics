import React from 'react';
import Image from '../commons/Image.js';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'; 

const EventListing = ({ event }) => {
  return (
      <div className="button d-flex flex-row margin-bottom-3">
        <Image />
        <div className="d-flex flex-grow-1 justify-content-between padding-2">
          <div className="d-flex flex-column justify-content-between left text-left">
            <div>{ event.name }</div>
            <div>Location: {event.location}</div>
            <div>Starts: {event.time}</div>
          </div>
          <div className="d-flex flex-column justify-content-center right text-right">
            <Link to={`/events/${event.id}`}>
              <Button className="mb-0">
                Visit Event
              </Button>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default EventListing;
