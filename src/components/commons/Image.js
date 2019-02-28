import React, { Fragment } from 'react'

const Image = (props) => {
    console.log(props, 'image');
    return (
        <Fragment>
            <img className="icon" src={props.image} alt="eventPic" />
        </Fragment>
    )
}

Image.defaultProps = {
    image: 'https://images-na.ssl-images-amazon.com/images/I/51yGjPAtsoL._SY355_.png'
}

export default Image;