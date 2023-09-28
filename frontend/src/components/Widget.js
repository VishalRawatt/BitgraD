import React from 'react'
import WidgetContents from './WidgetContents'
import './css/widget.css'

function Widget() {
  return (
    <div className='widget'>
      <div className='widget-header'>
        <h5>Spaces to follow</h5>
      </div>
      <div className='widget-contents'>
        <WidgetContents/>
      </div>
    </div>
  )
}

export default Widget
