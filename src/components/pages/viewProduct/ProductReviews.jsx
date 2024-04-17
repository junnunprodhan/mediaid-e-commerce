
import Rating from "@/components/global/Rating";

const ProductReviews = ({ totalRating, item }) => {

  return (
    <div className="border p-2">
      <div>
        <h2>
          Rating & Reviews of {item.title}
        </h2>
        <div className="flex items-start justify-between pt-8">
          <div>
            <p className="text-6xl text-neutral-700">
              {item.rating}<span className="text-2xl text-gray-500">/5</span>
            </p>
            {/* Client Side render */}
            <Rating total={item.rating} />
            <p className="text-gray-500">{totalRating} Ratings</p>
          </div>
          <div className="flex items-start gap-x-4 pr-10">
            <div className="flex flex-col-reverse ">
              <Rating total={item.rating} />
            </div>
            <div className="flex flex-col-reverse mt-1">
              {[2, 3, 0, 26, 51].map((ratingCountItem, index) => (
                <div key={index} className="flex items-start gap-x-2">
                  <progress
                    className="progress progress-info w-40 h-3  mb-[17px]"
                    value={ratingCountItem}
                    max="100"></progress>
                  <p className="-mt-1.5 font-mono text-yellow-500 font-bold">
                    {ratingCountItem}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductReviews;
