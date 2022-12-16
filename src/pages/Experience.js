import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element--education" date="2009-2012" 
        iconStyle={{background:"#3e497a", color:"#fff"}} icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>IOSHS II, Alagbado, Lagos State, Nigeria.</h3>
          <p>O Level (WASSCE)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" date="2014-2016" 
        iconStyle={{background:"#3e497a", color:"#fff"}} icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>Osun State Polytechnic Iree,Osun State Nigeria.</h3>
          <p>ND Electrical/Electronics Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" date="2019-2021" 
        iconStyle={{background:"#3e497a", color:"#fff"}} icon={<SchoolIcon />}>
          <h3 className='vertical-timeline-element-title'>Osun State Polytechnic Iree,Osun State Nigeria.</h3>
          <p>HND Electrical/Electronics Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work" date="2022" 
        iconStyle={{background:"#e9d35b", color:"#fff"}} icon={<WorkIcon />}>
          <h3 className='vertical-timeline-element-title'>FreeCodeCamp</h3>
          <p>Responsive Web Design Certification</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience