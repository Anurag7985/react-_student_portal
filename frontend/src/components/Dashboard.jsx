import React from 'react'
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className='cont'>
      <div className='left-container'>
        <div id='left-cont-logo'>
          <i class="fa fa-graduation-cap logo" aria-hidden="true"></i>
        </div>  
        <div className='menu'>
          <ul id='side-menu'>
            <li><a id='clr' href='#'>Dashboard</a></li>
            <li><a id='clr' href='#'>Payment Info</a></li>
            <li><a id='clr' href='#'>Registration</a></li>
            <li><a id='clr' href='#'>Courses</a></li>
            <li><a id='clr' href='#'>Result</a></li>
            <li><a id='clr' href='#'>Schedule</a></li>     
          </ul>
          <div className='logout-btn'>
          <i class="fa fa-sign-out signout" aria-hidden="true"></i>
          <button id='logout' type='logout'>Sign out</button>
        </div>
        </div>    
      </div>
      <div className='right-container'>
        <div className='right-cont-header'>
          <div className='right-cont-header-search_bar'>
            <input class="form-control me-2 w-400 search-bar" type="search" placeholder="Search" aria-label="Search" />
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
            <h2 id='heading'>Welcome back, John !</h2><br/>
            <p id='heading-desc'>Always stay updated in your student portal</p>
          </div>
          <div className='right-cont-body-2'>
            <img className='img' src='/images/cartoon.png'/>
          </div>
        </div>
        <div className='right-cont-footer'>
          <div className='right-cont-footer-left'>
            <div className='right-cont-footer-left-1'>
              <div className='right-cont-footer-left-1-item-1'>
                <i class="fa fa-usd" id='doller' aria-hidden="true"></i>
                <p id='doller-text'>$ 10000 <br/> Total<br/>Balance</p>                     
              </div>
              <div className='right-cont-footer-left-1-item-2'>
                <i class="fa fa-money money" aria-hidden="true"></i>
                <p id='money'>$ 5000 <br/>Total Paid</p>
              </div>
              <div className='right-cont-footer-left-1-item-3'>
                <i class="fa fa-bar-chart chart" aria-hidden="true"></i>
                <p id='chart'>$ 300 <br/>Others</p>
              </div>
            </div>
            <div className='right-cont-footer-left-2'>
              <h3 id='sub-head-2'>Enrolled Courses</h3>
              <div className='right-cont-footer-left-2-inner'>
                <div className='right-cont-footer-left-2-item-1'>
                  <p id='item1-name'>Object oriented programming</p>
                  <i class="fa fa-laptop laptop-logo" aria-hidden="true"></i>
                </div>
                <div className='right-cont-footer-left-2-item-1'>
                  <p id='item2-name'>Fundamentals of database system</p>
                  <i class="fa fa-database database-logo" aria-hidden="true"></i>
                </div>
              </div>
            </div>  
           

          </div>
          <div className='right-cont-footer-right'>
            <div className='right-cont-footer-right-inner'>
            <h3 id='ryt-cont-footer-text'>Course Instructors</h3>
            <a id='r-c-f-t-btn'>See all</a>
            </div>
            <div className='right-cont-footer-right-2nd-div'>
              <div className='right-cont-footer-right-2nd-div-circle'>
                <img className='right-cont-footer-right-2nd-div-circle-img' src='/images/dp1.png'/>
              </div>
              <div className='right-cont-footer-right-2nd-div-circle'>
                <img className='right-cont-footer-right-2nd-div-circle-img' src='/images/dp2.png'/>
              </div>
              <div className='right-cont-footer-right-2nd-div-circle'>
                <img className='right-cont-footer-right-2nd-div-circle-img' src='/images/dp3.png'/>
              </div>
            </div>
            <div className='image-paragraph'>
              <h3 id='image-para'>Daily notice</h3>
              <a id='image-para-btn'>See all</a>
            </div>
            <div className='para-last'>
              <p id='para-last-text'><span id='sub-heading'>Prelim payment due</span><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing </p>
              <a id='see-more'>See more</a>
             
            </div>
           

          </div>

        </div>
      </div>

    </div>
  )
}
