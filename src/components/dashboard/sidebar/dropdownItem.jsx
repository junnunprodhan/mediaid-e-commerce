"use client";
import Link from "next/link";
import { useState } from "react";
import { IconArrowDown } from "../../assets/dashboardIcon";

// interface Props {
//   item: {
//     title: string;
//     pathname: string;
//     icon: JSX.Element;
//     subItems?: {
//       title: string;
//       pathname: string;
//     }[];
//   };
//   pathname: string;
// }
function DropdownItem({ item, pathname }) {
  const [collapseNav, setCollapseNav] = useState(false);

  return (
    <li>
      <button
        type="button"
        onClick={() => setCollapseNav((s) => !s)}
        className={`${pathname.startsWith(item.pathname) && "bg-gray-200"
          } flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}
      >
        {item.icon}
        <span className="flex-1 ml-3 text-left whitespace-nowrap">
          {item.title}
        </span>
        <IconArrowDown />
      </button>
      <ul
        className={`${!collapseNav ? "h-0" : "py-2"
          } transition-all space-y-2 overflow-hidden`}
      >
        {item.subItems?.map((subitems, index) => (
          <li key={index}>
            <Link
              href={subitems.pathname}
              className={`${pathname.startsWith(subitems.pathname) && "bg-gray-200"
                } flex items-center w-full gap-1 p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700`}
            >
              <span className="text-gray-500 -rotate-90">
                <IconArrowDown />
              </span>
              <span>{subitems.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default DropdownItem;
