'use client'
import { changeStock } from "@/slices/filterSlice";
import { useDispatch } from "react-redux";
import Categories from "../categories";
import PriceFilter from "./priceFilter";
import RatingFilter from "./ratingFilter";

const Filter = () => {

  const dispatch = useDispatch()
  // category
  // inStock
  // maxPrice
  // minPrice
  // rating
  return (
    <div>
      <div className=" bg-[#60B8A6] px-3 py-[2px] text-white">
        <div className="flex justify-between items-center w-[80%] lg:w-full">
          <h1 className="font-semibold">Filter by</h1>
          <h1 className={`text-sm cursor-pointer`}>Reset</h1>
        </div>
      </div>
      <div className="px-3">
        <PriceFilter />
        <div className="flex items-center gap-1 py-2 border-b">
          <input
            onChange={(e) => dispatch(changeStock(e.target.checked))}
            type="checkbox" defaultChecked={false} name="excludestock" />
          <p className="text-sm text-gray-600">
            Exclude Out of Stock Products
          </p>
        </div>
        <RatingFilter />
        <div >
          <h1 className="text-sm font-semibold">Categories</h1>
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Filter;
