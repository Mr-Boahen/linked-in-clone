import { Avatar } from '@mui/material';
import React from 'react';
import { selectUser } from '../features/userSlice';
import './Sidebar.css';
import { useSelector } from 'react-redux/es/exports';

function Sidebar() {
  const user=useSelector(selectUser);
    const recentItem=(topic)=>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    console.log(user)
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://wallpaperaccess.com/full/1713248.jpg" alt="" />
        <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,323</p>

                 
            </div>
            
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2,345</p>
            </div>
          
        </div>
        
      
      <div className="sidebar__button">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
      </div>
    </div>
  )
}

export default Sidebar
