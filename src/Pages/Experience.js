import React from 'react'
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { IoIosSchool } from "react-icons/io";
import "../styles/Experience.css"

function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#3e497a'>
                

                <VerticalTimelineElement 
                className='vertical-timeline-element--education' 
                date="2020-2022"
                iconStyle={{background:"#3e497a",color: '#fff'}}
                icon={<IoIosSchool/>}>
                <h3 className="vertical-timeline-element-title">
                    HKUSPACE
                </h3>
                <br></br>
                <span>Graduated in Associate of Engineering(Computer Science)</span>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className='vertical-timeline-element--education' 
                date="2022"
                iconStyle={{background:"#3e497a",color: '#fff'}}
                icon={<IoIosSchool/>}>
                <h3 className="vertical-timeline-element-title">
                    IELTS
                </h3>
                <br></br>
                <span>Overall Grade 6.5</span>
                </VerticalTimelineElement>

                
                <VerticalTimelineElement 
                className='vertical-timeline-element--education' 
                date="2022 - Present"
                iconStyle={{background:"#3e497a",color: '#fff'}}
                icon={<IoIosSchool/>}>
                <h3 className="vertical-timeline-element-title">
                    The Chinese University of Hong Kong
                    <br></br>
                    <span>Bachelor of Engineering in Information Engineering</span>
                </h3>
    
                </VerticalTimelineElement>
                
            </VerticalTimeline>
        </div>
    )
}

export default Experience
