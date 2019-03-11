import React from 'react';
import Image from '../commons/Image.js'

const Listing = ({ 
  topLeftContent,
  topRightContent,
  bottomLeftContent,
  bottomRightContent,
  image
}) => {
  return (
      <div className="button d-flex flex-row margin-bottom-3">
        <Image image={image} />
        <div className="d-flex flex-grow-1 justify-content-between padding-2">
          <div className="d-flex flex-column justify-content-between left text-left">
            <div>{ topLeftContent }</div>
            <div>{ bottomLeftContent }</div>
          </div>
          <div className="d-flex flex-column justify-content-between right text-right">
            <div>{ topRightContent }</div>
            <div>{ bottomRightContent }</div>
          </div>
        </div>
      </div>
  );
}

export default Listing;
