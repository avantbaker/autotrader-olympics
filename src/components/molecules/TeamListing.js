import React from 'react';
import Image from '../commons/Image.js';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'; 

const TeamListing = ({ team }) => {
  const mailto = `mailto: ${team.email}`;
  return (
      <div className="button d-flex flex-row margin-bottom-3">
        <Image />
        <div className="d-flex flex-grow-1 justify-content-between padding-2">
          <div className="d-flex flex-column justify-content-between left text-left">
            <div>{ team.name }</div>
            <div>Contact: <a href={mailto}>{team.contact}</a></div>
          </div>
          <div className="d-flex flex-column justify-content-center right text-right">
            <Link to={`/team/update/${team.id}`}>
              <Button className="mb-0">
                Visit team page
              </Button>
            </Link>
          </div>
        </div>
      </div>
  );
}

export default TeamListing;
