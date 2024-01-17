import React from 'react'
import './Top.css'
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import img2 from '../../../Assests/user2.png'
import img1 from '../../../Assests/image1.png'
import video from '../../../Assests/video.mp4'
import { BsArrowRightShort } from "react-icons/bs";

const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Agro Gain</h1>
          <p>Hello Farmer, Welcome Back</p>
        </div>

        {/* <div className="searchBar flex">
          <input type="text" placeholder='Search DashBoard'/>
          <BiSearchAlt className="icon" />
        </div> */}

        <div className="adminDiv flex">
        <TbMessageCircle className="icon"/>
        <IoMdNotificationsOutline className="icon"/>
        <div className="adminImage">
          <img src={img2} alt="Admin Image" />
        </div>
        </div>
      </div>



      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Manage your Fields in your Finger Tips</h1>
          <p>
            The World's Largest Growing Industry today
          </p>
          
          <div className="buttons flex">
            <button className='btn'> Explore More</button>
            <button className='btn transparent'>Recent Buyers</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>
     

      <div className="leftCard flex">
        <div className="main flex">
          <div className="textDiv">
            <h1>My Stat</h1>

            <div className="flex">
              <span>
                Today <br /> <small>4 Orders</small>
              </span>

              <span>
                This Month <br /> <small>127 Orders</small>
              </span>
            </div>


            <span className="flex link">
              Go to my Orders
              <BsArrowRightShort className='icon'/>
            </span>
          </div>

          <div className="imgDiv">
            <img src={img1} alt="image name" />
          </div>
          
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Top