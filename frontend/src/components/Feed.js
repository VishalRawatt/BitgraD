import React, { useEffect, useState } from 'react'
import QBox from './QBox'
import './css/Feed.css'
import Post from './Post'
import axios from 'axios'

function Feed() {
  const[posts, setPosts] = useState([])

  useEffect( ()=>{
    axios.get('/api/questions').then((res)=>{
      console.log(res.data.reverse());
      setPosts(res.data);
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div className='feed'>
       <QBox/>
       {
        posts.map((post, index)=>(<Post key={index} post={post}/>))
       }
    </div>
  )
}

export default Feed
