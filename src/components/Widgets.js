import React from 'react';
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widget() {

  const newsArticle=(heading,subtitle)=>(
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon/>
      </div>
      <div className="widgets__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
    </div>

  )
  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon/>
      </div>
      {newsArticle('Mr_Kaakyire is Back with fire','Top news - 9999 readers')}
      {newsArticle('Tesla Hits new High','Tech news -300 readers')}
      {newsArticle('Bitcoin Breaks $22k','Crypto - 8000 readers')}
      {newsArticle('Is Redux too good?','Code - 1255 readers')}
      {newsArticle('Ghana becomes the richest African country','Global - 9999 readers')}
    </div>
  )
}

export default Widget
