"use client";

import Image from "next/image";
import { useState } from "react";
import { IconGrid, IconNotification } from "../../assets/dashboardIcon";
import AdminDialog from "./adminDialog";
import AppDialog from "./appDialog";

function TopBar() {
  const [activeDialog, setActiveDialog] = useState({
    user: false,
    apps: false,
  });
  return (
    <nav className="bg-white border-gray-200 border-b dark:bg-gray-800">
      <div className="max-w-screen-xl  flex flex-wrap items-center justify-end mx-auto p-4">
        <div className="flex relative gap-5 items-center md:order-2">
          <div className="relative  rounded hover:bg-gray-100">
            <button
              type="button"
              onClick={() => setActiveDialog((s) => ({ ...s, apps: !s.apps }))}
              className="flex mr-3 h-8 font-bold text-gray-600 justify-center items-center px-2 w-full text-sm rounded-full md:mr-0 "
            >
              <span>
                <IconGrid />
              </span>
            </button>
            <div
              className={`absolute ${!activeDialog.apps && "hidden"
                } top-8 right-0  z-50 w-80 sm:w-96 bg-gray-200 rounded`}
            >
              <AppDialog />
            </div>
          </div>
          <button
            type="button"
            className="flex mr-3 text-sm h-8 hover:bg-gray-100 w-8 justify-center items-center rounded-full md:mr-0 "
          >
            <span className=" text-gray-600 flex justify-center items-center text-xl ">
              <IconNotification />
            </span>
          </button>
          <button
            onClick={() => setActiveDialog((s) => ({ ...s, user: !s.user }))}
            type="button"
            className="flex mr-3 text-sm bg-gray-800  rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open user menu</span>
            <Image
              className="w-8 h-8 rounded-full object-cover"
              width={40}
              height={40}
              src="https://res.cloudinary.com/kajolroy/image/upload/v1649315822/cld-sample.jpg"
              alt="user photo"
            />
          </button>
          <div
            className={`z-50 ${!activeDialog.user && "hidden"
              } absolute top-5 right-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
          >
            <AdminDialog />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
