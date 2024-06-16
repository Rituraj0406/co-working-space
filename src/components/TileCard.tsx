// src/components/CardComponent.tsx
import React from 'react';
// import { Card, CardContent, Typography, CardMedia } from '@mui/material';

interface TileCardProps {
  title: string;
  imageUrl: string;
  className: string;
}

const TileCard: React.FC<TileCardProps> = ({ title, imageUrl, className }) => {
  return (
    <div className={`max-w-sm flex flex-col lg:flex-row lg:justify-start items-center lg:items-center rounded-md lg:rounded-none overflow-hidden shadow-lg lg:shadow-none p-4 lg:p-6 ${className}`}>
      <img className="w-7 h-7 lg:w-8 lg:h-8 lg:mr-6" src={imageUrl} alt={title} />    
      <div className="mt-2">
        <div className="font-medium lg:font-bold text-sm lg:text-xl mb-2 text-mainColor">{title}</div>
      </div>
    </div>
  );
};

export default TileCard;
