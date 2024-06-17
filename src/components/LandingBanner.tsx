import React from 'react';
import '../App.css';
import Banner1 from '../assets/bhive-landing-image/Coworking video 1.png';

interface LandingBannerProps {}

const LandingBanner: React.FC<LandingBannerProps> = () => {
  return (
    <>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='bg-hexagonBg w-full basis-[75%] hidden lg:block'>
            <h1 className='lg:text-4xl xl:text-6xl text-mainColor font-bold xl:p-10 lg:p-6 ml-14 lg:mt-16 xl:w-[70%] xl:ml-[7%]' style={{ lineHeight: '70px'}}>Host your meeting with world-class amenities. Starting at <span className='text-[#FFBB00]'>₹199/-!</span></h1>
          </div>
          <div className='bg-hexagon w-full basis-[100%] lg:basis-[25%] lg:relative flex justify-center'>
            <img src={Banner1} alt='img' className='mix-blend-darken lg:relative lg:top-[30px] lg:left-[-49px]'/>
          </div>
          <div className='lg:hidden block'> 
            <h1 className='text-xl text-mainColor font-bold p-10 text-center'>Host your meeting with world-class amenities. Starting at <span className='text-[#FFBB00]'>₹199/-!</span></h1>
          </div>
        </div>
    </>
  )
}

export default LandingBanner