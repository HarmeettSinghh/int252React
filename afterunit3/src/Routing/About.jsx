import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
  const loc = useLocation();
  const {compName, locationComp , work} = loc.state || {};
  
  return (
    <div>
      <p>This is about page</p>
      <p>Company Name: {compName}</p>
      <p>Location: {locationComp}</p>
      <p>Work: {work}</p>
    </div>
  )
}

export default About
