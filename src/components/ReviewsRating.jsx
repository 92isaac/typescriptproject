import React from 'react'
import { Rating } from './Rating'
import { Recommendation } from './Recommendation'
import { Review } from './Review'
import { ReviewSpace } from './ReviewSpace'

const ReviewsRating = ({images}) => {
 
  return (
    <div className="bg-white mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="block md:flex md:flex-row">
        {/* <div className="block md:grid md:grid-cols-3"> */}
          <Rating />
          <Review images={images}/>
          <ReviewSpace />
        </div>
        <Recommendation />
      </div>
    </div>
  )
}

export default ReviewsRating