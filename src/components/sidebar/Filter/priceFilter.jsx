'use client'
import { changePrice } from "@/slices/filterSlice";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const PriceFilter = () => {

  const dispatch = useDispatch()
  const { filter } = useSelector(s => s.filterState)
  // category
  // inStock
  // maxPrice
  // minPrice
  // rating
  return (
    <div>
      <div className="flex items-center pt-2 pb-1 border-b gap-1">
        <p className="font-semibold text-black text-sm w-[50px]">Price</p>
        <div className="flex items-center justify-between w-full">
          <FaMinus className="w-3 h-3 text-gray-500" />
          <FaPlus className="w-3 h-3 text-gray-500" />
        </div>
      </div>
      <div className="w-full">
        <div
          className={`pt-3 flex gap-2 w-full "flex-row items-center justify-center" 
          }`}
        >
          <span
            className="border text-sm font-medium outline-none px-1 py-[2px] rounded w-[80px]">
            {filter.minPrice}
          </span>
          <span
            className="border text-sm font-medium outline-none px-1 py-[2px] rounded w-[80px]">
            {filter.maxPrice}
          </span>
        </div>
        <div className="border-b pb-3 shadow-sm">
          <input
            type="range"
            multiple
            className="transparent h-[3px] w-full cursor-pointer
  appearance-none border-transparent bg-neutral-200 dark:bg-[#60B8A6]"
            min={0}
            max={50000}
            onChange={(e) => dispatch(changePrice(e.target.value))}
            step="10"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
