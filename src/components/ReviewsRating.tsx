import { Rating } from './Rating';
import { Recommendation } from './Recommendation';
import { Review } from './Review';
import { ReviewSpace } from './ReviewSpace';

interface ReviewsRatingProps {
  images: string[];
}

const ReviewsRating: React.FC<ReviewsRatingProps> = ({ images }) => {
  return (
    <div className="bg-white mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="block md:flex md:flex-row">
          <Rating />
          <Review images={images} />
          <ReviewSpace />
        </div>
        <Recommendation />
      </div>
    </div>
  );
};

export default ReviewsRating;
