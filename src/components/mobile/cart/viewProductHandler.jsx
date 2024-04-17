'use client'

import { addToCart, decrementQuantity, incrementQuantity } from "@/slices/cartSlice"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"

function ViewProductHandler({ item }) {
    const { cartItems } = useSelector(s => s.cartState)
    const existInCart = cartItems.find(x => x._id === item._id)
    const dispatch = useDispatch()
    return (
        <div className="fixed bottom-[47px] z-[50] h-10 bg-slate-500  border-y w-full grid grid-cols-2 sm:hidden">
            <>
                {
                    existInCart ?
                        <div className="flex justify-center gap-2 items-center bg-white">
                            <button
                                onClick={() => dispatch(decrementQuantity(item))}
                                className="border text-sm px-2 py-1 hover:bg-gray-200 transition">
                                <AiOutlineMinus />
                            </button>
                            <span >{existInCart.quantity}</span>
                            <button
                                onClick={() => dispatch(incrementQuantity(item))}
                                className="border text-sm px-2 py-1 hover:bg-gray-200 transition">
                                <AiOutlinePlus />
                            </button>
                        </div>
                        : <button
                            onClick={() => dispatch(addToCart(item))}
                            className="bg-slate-100 text-gray-700 hover:bg-indigo-600 duration-300 text-sm font-semibold hover:text-white sm:hidden">
                            Add to Cart
                        </button>
                }
            </>
            <button className=" hover:bg-slate-100 hover:text-gray-700 bg-indigo-600 duration-300 text-sm  font-semibold text-white ">
                Order Now
            </button>
        </div>
    )
}

export default ViewProductHandler