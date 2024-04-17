'use client'
import { addToCart, decrementQuantity, incrementQuantity } from "@/slices/cartSlice"
import { BiMinus, BiPlus } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"

function ProductHandler({ item }) {
    const dispatch = useDispatch()
    const { cartItems } = useSelector(state => state.cartState)
    const existInCart = cartItems.find(x => x._id === item._id)

    function OrderNow() {
        //Order
    }
    return (
        <>
            <div className="flex items-center gap-3 w-2/5">
                <button onClick={() => dispatch(decrementQuantity(item))}
                    className={` ${existInCart ? "bg-red-400" : "disabled bg-slate-300 text-slate-500"} btn btn-sm`}>
                    <BiMinus size={20} />
                </button>
                <span>{existInCart ? existInCart?.quantity : 0}</span>
                <button onClick={() => dispatch(incrementQuantity(item))}
                    className={` ${existInCart ? "bg-green-400" : "disabled bg-slate-300 text-slate-500"} btn btn-sm`}>
                    <BiPlus size={20} />
                </button>
            </div>
            <div className="flex items-center gap-5 md:gap-3 mt-3 md:mt-auto w-3/5">
                <button
                    onClick={() => dispatch(addToCart(item))}
                    className={`px-4 ${existInCart ? "btn-disabled text-slate-400" : ""} py-2 bg-slate-100 shadow text-gray-700 hover:bg-indigo-600 duration-300 rounded text-xs sm:text-sm font-semibold hover:text-white w-full`}>
                    Add to Cart
                </button>
                <button
                    onClick={OrderNow}
                    className="px-4 py-2 hover:bg-slate-100 shadow hover:text-gray-700 bg-indigo-600 duration-300 rounded text-xs sm:text-sm font-semibold text-white w-full">
                    Order Now
                </button>
            </div>
        </>
    )
}

export default ProductHandler