import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs"

function Rating({ total }) {
    return (
        <div className="flex gap-1">
            {
                [...Array(5).keys()].map(item => {
                    return (
                        <span key={item} className="text-[#FACA51]">
                            {
                                total >= item + 1 ? <BsStarFill /> : total > item ? <BsStarHalf /> : <BsStar />
                            }
                        </span>
                    )
                })
            }
        </div>
    )
}

export default Rating