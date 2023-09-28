import React from 'react'
import './css/widgetcontent.css'
import explore from '../photos/explore.png'

function WidgetContents() {
  return (
    <div className='widget-contents'>
      <div className='widget-content'>
        <img src={`${explore}`} alt="It's explore"/>
        <div className='widget-title'>
            <h5>
            Explore Similar Doubts
            </h5>
            <p>
            You might find your answer in previously asked questions. Browse through the archives to see if someone has asked something similar.
            </p>
        </div>
      </div>
    </div>
  )
}

export default WidgetContents
