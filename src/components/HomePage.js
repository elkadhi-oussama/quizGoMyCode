import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='HomePage'>
        <img src="./images/download.png" alt="" />
        <h2> Welcome to Go My Code Quiz </h2>
        <p> This Quiz for test your skills to learn the second level in web development </p>
        <span>You have only 20 minutes to answer</span>
        <span> Best Of Luck</span>
        <Link to="/quiz"> <button>Start</button></Link>
    </div>
  )
}

export default HomePage