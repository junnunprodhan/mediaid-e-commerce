'use client'
import { useCategories } from '@/hooks/useCategories';
import { ToggleContext } from '@/provider/contextProvider';
import Image from 'next/image';
import { useContext } from 'react';
import CategoriesLoader from '../loader/categoriesLoader';

const Categories = () => {
  const { data } = useContext(ToggleContext)
  const { categories, isLoading } = useCategories()
  return (
    <ul className="space-y-2">
      {
        isLoading ?
          <li className='flex flex-col gap-5'>
            {
              [...Array(15).keys()].map((x) => (
                <div key={x}>
                  <CategoriesLoader />
                </div>
              ))
            }
          </li>
          : categories?.map((item, i) => {
            return (
              <li key={i} className="flex gap-2 h-[40px] items-center cursor-pointer lg:px-2 xl:px-3 py-1 rounded hover:bg-slate-100">
                {
                  item.image &&
                  <>
                    <Image src={item.image} width={30} height={30} className='w-auto max-h-full' alt="a" />
                  </>
                }

                <h3 className={`text-sm transition-all origin-left ${data.sidebarCollapse ? "invisible scale-0" : "visible scale-100"}`}>
                  {item.name}
                </h3>
              </li>
            )
          })
      }
    </ul>
  );
};

export default Categories;