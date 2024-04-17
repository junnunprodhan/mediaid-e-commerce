import Link from "next/link";

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
function LinkItem({ item, pathname }) {
  return (
    <li>
      <Link
        href={item.pathname}
        className={`flex items-center p-2 ${item.pathname === pathname && "bg-gray-200 dark:bg-gray-700"
          } hover:bg-gray-200 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group`}
      >
        <span className="text-2xl text-gray-600">{item.icon}</span>
        <span className="ml-3">{item.title}</span>
      </Link>
    </li>
  );
}

export default LinkItem;
