import React, { useState } from 'react'
import { PercentageRating } from './commonfiles/PercentageRating';
import { RatePro } from './commonfiles/RatePro';


const ratingCount = [
    { rating: 5, count: 15600 },
    { rating: 4, count: 7500 },
    { rating: 3, count: 4500 },
    { rating: 2, count: 2500 },
    { rating: 1, count: 500 }
  ];


export const Rating = () => {
return(
    <div>
        <h3>Reviews & Ratings</h3>
        <div className="flex justify-between gap-10">
            <div>
                <h1 className='font-bold'>4.9 <span className='text-base text-gray-400'>/ 5.0</span></h1>
            <RatePro rating={Number(4.9)}/>
            </div>
            <div className="div">
                <PercentageRating ratingCount={ratingCount} />
            </div>
        </div>
    </div>
)
};