import React from 'react'
import TestImage from '../Images/TestImage.jpeg'

const ImageComponent = () => {
    return (
        <div className="image-position">
            <img src={require("../Images/TestImage.jpeg")} className="image-styling"/>
        </div>
    )
}

export default ImageComponent
