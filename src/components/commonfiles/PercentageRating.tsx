import React from "react";
import { FaStar } from "react-icons/fa";

interface RatingCount {
  rating: number;
  count: number;
}

interface PercentageRatingProps {
  ratingCount: RatingCount[];
}

const PercentageRating: React.FC<PercentageRatingProps> = ({ ratingCount }) => {
  // Calculate the percentage of each star rating
  const totalRatings = ratingCount.reduce((acc, cur) => acc + cur.count, 0);
  const ratingPercentages = ratingCount.map(({ count }) => (count / totalRatings) * 100);

  return (
    <div>
      <div className="block">
        {/* Render rating bars for remaining star ratings */}
        {ratingCount.map(({ rating }, index) => (
          <div key={index} className="flex text-center mr-2 mb-3">
            <div className="block">
              {rating} <FaStar className="h-5 w-5 inline text-yellow-500" />
            </div>
            <div className="h-1 w-20 bg-gray-300 rounded-lg mt-3">
              <div
                className="h-full bg-[#24836C] rounded-lg"
                style={{ width: `${ratingPercentages[index]}%` }}
              ></div>
            </div>
            <div className="ml-2 text-gray-700 text-sm">
              {`${ratingPercentages[index].toFixed(1)}%`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PercentageRating;



// <div>
//       <div className="block">
//         {/* Render rating bars for remaining star ratings */}
//         {ratingCount.map(({ rating, count }, index) => (
//           <div key={index} className="flex text-center mr-2 mb-3">
//             <div className="block">
//              {rating} <FaStar className="h-5 w-5 inline text-yellow-500" />
//             </div>
//             <div className="h-1 w-20 bg-gray-300 rounded-lg mt-3">
//               <div
//                 className="h-full bg-yellow-500 rounded-lg"
//                 style={{ width: `${ratingPercentages[index]}` }}
//               ></div>
//             </div>

//               <div className="ml-2 text-gray-700 text-sm">
//                 {/* {(count/10000).toFixed(1)}k */}
//                 {ratingPercentages[index].toFixed(1)}k
//               </div>
//           </div>
//         ))}
//       </div>
//     </div>