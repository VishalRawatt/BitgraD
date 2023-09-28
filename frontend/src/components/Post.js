import React, {useState} from 'react'
import './css/Post.css';
import { Avatar } from '@mui/material';
import { Close } from '@mui/icons-material';
import Modal from 'react-responsive-modal';
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlined, MoreHorizOutlined, RepeatOneOutlined, ShareOutlined } from '@mui/icons-material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css' ;
import ReactTimeAgo from 'react-time-ago'
import axios from 'axios';
import ReactHtmlParser from 'html-react-parser';
import { selectUser } from '../feature/user';
import { useSelector } from 'react-redux';

export function LastSeen({date}) {
  const newDate = Date.parse(date);
  return (
    <div>
      <ReactTimeAgo date={newDate} locale="en-US" timeStyle="round"/>
    </div>
  )
}

function Post({post}) {
  const[isModalOpen, setisModalOpen]=useState(false)
  const[answer, setAnswer] = useState("")

  const handleQuill = (value) =>{
    setAnswer(value)
  }

  const user = useSelector(selectUser)
  
  const handleSubmit = async() =>{
    const body = {
      answers: answer,
      questionId: post?._id,
      user: user
    }
    const config = {
      headers:{
        "Content-Type": "application/json"
      }
    }
    if(post?._id && answer !== ""){
      await axios.post('./api/answers', body,config).then((res)=>{
        console.log(res.data)
        alert("Answer added successfully")
        setisModalOpen(false)
        window.location.href = "/"
      }).catch((err)=>{
        console.log(err);
      })
    }
  }

  const close = (<Close/>)
  return (
    <div className='post'>
      <div className='post-info'>
        <Avatar src={post?.user?.photo}/>
        <h4>{post?.user?.userName}</h4>
        <small><LastSeen date={post?.createdAt}/></small>
      </div>
      <div className='post-body'>
        <p>
          {post?.questionName}
        </p>
        <button onClick={() =>{ 
          setisModalOpen(true)
          console.log(post?._id)
          }} className='post-btn'>Answer</button>
        <Modal
          open={isModalOpen}
          closeIcon={close}
          onClose={() => { setisModalOpen(false) }}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          style={{ overlay: { height: "auto" } }}>
        <div className='modal-question'>
          <h1>{post?.questionName}</h1>
          <p>asked by <span className='name'> {post?.user?.userName} </span> on <span className='name'> {new Date(post?.createdAt).toLocaleString()} </span></p>
        </div>
        <div className='modal-answer'>
          <ReactQuill value={answer} onChange={handleQuill} placeholder='Enter your answer'/>
        </div>
        <div className='modal-button'>
        <button className='cancel' onClick={()=>setisModalOpen(false)}>Cancel</button>
        <button onClick={handleSubmit} type='submit' className='add'>Add Answer</button>
        </div>
        </Modal>
      </div>
      {
        post.questionUrl !=="" && <img src={post?.questionUrl} alt='This is question url '/>
      }
      <div className='post-footer'>
        <div className='post-footerAction'>
          <ArrowUpwardOutlined />
          <ArrowDownwardOutlined />
        </div>
        <RepeatOneOutlined />
        <ChatBubbleOutlined />
        <div className='post-footerLeft'>
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
      <p style={{ color: "rgba(0,0,0,0.5", fontSize: "12px", fontWeight1: "bold", margin: "10px 0" }}>{post?.allAnswers.length}Answer</p>
      <div className='post_answer' style={{ margin: "5px 0px 0px 0px", padding: "5px 0px 0px 20px", borderTop: "1px solid lightgrey" }}>
        <div className='post-answercontainer' style={{ display: "flex", flexDirection: "column", width: "100%", padding: "10px 5px", borderTop: "1px solid lightgrey" }}>
          {
            post?.allAnswers?.map((a)=>(<>
          <div className='post-answered' style={{ display: "flex", alignItems: "center", marginBottom: "10px", fontSize: "12px", fontWeight: "600", color: "#888" }}>
            <Avatar src={post?.user?.userName}/>
            <div className='post-info' style={{ margin: "0px 10px" }}>
              <p>{post?.user?.userName}</p>
              <span><LastSeen date = {a?.createdAt.toLocaleString()}/></span>
            </div>
          </div>
          <div className='post-answer'>{ReactHtmlParser(a?.answers)}</div>
          </>))
          }
        </div>
      </div>
    </div>
  )
}

export default Post
