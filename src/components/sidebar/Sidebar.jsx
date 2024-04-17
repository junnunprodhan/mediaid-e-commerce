'use client'
import { usePathname } from 'next/navigation';
import Filter from './Filter/Filter';
import Categories from "./categories";

const Sidebar = () => {

  const path = usePathname()

  if (path === '/shop') {
    return (
      <div className='xl:p-3 '>
        <Filter />
      </div>
    );
  } else {
    return (
      <div className='xl:p-3 '>
        <Categories />
      </div>
    );

  }
};

export default Sidebar;
