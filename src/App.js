import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { login, logout,selectUser } from './features/userSlice';
import Login from './components/Login';
import { auth } from './data/firebase';
import Widget from './components/Widgets';
function App() {
  
 const user =  useSelector(selectUser);
 const dispatch=useDispatch();
 
 useEffect(()=>{
  auth.onAuthStateChanged((userAuth)=>{
    if(userAuth){
      dispatch(
        login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        })
      )
    }else{
      dispatch(logout());
    }
  })
 },[])


  return (
    <div className="app">
      {/* HEADER */}
      

     {!user?(
          <><Header showAvatar={false}/><Login /></>
          ):(
            <><Header showAvatar={true}/>
            <div className="app__body">
            {/* SIDEBAR */}

            <Sidebar />
            {/* FEED */}
            <Feed />
            {/* Widgets */}
            <Widget/>
          </div></>
     )}
    </div>
  )
}

export default App;
