import React from 'react'
import './listing.css'
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import img1 from '../../../Assests/image5.png'
import img2 from '../../../Assests/image2.png'
import img3 from '../../../Assests/image3.png'
import img4 from '../../../Assests/image4.png' 
import img5 from '../../../Assests/user1.png' 
import img6 from '../../../Assests/user3.png' 
import img7 from '../../../Assests/user4.png' 
import img8 from '../../../Assests/user5.png' 


const Listing = () => {
  return (
    <div className='listingSection'>
      <div className='heading flex'>
        <h1>My Crops</h1>
        <Link to='/all-crops' className='btn flex'>
          See All <BsArrowRightShort className='icon' />
        </Link>
      </div>

      <div className='seeContainer flex'>
        <div className='singleItem'>
          <Link to='https://www.researchgate.net/figure/List-of-pesticides-recommended-on-use-for-sugarcane-pest-management_tbl4_285026017'>
            <AiFillHeart className='icon' />
            <img src={img1} alt='SugarCane Plant' />
            <h3>SugarCane Plant</h3>
          </Link>
        </div>

        <div className='singleItem'>
          <Link to='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9681499/#:~:text=Insecticides%20are%20mainly%20used%20in,humans%20due%20to%20their%20toxicity.'>
            <AiFillHeart className='icon' />
            <img src={img2} alt='Coffee Plant' />
            <h3>Coffee Plant</h3>
          </Link>
        </div>

        <div className='singleItem'>
          <Link to='/crop-details/paddyhttps://fertiliserindia.com/insecticide-for-paddy-crop/'>
            <AiFillHeart className='icon' />
            <img src={img3} alt='Paddy' />
            <h3>Paddy</h3>
          </Link>
        </div>

        <div className='singleItem'>
          <Link to='https://www.dhanuka.com/crops/tomato'>
            <AiFillHeart className='icon' />
            <img src={img4} alt='Tomato Plant' />
            <h3>Tomato Plant</h3>
          </Link>
        </div>
      </div>


      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Recent Buyer</h3>
            <button className='btn flex'>
          See All <BsArrowRightShort className='icon'/>
        </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img5} alt="user" />
              <img src={img6} alt="user" />
              <img src={img7} alt="user" />
              <img src={img8} alt="user" />
            </div>
            <div className="cardText">
              <span>
                100 tones sold<br />
                <small>10 sellers <br /><span className='date'> 7 days </span></small>
              </span>
            </div>
          </div>
        </div>

        <div className="totalSellers">
          <div className="heading flex">
            <h3>Total Buyers</h3>
            <button className='btn flex'>
          See All <BsArrowRightShort className='icon'/>
        </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={img6} alt="user" />
              <img src={img7} alt="user" />
              <img src={img8} alt="user" />
              <img src={img5} alt="user" />
            </div>
            <div className="cardText">
              <span>
                600 tones sold<br />
                <small>20 sellers <br /><span className='date'>Till now </span></small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing