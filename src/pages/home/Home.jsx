import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Sidebar from '../../components/sidebar/Sidebar'
import Posts from '../../components/posts/Posts'
import './home.css'

export default function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        < Posts />
        < Sidebar />
      </div>
    </>
  )
}
