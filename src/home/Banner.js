import React from 'react'

const Banner = () => {
  return (
    <>
      <div className='bannerCont'>
        <div className='bannerDivLeft'>
          <img src='imges/bannerImg1.webp' alt='' />
        </div>
        <div className='bannerDivRight'>
          <div className='bannerRightDiv1'>
            <div className='bannerRightDiv1Img1'>
              <img src='imges/bannerimgup.webp' alt='' />
            </div>
            <div className='bannerRightDivPara'>
              <p>India</p>
              <h2>
                Event at Pakistani Consulate in Melbourne Marks Youm e Istahsal
                Day
              </h2>
              <p>5-Aug-24</p>
            </div>
          </div>
          <div className='bannerRightDiv2'>
            <div className='bannerRightDiv1Img2'>
              <img src='imges/bannerimgdown.webp' alt='' />
            </div>
            <div className='bannerRightDivPara'>
              <p>India</p>
              <h2>
                Event at Pakistani Consulate in Melbourne Marks Youm e Istahsal
                Day
              </h2>
              <p>5-Aug-24</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
