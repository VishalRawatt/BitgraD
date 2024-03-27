import { useState } from 'react'
import QuoraHeader from './Header'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'
import './css/Quora.css'
import LoadingBar from 'react-top-loading-bar'

function Quora() {
  const [progress, setProgress] = useState(0) ;
  return (
    <div>
    <LoadingBar
        height={3}
        color='#fff'
        progress={progress}/>
    <div className='Quora'>
      <QuoraHeader/>
      <div className='QContents'>
        <div className='QContent'>
          <Sidebar/>
          <Feed setProgress={setProgress}/>
          <Widget/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Quora
