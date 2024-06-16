import React from 'react'
import ArrowIcon from '../assets/bhive-landing-image/Arrow 1.png'
import TileCard from './TileCard';
import GymIcon from '../assets/bhive-landing-image/Gym.png';
import Wifi from '../assets/bhive-landing-image/wifi.png';
import Time from '../assets/bhive-landing-image/Time.png';
import TeaCafe from "../assets/bhive-landing-image/Cafeteria.png";
import Affordable from '../assets/bhive-landing-image/Money.png';
import Comfort from '../assets/bhive-landing-image/sitingArea.png';
import Sport from '../assets/bhive-landing-image/Spor.png';
import Community from '../assets/bhive-landing-image/community.png';
const cardData = [
  {
    title: "Community Events",
    imageUrl: Community
  },
  {
    title: "Gym Facilities",
    imageUrl: GymIcon
  },
  {
    title: "High-Speed WiFi",
    imageUrl: Wifi
  },
  {
    title: "Cafe & Tea Bar",
    imageUrl: TeaCafe
  },
  {
    title: "Affordable",
    imageUrl: Affordable
  },
  {
    title: "Comfort Lounges",
    imageUrl: Comfort
  },
  {
    title: "Quick Booking",
    imageUrl: Time
  },
  {
    title: "Sports Area",
    imageUrl: Sport
  }
];

interface WhyChoseUsProps {}

const WhyChoseUs: React.FC<WhyChoseUsProps> = ({}) => {
  return (
    <div className='container mx-auto p-5'>
        <div className='flex justify-between items-center mb-10'>
            <h1 className='text-2xl text-mainColor font-bold lg:text-4xl'>Why Choose us?</h1>
            <button className='block lg:hidden'>
                <img src={ArrowIcon} alt='right_arrow' className='h-2.5'/>
            </button>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0'>
          {cardData.map((card, index) => (
            <TileCard 
              key={index} 
              imageUrl={card.imageUrl} 
              title={card.title} 
              className={`lg:border ${index === 0 ? 'lg:border-l-0' : 'border-l'} ${index === 3 ? 'lg:border-r-0' : 'border-r'} ${index < 4 ? 'lg:border-t-0' : 'border-t'} ${index === 4 ? 'lg:border-l-0' : 'border-l'} ${index === 7 ? 'lg:border-r-0' : 'border-r'} ${index >= 4 ? 'lg:border-b-0' : 'border-b'}`}/>
          ))}
        </div>
    </div>
  )
}

export default WhyChoseUs