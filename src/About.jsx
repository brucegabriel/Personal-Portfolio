import React from 'react'
import myImage from './assets/myImage.jpg'

const About = () => {

  const divStyles = {
    flex: "1",
    background: "transparent",
    backdropFilter: " blur(8px)",
    padding: "20px 40px",
    borderRadius: "15px",
    borderRight:"10px solid red"
  }


  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img alt="picture" src={myImage} />
          </div>
          <div className="" style={divStyles}>
            <h1 className="sub-title">About Me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eligendi minus possimus illo, mollitia esse laboriosam. Nulla veritatis animi ab doloribus incidunt minima aut rerum sit numquam cumque, eius exercitationem?</p>
            <div className="tab-titles">
              <p className="tab-links active-link" onclick="openTab('skills')">Skills</p>
              <p className="tab-links" onclick="openTab('experience')">Experience</p>
              <p className="tab-links" onclick="openTab('education')">Education</p>
            </div>
            <div className="tab-contents active-tab" id="skills">
              <ul>
                <li><span>Web Development</span><br />Front-End Web Development</li>
              </ul>
            </div>
            <div className="tab-contents" id="experience">
              <ul>
                <li></li>
              </ul>
            </div>
            <div className="tab-contents" id="education">
              <ul>
                <li><span>2024-Current</span><br />Multimedia University Of Kenya</li>
                <li><span></span></li>
                <li><span></span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About