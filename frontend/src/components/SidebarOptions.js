import React from 'react'
import { Add, CalculateOutlined, ComputerOutlined, EngineeringOutlined, Web, PhoneAndroidSharp } from '@mui/icons-material'
import './css/sidebaroptions.css'

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
      <img src="https://e7.pngegg.com/pngimages/724/306/png-clipart-c-logo-c-programming-language-icon-letter-c-blue-logo.png" style={{marginLeft:"15px"}} alt="C"/>
        <p>C</p>
      </div>
      <div className="sidebarOption">
      <img src="https://img1.pnghut.com/8/18/6/bxvE1KeDqf/logo-symbol-computer-programming-language.jpg" style={{marginLeft:"5px"}} alt="C++"/>
        <p>C++</p>
      </div>
      <div className="sidebarOption">
        <img src="https://img1.pnghut.com/7/17/15/17h7exSTTt/symbol-cpython-logo-python-yellow.jpg" style={{marginLeft:"10px"}} alt="python"/>
        <p>Python</p>
      </div>
      <div className="sidebarOption">
        <img src="https://download.logo.wine/logo/Java_(programming_language)/Java_(programming_language)-Logo.wine.png" style={{marginLeft:"5px"}} alt="java"/>
        <p>Java</p>
      </div>
      <div className="sidebarOption">
        <EngineeringOutlined/>
        <p>Engineering</p>
      </div>

      <div className="sidebarOption">
        <CalculateOutlined/>
        <p>Algorithms</p>
      </div>

      <div className="sidebarOption">
        <ComputerOutlined/>
        <p>Competitive Coding</p>
      </div>

      <div className="sidebarOption">
        <Web/>
        <p>Web Development</p>
      </div>

      <div className="sidebarOption">
        <PhoneAndroidSharp/>
        <p>App Development</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  )
}

export default SidebarOptions
