import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'

const Service = ({service}) => {

    const serviceStyle = {
        textDecoration:"none",
        color:"black",
        display:"flex",
        gap:"3px",
        alignItems:"center"
    }

    return (
        <div id="card-service" className=''>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <a href="#" style={serviceStyle}>Learn more <MdKeyboardArrowRight/></a>
        </div>
    )
}

export default Service
