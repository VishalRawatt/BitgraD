import React, { useEffect, useState } from 'react'
import QBox from './QBox'
import './css/Feed.css'
import Post from './Post'
import axios from 'axios'
import Loaderr from './Loaderr'

function Feed(props) {
  const[posts, setPosts] = useState([]) ;
  const [loading, setLoading] = useState(true) ;
  
  useEffect( ()=>{
    <Loaderr/>
    axios.get("https://bitgrad.onrender.com/questions").then((res)=>{
      setLoading(true);
      props.setProgress(30) ;
      setPosts(res.data);
      props.setProgress(100) ;
      setLoading(false);
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div className='feed'>
       <QBox/>
       {
        loading && <Loaderr/>
       }
       {
        !loading && posts?.map((post, index)=>(<Post key={index} post={post}/>))
       }
    </div>
  )
}

export default Feed
