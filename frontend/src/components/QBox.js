import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../feature/user'
import './css/Qbox.css'

function QBox() {
  const user  = useSelector(selectUser) ;
  return (
    <div className='Qbox'>
      <div className="Qbox-info">
        <Avatar src={user?.photo}/>
      </div>
      <div className="Qbox-Q">
        <h5>What is your Question or link?</h5>
      </div>
    </div>
  )
}

export default QBox
