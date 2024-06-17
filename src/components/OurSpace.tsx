import React, { useEffect, useState } from 'react'
import CenterCard from './CenterCard';
import ArrowIcon from '../assets/bhive-landing-image/Arrow 1.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../slice';
import { AppDispatch, RootState } from '../store';
import getCurrentPosition from '../utils/currentPosition';
import calculateDistance from '../utils/calculateDistance';

interface OurSpaceProps {}

const OurSpace: React.FC<OurSpaceProps> = () => {
  const [userLocation, setUserLocation] = useState<{ latitude: number, longitude: number } | null>(null);
  const [distances, setDistances] = useState<{ [key: string]: number }>({});

  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (data.length > 0) {
      console.log('Fetched Data:', data);
    }
  }, [data]);


  useEffect(() => {
    getCurrentPosition()
      .then(position => {
        console.log('location', userLocation)
        setUserLocation(position);
        const calculatedDistances = data.reduce((acc, center) => {
          const distance = calculateDistance(
            position.latitude,
            position.longitude,
            center.latitude,
            center.longitude
          );
          acc[center.id] = distance;
          return acc;
        }, {} as { [key: string]: number });
        setDistances(calculatedDistances);
      })
      .catch(error => {
        console.error('Error getting user location:', error);
      });
  }, [data, userLocation]);
  
  return (
    <>
        <div className='container mx-auto p-5'>
            <div className='flex justify-between items-center mb-10'>
                <h1 className='text-2xl text-mainColor font-bold lg:text-4xl'>Our Space Overview</h1>
                <button className='block lg:hidden'>
                    <img src={ArrowIcon} alt='right_arrow' className='h-2.5'/>
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {data.map((data) => (
                <CenterCard 
                  key={data.id} 
                  title={data.name} 
                  distance={distances[data.id] ? `${distances[data.id].toFixed(2)} kms` : 'Calculating...'}
                  discount={data.day_pass_discounts_percentage[10].value} 
                  bulkPassPrice={data.day_pass_price * 8} 
                  dayPassPrice={data.day_pass_price} 
                  mapUrl={data.google_maps_url} 
                  centerImage={'https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/main/' + data.images[0]}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default OurSpace