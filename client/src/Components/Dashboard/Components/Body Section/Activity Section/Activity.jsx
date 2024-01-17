import React from 'react'
import './activity.css'
import {BsArrowRightShort} from 'react-icons/bs'
import user from '../../../Assests/user1.png'
import user1 from '../../../Assests/user2.png'
import user2 from '../../../Assests/user3.png'
import user3 from '../../../Assests/user4.png'
import user4 from '../../../Assests/user5.png'


const Activity = () => {
 return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Recent Transactions</h1>
        <button className='btn flex'>
          See All
          <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer grid">
      <div className="secContainer grid">
      <div className="singleCustomer flex">
        <img src={user} alt="Customer Image" />
        <div className="customerDetails">
          <span className='name'>Adams Phill</span>
          <small>Sent $13.9k</small>
        </div>
        <div className="duration">
          2 mins ago
        </div>
      </div>

      <div className="singleCustomer flex">
        <img src={user1} alt="Customer Image" />
        <div className="customerDetails">
          <span className='name'>Marta hans</span>
          <small>Sent $10.7k</small>
        </div>
        <div className="duration">
          10 mins ago
        </div>
      </div>

      <div className="singleCustomer flex">
        <img src={user2} alt="Customer Image" />
        <div className="customerDetails">
          <span className='name'>Jhon Kates</span>
          <small>Sent $20k</small>
        </div>
        <div className="duration">
          10 hr ago
        </div>
      </div>

      <div className="singleCustomer flex">
        <img src={user3} alt="Customer Image" />
        <div className="customerDetails">
          <span className='name'>Martin Horns</span>
          <small>Sent $13k</small>
        </div>
        <div className="duration">
          yesterday
        </div>
      </div>

      <div className="singleCustomer flex">
        <img src={user4} alt="Customer Image" />
        <div className="customerDetails">
          <span className='name'>Sarah josh</span>
          <small>Sent $30.5k</small>
        </div>
        <div className="duration">
          2 days ago
        </div>
      </div>
    </div>
      </div>

      <div className="formSection">
        <h2>Contact an Expert</h2>
        
        <form>
        <label htmlFor="name">Name</label>
          <input type="text" id="pesticide" name="pesticide" />

          <label htmlFor="pesticide">Pesticide Used</label>
          <input type="text" id="pesticide" name="pesticide" />

          <label htmlFor="fertilizer">Fertilizer Used</label>
          <input type="text" id="fertilizer" name="fertilizer" />

          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" name="phone" required />

          <label htmlFor="expertCall">Request Call from Expert</label>
          <input type="checkbox" id="expertCall" name="expertCall" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>

    
 )
}

export default Activity