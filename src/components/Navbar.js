import React, { useState } from 'react'

const Navbar = () => {
  const [navBtn, setnavbtn] = useState(false)
  const navFunc = () => {
    setnavbtn(!navBtn)
  }
  return (
    <>
      <div className='navContainer'>
        <div className='navHead'>
          <h3>Latest News:</h3>
        </div>
        <div className='navHeadLogo'>
          <div className='navHeadBars'>
            <i class='fa-solid fa-bars' onClick={navFunc}></i>
          </div>
          <div className='navHeadLogoDiv1'>
            <p>Sunday, August 18, 2024</p>
          </div>
          <div className='navHeadLogoDiv2'>
            <img src='imges/logo192.png' alt='' />
          </div>
          <div className='navHeadLogoDiv3'>
            <i class='fa-solid fa-magnifying-glass'></i>
          </div>
        </div>
        <hr />
        <div className={`navLinks ${navBtn ? 'activenavLinks' : ''} `}>
          <div className='navxbars'>
            <i class='fa-solid fa-xmark' onClick={navFunc}></i>
          </div>
          <ul>
            <li>
              <a href=''>Home</a>
            </li>
            <hr />
            <li>
              <a href=''>World</a>
            </li>
            <hr />
            <li>
              <a href=''>Business</a>
            </li>
            <hr />
            <li>
              <a href=''>Environment</a>
            </li>
            <hr />
            <li>
              <a href=''>Health</a>
            </li>
            <hr />
            <li>
              <a href=''>Education</a>
            </li>
            <hr />
            <li>
              <a href=''>Visa and Immagiration</a>
            </li>
            <hr />
            <li>
              <a href=''>Fashion & Style</a>
            </li>
            <hr />
            <li>
              <a href=''>Sports</a>
            </li>
            <hr />
            <li>
              <a href=''>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
