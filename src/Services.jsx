import React from 'react'
import { services } from './data'
import Service from './Service'

const Services = () => {
  return (
    <section id="services">
      <center>
        <h1 className="text-center text-3xl">My Services</h1>
      </center>
      <div className="services-list" >
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gridGap: "40px",
          marginTop: "50px",
          padding: "20px"
        }}>
          {services.map((service, index) => (
            <Service key={index} service={service} />
          ))}
        </div>
      </div>
    </section >
  )
}

export default Services