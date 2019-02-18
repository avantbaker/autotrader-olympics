import React, { Fragment } from 'react'

const ImageBlock = (props) => {
    console.log(props, 'image');
    return (
        <Fragment>
            <img className="icon" src={props.image} alt="eventPic" />
        </Fragment>
    )
}

ImageBlock.defaultProps = {
    image: 'https://images-na.ssl-images-amazon.com/images/I/51yGjPAtsoL._SY355_.png'
}

export default ImageBlock;