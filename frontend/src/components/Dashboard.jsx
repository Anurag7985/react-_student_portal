import React from 'react'
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className='cont'>
        <div className='left-container'>
            <div id='left-cont-logo'>
              <i class="fa fa-graduation-cap logo" aria-hidden="true"></i>
              <div className='menu-list'>
                <ul id='list'>
                  <li><a href='/'>Home</a></li>
                  <li><a href='/'>Payment Info</a></li> 
                  <li><a href='/'>Registration</a></li>
                  <li><a href='/'>Courses</a></li>
                  <li><a href='/'>Drop Semester</a></li>
                  <li><a href='/'>Result</a></li>
                  <li><a href='/'>Notice</a></li>
                  <li><a href='/'>Schedule</a></li>                
                </ul>
              </div>
            </div>
        </div>
        <div className='right-container'>
          <div className='right-cont-header'>
            <div className='right-cont-header-search_bar'>
            <input class="form-control me-2 w-400 search-bar" type="search" placeholder="Search" aria-label="Search"/>
            </div>
            <div className='right-cont-header-profile'>
              <div className='profile-img'>
                <i class="fa fa-user profile-img" aria-hidden="true"></i>
              </div>
              <div className='profile-name'>
                <strong>John Doe</strong>
              </div>
            </div>

          </div>
          <div className='right-cont-body'>
            <div className='right-cont-body-1'>
              <h2 id='heading'>Welcome back, John! </h2>
              
              <p id='heading-desc'>Always stay updated in your student portal</p>
            </div>
            <div className='right-cont-body-2'>
              {/* <img className='imge' src='./images/cartoon.png' alt="Cartoon" />   */}
            </div>
          </div>
        </div>
      
    </div>
  )
}
