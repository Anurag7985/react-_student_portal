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
            <li><a id='clr' href='#'>Home</a></li>
            <li><a id='clr' href='#'>Home</a></li>
            <li><a id='clr' href='#'>Home</a></li>
            <li><a id='clr' href='#'>Home</a></li>
            <li><a id='clr' href='#'>Home</a></li>
            <li><a id='clr' href='#'>Home</a></li>     
          </ul>
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
                
              </div>
              <div className='right-cont-footer-left-1-item-2'></div>
              <div className='right-cont-footer-left-1-item-3'></div>
            </div>
            <div className='right-cont-footer-left-2'></div>

          </div>
          <div className='right-cont-footer-right'>

          </div>

        </div>
      </div>

    </div>
  )
}
