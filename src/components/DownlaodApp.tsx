import React from 'react'
import ArrowIcon from '../assets/bhive-landing-image/Arrow 1.png';
import GooglePlay from '../assets/bhive-landing-image/googleplay.png';
import AppleStore from '../assets/bhive-landing-image/applestore.png';
import GroupImage from '../assets/bhive-landing-image/Group 1000007102.png';
import '../App.css';

interface DownlaodAppProps {}

const DownlaodApp: React.FC<DownlaodAppProps> = ({}) => {
  return (
    <div className='container mx-auto p-5'>
        <div className='flex justify-between items-center mb-10'>
            <h1 className='text-2xl text-[#605F5F] font-bold lg:text-4xl'>Download our app now</h1>
            <button className='block lg:hidden'>
                <img src={ArrowIcon} alt='right_arrow' className='h-2.5'/>
            </button>
        </div>
        <div className='relative mt-40 hidden lg:block'>
            <div className='absolute xl:top-[-135px] lg:top-[-55px] left-[36px]'>
                <img src={GroupImage} alt="img" className='xl:w-full lg:w-4/5' />
            </div>
            <div className='border-[0.5px] border-[#EEE7E7CC] bg-[#FFFFFF] rounded-lg shadow-lg flex justify-between items-center p-4 h-[265px]'>
                <div className='basis-2/5'>

                </div>
                <div className=' basis-3/5'>
                    <p className='text-xl font-medium text-[#605F5F]'>Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.</p>
                    <div className='flex items-center mt-10'>
                        <img src={GooglePlay} alt="google" className='mr-8'/>
                        <img src={AppleStore} alt="apple" />
                    </div>
                </div>
            </div>
        </div>
        <div className='block lg:hidden'>
            <div className='border-[0.5px] border-[#EEE7E7CC] bg-[#FFFFFF] rounded-lg shadow-lg flex flex-col justify-center items-center p-4'>
                <div className='bg-vector w-full flex justify-center'>
                    <img src={GroupImage} alt='Download'/>
                </div>
                <div className='p-8 flex justify-between items-center w-full gap-4'>
                    <button><img src={GooglePlay} alt='google'/></button>
                    <button><img src={AppleStore} alt='apple'/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DownlaodApp