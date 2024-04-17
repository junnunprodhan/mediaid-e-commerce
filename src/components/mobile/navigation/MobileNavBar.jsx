"use client"
import Image from "next/image";
import Link from "next/link";
import { BiCartAdd } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";

import SearchBar from "@/components/header/search/SearchBar";
import { ToggleContext } from "@/provider/contextProvider";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useSelector } from "react-redux";
import MobileSidebar from "./MobileSidebar";

const MobileNav = () => {
  const { data, setData } = useContext(ToggleContext)
  const { cartItems } = useSelector(s => s.cartState)
  const { replace, push } = useRouter()

  function toggleLoginModal() {

  }
  return (
    <div>
      <div className="flex justify-between items-center px-3 lg:px-0 pt-3 ">
        <div className="flex">
          <div className="flex flex-col">
            <Link href="/">
              <span className="sr-only">Workflow</span>
              <Image
                className="h-5 w-20 sm:h-10"
                src="https://i0.wp.com/mediaidbd.net/wp-content/uploads/2021/05/cropped-Mediaid-white-stroke-1.png2_-1.png?resize=200%2C51&ssl=1"
                alt=""
                width={200}
                height={200}
              />
            </Link>
            <div className="flex items-center rounded-md  ">
              <p className="mr-1 text-[12px] md:text-base">
                Deliver To <span className="font-semibold">Bangladesh</span>
              </p>
              <BsChevronDown className="text-[10px]" />
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center gap-4 mr-2 relative">
          {/* account login */}
          <button
            onClick={() => {
              replace(`/?signin=user`)
              window.login_modal_1.showModal()
            }}
            className="px-3 py-1 md:hidden rounded-xl bg-slate-100 hover:bg-slate-200 transition flex items-center"
          >
            <FaSignInAlt size={18} className="text-gray-500 mr-1" /> {/* Sign In icon */}
            <p>Sign In</p>
          </button>
          {/* Cart Icon */}
          <div className="relative">
            <button>
              <BiCartAdd className="text-slate-500" size="1.5em" />
              <span className=" absolute -top-2 -right-2 rounded-full  px-1  text-[10px] bg-indigo-500 text-slate-50">
                {cartItems.length}
              </span>
            </button>
          </div>

          {/* Menu Icon */}
          <div>
            <button onClick={() => setData(s => ({ ...s, mobileSidebar: !s.mobileSidebar }))}>
              <FiMenu className="text-slate-500" size="1.5em" />
            </button>
          </div>
        </div>
      </div>
      {/* search bar */}
      <div>
        <SearchBar />
      </div>
      {/* Sidebars */}
      {data.mobileSidebar ? (
        <MobileSidebar />
      ) : null}
    </div>
  );
};

export default MobileNav;
