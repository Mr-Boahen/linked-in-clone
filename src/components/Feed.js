import React,{useEffect, useState}from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db, auth } from './../data/firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux/es/exports';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user=useSelector(selectUser);
    const [posts,setPosts]=useState([]);
    const [input, setInput]=useState("");


    useEffect(()=>{
      console.log();
      db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>(
        setPosts(snapshot.docs.map(doc=>(
          {
            id:doc.id,
            data:doc.data(),
          }
        )))
      ))
    },[])
    const sendPost=(e)=>{
      e.preventDefault();
      db.collection('posts').add(
        {
          name: user.displayName,
          description: user.email,
          message:input,
         
          timestamp: firebase.firestore.FieldValue.serverTimestamp(), 
        })
      setInput("");
    };

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon/>
              <form action="">
                  <input value={input} onChange={e =>setInput(e.target.value)} type="text" />
                  <button onClick={sendPost} type='submit'>Send</button>
              </form>
            </div>
            <div className="feed__inputOptions">
              <InputOption title='photo' Icon={ImageIcon} color='#70B5F9'/>
              <InputOption title='Video' Icon={SubscriptionsIcon} color='#E7A33E'/>
              <InputOption title='Event' Icon={EventNoteIcon} color='#C0CBCD'/>
              <InputOption title='Write article' Icon={CalendarViewDayIcon} color='#7FC15E'/>
            </div>

        </div>
       {/* POSTS */}
      <FlipMove>
      {posts.map(({id,data:{name, description,message,photoUrl}})=>(
        <span key={id}>

          <Post
           
            name={user.displayName}
            description={description}
            message={message}
            photoUrl={photoUrl}
           
          />
        </span> ))
}
      
       
      </FlipMove>
       
         
      
       
    </div>
  )
}

export default Feed
