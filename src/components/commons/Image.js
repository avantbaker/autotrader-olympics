import React from 'react'

const Image = (props) => {
    return <img className="icon" src={props.image} alt="eventPic" />
}

Image.defaultProps = {
    image: 'https://images-na.ssl-images-amazon.com/images/I/51yGjPAtsoL._SY355_.png'
}

export default Image;