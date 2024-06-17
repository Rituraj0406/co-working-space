import React from 'react';
import '../App.css';

interface CopyRightsProps {}

const CopyRights: React.FC<CopyRightsProps> = () => {
  return (
    <>
        <div className='bg-[#222E34] p-5 flex justify-center'>
            <p className='text-[#DDDDDD] text-sm font-normal'>© Copyright 2024. Bhive Private Limited</p>
        </div>
    </>
  )
}

export default CopyRights