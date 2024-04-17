"use client";
import { usePathname } from "next/navigation";
import DropdownItem from "./dropdownItem";
import LinkItem from "./linkItem";

// interface Props {
//   item: {
//     title: string;
//     icon: JSX.Element;
//     pathname: string;
//     subItems?: {
//       title: string;
//       pathname: string;
//     }[];
//   };
// }
function NavItem({ item }) {
  const pathname = usePathname();
  if (item.subItems) {
    return <DropdownItem pathname={pathname} item={item} />;
  } else {
    return <LinkItem pathname={pathname} item={item} />;
  }
}

export default NavItem;
