import React, { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { Close, ExpandMore, PeopleAltOutlined, SearchSharp } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { Button } from '@mui/material';
import './css/QHeader.css';
import think from '../photos/think.gif'
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase';
import { logout, selectUser } from '../feature/user';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function QuoraHeader() {
  const [isModalOpen, setisModalOpen] = useState(false)
  const [inputUrl, setInputUrl] = useState("")
  const [question, setQuestion] = useState("")

  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }
      const body = {
        questionName: question,
        questionUrl: inputUrl,
        user: user
      }
      await axios.post('https://bitgrad.onrender.com/questions', body, config)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          window.location.href = '/';
        }).catch((err) => {
          console.log(err);
          alert("Error in adding Question")
        })
    }
  }

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out")) {
      signOut(auth).then(() => {
        dispatch(logout());
        console.log("User logged out");
      }).catch((err) => {
        console.log("Error in logging out");
      })
    }
  }
  const close = (<Close />)
  return (
    <div className='Qheader'>
      <div className='Qheader-content'>
        <div className='Qheader-logo'>
          <img src={`${think}`} alt='logo' />
          <h5>BitgraD</h5>
        </div>
        <div className='Qheader-icons'>
          <div className='Qheader-icon'><HomeIcon /></div>
          <div className='Qheader-icon'><FeaturedPlayListIcon /></div>
          <div className='Qheader-icon'><AssignmentTurnedInIcon /></div>
          <div className='Qheader-icon'><PeopleAltIcon /></div>
          <div className='Qheader-icon'><NotificationsActiveOutlinedIcon /></div>
        </div>
        <div className='Qheader-input'>
          <SearchSharp />
          <input type='text' placeholder='Search' />
        </div>
        <div className='Qheader-rem'>
            <Avatar src={user?.photo} />
            <p style={{ margin: "10px 0px", marginRight:"15px" }}>{user?.userName}</p>
            <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{background:"grey", height:"30px", width:"30px", display:"flex", alignItems:"center", justifyContent:"center"}}>
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="/">My Profile</a></li>
                <li><a className="dropdown-item" href="/">Settings</a></li>
                <li><a className="dropdown-item" href="/"><span onClick={handleLogout} style={{ display: "flex", color: "white", marginRight: "20px" }}>Logout</span></a></li>
              </ul>
            </div>
        </div>
        <Button onClick={() => { setisModalOpen(true) }} style={{ color: "white", marginLeft: "40px" }}>Add Question</Button>
        <Modal
          open={isModalOpen}
          closeIcon={close}
          onClose={() => { setisModalOpen(false) }}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          style={{ overlay: { height: "auto" } }}>
          <div className='modal-title'>
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className='modal-info'>
            <Avatar className="avatar" src={user?.photo} />
            <div className='modal-scope'>
              <PeopleAltOutlined />
              <p>Public</p>
              <ExpandMore />
            </div>
          </div>
          <div className='modal-Field'>
            <input value={question} onChange={(e) => setQuestion(e.target.value)} type='text' placeholder='Enter your Question' style={{ margin: '5px 0', padding: "10px", border: "1px solid lightgrey" }} required />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <input type='text' value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} style={{ margin: '5px 0', border: "1px solid lightgrey", padding: "10px", outline: "2px solid #000" }} placeholder='Optional : Include link or give us text' />
              {inputUrl !== "" && <img src={inputUrl} alt='displayingimage' style={{ height: "40vh", objectFit: "contain" }} />}
            </div>
          </div>
          <div className='modal-buttons'>
            <button className='cancel' onClick={() => setisModalOpen(false)}>Cancel</button>
            <button onClick={handleSubmit} type='submit' className='add'>Add Question</button>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default QuoraHeader
