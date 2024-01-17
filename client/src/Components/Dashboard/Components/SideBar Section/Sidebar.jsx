import React from 'react'
import './sidebar.css'
import logo from '../../Assests/logo.png'
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";
import { AiOutlinePieChart, AiOutlineSwapLeft } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className='sideBar grid'>
          <div className='logoDiv flex'>
              <img src={logo} alt="Image Name" />
              <h2>Agro Gain</h2>
          </div>
          <div className='menuDiv'>
              <h3 className='divTitle'>
                  QUICK MENU
              </h3>
              <ul className='menuLists grid'>
                  <li className='listItem'>
                      <a href="#" className='menuLink flex'>
                          <IoMdSpeedometer className='icon' />
                          <span className="smallText">
                              Dash Board
                          </span>
                      </a>
                  </li>

                  <li className='listItem'>
                      <a href="#" className='menuLink flex' >
                        <MdDeliveryDining className='icon' />
                      <span className="smallText">
                          My Orders
                      </span>
                  </a>
              </li>

              <li className='listItem'>
                  <a href="#" className='menuLink flex'>
                      <MdOutlineExplore className='icon' />
                      <span className="smallText">
                          Explore
                      </span>
                  </a>
              </li>

              <li className='listItem'>
                  <a href="#" className='menuLink flex'>
                      <BsTrophy className='icon' />
                      <span className="smallText">
                          Products
                      </span>
                  </a>
              </li>
          </ul>
      </div><div className='settingsDiv'>
              <h3 className='divTitle'>
                  SETTINGS
              </h3>
              <ul className='menuLists grid'>
                  <li className='listItem'>
                      <a href="#" className='menuLink flex'>
                          <AiOutlinePieChart className='icon' />
                          <span className="smallText">
                              Charts
                          </span>
                      </a>
                  </li>

                  <li className='listItem'>
                      <a href="#" className='menuLink flex'>
                          <BiTrendingUp className='icon' />
                          <span className="smallText">
                              Trends
                          </span>
                      </a>
                  </li>

                  <li className='listItem'>
                      <a href="#" className='menuLink flex'>
                          <MdOutlinePermContactCalendar className='icon' />
                          <span className="smallText">
                              Conatact
                          </span>
                      </a>
                  </li>

                  <li className='listItem'>
                      <a href="#" className='menuLink flex'>
                          <BsCreditCard2Front className='icon' />
                          <span className="smallText">
                              Billings
                          </span>
                      </a>
                  </li>
              </ul>

              <button type='logout' className='btn1 flex'>
                
                <a href="/">Logout</a>
                <AiOutlineSwapLeft className='icon'/>
            </button>
          </div><div className="sideBarCard">
              <BsQuestionCircle className="icon" />
              <div className='cardContent'>
                  <div className='circle1'></div>
                  <div className="circle2"></div>

                  <h3>Help Center</h3>
                  <p>HAving Trouble In Agro Gain, Please contact us for more questions</p>
                  <button className='btn'>Go To Help Center</button>
              </div>
          </div>
    </div>

  )
}

export default Sidebar