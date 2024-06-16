import React from 'react';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
// import CenterImage from '../assets/bhive-landing-image/Rectangle 34624826.png';
import '../App.css';
import Workspace from '../assets/bhive-landing-image/workspace.png';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import TripleArrow from '../assets/bhive-landing-image/trippleArrow.png';

interface CenterCardProps  {
    title: string;
    distance: string;
    discount: number;
    dayPassPrice: number;
    bulkPassPrice: number;
    mapUrl: string | undefined;
    centerImage: string | undefined;
}

const CenterCard: React.FC<CenterCardProps> = ({title, distance, discount, dayPassPrice, bulkPassPrice, mapUrl, centerImage }) => {


  return (
    <div className='border border-[#EEE7E7CC] shadow-lg rounded-lg p-4 bg-white'>
        <div className='flex justify-between items-center'>
            <h1 className='text-lg lg:text-xl font-semibold text-mainColor'>{title}</h1>   
            <a href={mapUrl}>
                <div className='flex flex-col gap-2 items-center rounded-md border-[0.5px] border-[#EEE7E7] bg-[#F9F9F9] p-4 hover:bg-[#CEC6C6] hover:shadow-lg active:bg-[#CEC6C6] transition duration-300 ease-in-out'>
                    <span>
                        <AssistantDirectionIcon/>
                    </span>
                    <span className='text-[10px] text-[#26323880]'>{distance}</span>
                </div>
            </a>
        </div>
        <div className='mt-5 relative'>
            <img src={centerImage} alt='center' className='w-full'/>
            <div className='flex items-center border border-[#FFBB0080] dualbg text-[#FFBB00] text-sm font-medium p-1.5 rounded-md absolute top-[10px] left-[15px]'>
                <img src={Workspace} alt="workspace" className='mr-1'/>
                WorkSpace
            </div>
        </div>
        <div className='flex justify-between items-center gap-2 mt-4'>
            <div className='flex justify-between items-center gap-x-2 lg:gap-x-0 p-2 border border-[#EEE7E7] bg-[#F9F9F9] rounded-md w-[90%]  hover:bg-[#CEC6C6] hover:shadow-lg active:bg-[#CEC6C6] transition duration-300 ease-in-out'>
                <div>
                    <span className='text-sm text-secondaryColor font-medium'>Day Pass</span>
                    <p className='text-lg lg:text-xl font-semibold text-mainColor'><CurrencyRupeeIcon sx={{ fontSize: '18px' }}/>{dayPassPrice}<span className='text-secondaryColor text-[10px]'>/Day</span></p>
                </div>
                <img src={TripleArrow} alt='arrow'/>
            </div>
            <div className='flex justify-between items-center gap-x-2 lg:gap-x-0 p-2 border border-[#FFC422] bg-[#FFCF4B] rounded-md relative w-full hover:bg-[#FFC422] hover:shadow-lg active:bg-[#FFC422] transition duration-300 ease-in-out'>
                <span className='absolute border border-[#263238] bg-[#263238] text-white text-[10px] p-[2.25px] rounded top-[-10px] left-[35%]'>{discount}% Discount</span>
                <div>
                    <span className='text-sm text-secondaryColor font-medium'>Bulk Pass</span>
                    <p className='text-lg lg:text-xl font-semibold text-mainColor'><CurrencyRupeeIcon sx={{ fontSize: '18px' }}/>{bulkPassPrice}<span className='text-secondaryColor text-[10px]'>/10 Day</span></p>
                </div>
                <img src={TripleArrow} alt='arrow'/>
            </div>
        </div>
    </div>
  )
}

export default CenterCard