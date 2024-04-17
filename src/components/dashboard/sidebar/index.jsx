"use client";
import Link from "next/link";
import { useState } from "react";
import {
  IconCart,
  IconCodeSandboxSquare,
  IconGear,
  IconGrid,
  IconMenubar,
  IconUsers,
} from "../../assets/dashboardIcon";
import { IconLogOut } from "../../assets/userIcons";
import NavItem from "./navItem";
function Sidebar() {
  const [sidebarCollapse, setSidebarCollapse] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setSidebarCollapse((s) => !s)}
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="w-6 h-6">
          <IconMenubar />
        </span>
      </button>
      {/* Sidebar with body overly  */}
      {sidebarCollapse && (
        <div
          onClick={() => setSidebarCollapse((s) => !s)}
          className="absolute bg-[##0000002E] top-0 left-0 w-full h-full"
        ></div>
      )}
      {/* Sidebar */}
      <aside
        id="separator-sidebar"
        className={`${
          sidebarCollapse ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full dashboard_scroll relative px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <Link href="/" className="flex items-center pl-2.5 mb-5">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Exclusive
            </span>
          </Link>
          <ul className="space-y-2 font-medium">
            {navItems.map((item, index) => (
              <NavItem key={index} item={item} />
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;

const navItems = [
  {
    title: "Dashboard",
    pathname: "/dashboard",
    icon: <IconGrid />,
  },
  {
    title: "Ectomere",
    pathname: "/dashboard/e-commerce",
    icon: <IconCart />,
    subItems: [
      {
        title: "Products",
        pathname: "/dashboard/e-commerce/products",
      },
      {
        title: "Categories",
        pathname: "/dashboard/e-commerce/categories",
      },
      {
        title: "Subcategories",
        pathname: "/dashboard/e-commerce/subcategories",
      },
      {
        title: "Flash sales",
        pathname: "/dashboard/e-commerce/flash-sales",
      },
      {
        title: "Arrival",
        pathname: "/dashboard/e-commerce/arrival",
      },
      {
        title: "Billings",
        pathname: "/dashboard/e-commerce/billings",
      },
      {
        title: "Invoice",
        pathname: "/dashboard/e-commerce/invoice",
      },
    ],
  },
  {
    title: "Widgets",
    pathname: "/dashboard/widgets",
    icon: <IconCodeSandboxSquare />,
    subItems: [
      {
        title: "Sliders",
        pathname: "/dashboard/widgets/sliders",
      },
      {
        title: "FAQ",
        pathname: "/dashboard/widgets/faq",
      },
    ],
  },
  {
    title: "Users",
    pathname: "/dashboard/users",
    icon: <IconUsers />,
  },
  {
    title: "Settings",
    pathname: "/dashboard/settings",
    icon: <IconGear />,
  },
  {
    title: "Logout",
    pathname: "/dashboard/logout",
    icon: <IconLogOut />,
  },
];
