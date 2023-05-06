import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa';

interface Rating {
  rating: number;
}

export const RatePro: React.FC<Rating> = ({ rating }) => {
    // Calculate the number of full stars to display
    const fullStars = Math.floor(rating);
    // Calculate the decimal part of the rating to determine if we need to display a half star
    const decimalPart = rating - fullStars;
    const hasHalfStar = decimalPart >= 0.5;
    // Create an array of empty stars to display
    const emptyStars = Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) });
    
    return (
      <div className="flex items-center">
        <div className="flex items-center">
          {/* Render full stars */}
          {Array.from({ length: fullStars }).map((_, index) => (
            <FaStar key={index} className="h-5 w-5 text-yellow-500" />
          ))}
          {/* Render half star, if necessary */}
          {hasHalfStar && <FaStarHalf className="h-5 w-5 text-yellow-500" />}
          {/* Render empty stars */}
          {emptyStars.map((_, index) => (
            <FaStar key={index} className="h-5 w-5 text-gray-400" />
          ))}
        </div>
        <div className="ml-2 text-gray-700 text-sm">{rating.toFixed(1)}</div>
      </div>
    );
  };