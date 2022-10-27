import React, { useState } from 'react';
import { auth } from '../data/firebase';
import './Login.css';
import {login} from '../features/userSlice';
import {useDispatch} from "react-redux";

function Login() {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [name, setName]=useState("");
    const [profilePic, setProfilePic]=useState("");
    const dispatch=useDispatch();
    
 
    const loginToApp=(e)=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(userAuth=>{
                dispatch(
                    login({
                        email:userAuth.user.email,
                        uid:userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        photoUrl: userAuth.user.photoURL,
                    })
                )
            }
        ).catch((error)=>alert(error))

    }

    const register=()=>{
        if(!name){
            return alert('Please Enter a full name')
        }
       auth.createUserWithEmailAndPassword(email,password)
       .then((userAuth)=>{
        userAuth.user
        .updateProfile({
            displayName: name,
            photoURL: profilePic,
        })
        .then(()=>{
            dispatch(
                login({
                email:userAuth.user.email,
                uid: userAuth.user.uid,
                displayName:name,
                photoUrl: profilePic,
            }))
        })
       })
       .catch((error)=> alert(error))

        
    };
  return (
    <div className="login">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/437px-LinkedIn_Logo.svg.png?20170711102837" alt="LinkedIn-logo" />
      <form action="">
        
        <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder='Full name(required if registering)' />
        <input value={profilePic} onChange={e=>setProfilePic(e.target.value)} type="text" placeholder='Profile pic URL (optional)' />
        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder='Email'  />
        <input value={password} onChange={e=> setPassword(e.target.value)} type="password" placeholder='Password'/>


        <button type='submit' onClick={loginToApp} >Sign In</button>


    
      
      </form>
      <p> Not a member?{' '} <span className='login__register' onClick={register} >Register Now</span>
       </p>
      
      
    </div>
  )
}

export default Login
