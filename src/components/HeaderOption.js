import React from 'react'
import './HeaderOption.css' 

import { Avatar } from '@mui/material';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux/es/exports';


function HeaderOption({avatar,title,Icon,onClick}) {
  const user=useSelector(selectUser)
  
  return (
    <div onClick={onClick} className='headerOption'>
      {Icon&& <Icon className="headerOption__icon"/>}
      {avatar&& 
      <Avatar className='headerOption__icon' >{user.email[0]}</Avatar>}
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
