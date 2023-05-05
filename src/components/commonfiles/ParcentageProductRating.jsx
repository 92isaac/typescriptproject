import React from 'react'
import { FaStar } from 'react-icons/fa';

// export const ParcentageProductRating = () => {

    export const PercentageProductRating = ({ rating }) => {
      // Calculate the percentage of the rating to display
      const percentage = (rating / 5) * 100;
      
      return (
        <div className="flex items-center">
          {/* Render full stars */}
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className={`h-5 w-5 ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`} />
          ))}
          <div className="ml-2 text-gray-700 text-sm">{rating.toFixed(1)} ({percentage.toFixed()}%)</div>
        </div>
      );
    };
    

