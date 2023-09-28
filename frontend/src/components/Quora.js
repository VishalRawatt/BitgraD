import React from 'react'
import QuoraHeader from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'
import './css/Quora.css'

function Quora() {
  return (
    <div className='Quora'>
      <QuoraHeader/>
      <div className='QContents'>
        <div className='QContent'>
          <Sidebar/>
          <Feed/>
          <Widget/>
        </div>
      </div>
    </div>
  )
}

export default Quora
