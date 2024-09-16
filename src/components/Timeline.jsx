import React from 'react';
import TimelineElements from './TimelineElements';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const Timeline = () => {
  return (
    <div>
      <h1 className='timelinetitle'>Roadmap</h1>
      <VerticalTimeline>
        {
            TimelineElements.map(element=>{
                let showButton =element.buttonText !==undefined && element.buttonText!==null &&
                element.buttonText!=='';
                return(
                    <VerticalTimelineElement 
                    key={element.key} 
                    date={element.date}
                    dateClassName='date'
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<img src={element.icon} alt={element.title} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />}
                    >
                        <h3 className='vertical-timeline-element-title'>{element.title}</h3>
                        <p id='description'>{element.description}</p>
                        {showButton && <a href='/' className='buttontimeline'>{element.buttonText}</a>}

                    </VerticalTimelineElement>
                )
            })
        }
      </VerticalTimeline>
    </div>
  )
}

export default Timeline;
