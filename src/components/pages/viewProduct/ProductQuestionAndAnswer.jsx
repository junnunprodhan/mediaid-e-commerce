'use client'
import Rating from "@/components/global/Rating";
import { BiLike, BiSort } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { GoShield, GoShieldCheck } from "react-icons/go";
import TimeAgo from 'timeago-react';

const ProductQuestionAndAnswer = ({ getReviewData }) => {
  const reviews = getReviewData?.reviews
  return (
    <div className="border mt-2">
      <div className="flex items-center justify-between p-2 border-b">
        <p>Product Reviews</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 border-l-2 px-1 ">
            <BiSort />
            <p>
              Sort: <span className="font-medium">Relevance</span>
            </p>
          </div>
          <div className="flex items-center gap-1 border-l-2 px-1">
            <FiFilter />
            <p>
              Filter: <span className="font-medium">All star</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        {
          reviews && reviews.length ?
            reviews.map((reviewItem, i) => {
              const user = reviewItem.user
              return (
                <div key={i} className="border-t p-2">
                  <div className="flex items-start justify-between ">
                    <div>
                      {/* Client Side render */}
                      <Rating total={reviewItem.noOfStar} />
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-slate-400">
                          by
                          <span className="font-medium text-neutral-500 pl-0.5">
                            {user ? user.name : "Unknown"}
                          </span>
                        </p>
                        {user && user.paymentVerified ?
                          <GoShieldCheck color="green" /> : <GoShield color="red" />
                        }
                        {
                          user && user.paymentVerified ?
                            <span className="text-sm text-green-500">Verified Purchase</span>
                            : <span className="text-sm text-red-500">Unverified</span>}
                      </div>
                    </div>
                    <span className="text-sm text-neutral-500">
                      <TimeAgo
                        datetime={reviewItem.createdAt}
                      />
                    </span>
                  </div>
                  <div className="mt-2">
                    <p>
                      {
                        reviewItem.comment
                      }
                    </p>
                    <div className="flex items-center gap-2 my-1"></div>
                    <p className="py-2 ">
                      <BiLike size={25} className="cursor-pointer" />
                    </p>
                  </div>
                </div>
              )
            }
            ) :
            <span className="block text-center my-5 text-gray-500">Reviews Not found</span>
        }
      </div>

    </div>
  );
};

export default ProductQuestionAndAnswer;
