import {
  IconBag,
  IconCart,
  IconCodeSandboxSquare,
  IconGear,
  IconGrid,
  IconPenEdit,
  IconUsers,
} from "@/components/assets/dashboardIcon";
import Link from "next/link";

function AppDialog() {
  return (
    <>
      <h2 className="text-center py-2">Apps</h2>
      <div className="border-t border-gray-300"></div>
      <div className="grid grid-cols-4 gap-2 box-border font-medium mx-5 mt-2 mb-5">
        {itemList.map((item, index) => (
          <Link
            href={item.pathname}
            className="inline-flex flex-col rounded items-center hover:bg-pink-200 cursor-pointer bg-white justify-center p-2 "
            key={index}
          >
            <span className="my-2 ">{item.icon}</span>
            <span className="text-sm  text-center text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}

export default AppDialog;

const itemList = [
  {
    title: "Dashboard",
    icon: <IconGrid />,
    pathname: "/dashboard",
  },
  {
    title: "Products",
    icon: <IconBag />,
    pathname: "/dashboard/e-commerce/products",
  },
  {
    title: "Invoice",
    icon: <IconCodeSandboxSquare />,
    pathname: "/dashboard/e-commerce/invoice",
  },
  {
    title: "Billings",
    icon: <IconPenEdit />,
    pathname: "/dashboard/e-commerce/billings",
  },
  {
    title: "Arrival",
    icon: <IconCart />,
    pathname: "/dashboard/e-commerce/arrival",
  },
  {
    title: "FlashSales",
    icon: <IconBag />,
    pathname: "/dashboard/e-commerce/flash-sales",
  },
  {
    title: "Profile",
    icon: <IconUsers />,
    pathname: "/dashboard/profile",
  },
  {
    title: "Settings",
    icon: <IconGear />,
    pathname: "/dashboard/settings",
  },
];
