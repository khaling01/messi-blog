import React from 'react'
import "./header.css";

export default function Header() {
  return (
    <div className='header'>
         <div className="headerTitles">
        <span className="headerTitleSm">Messi The GOAT</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://www.pixelstalk.net/wp-content/uploads/2016/03/Free-download-wallpaper-HD-messi-1920x1080.jpg"
        alt="" />
        </div>
  )
}
