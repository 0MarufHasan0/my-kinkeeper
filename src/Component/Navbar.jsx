import React from 'react';
import NavbLinks from './NavbLinks';
import { FileChartPie, House, SquareChartGantt } from 'lucide-react';
import Image from 'next/image';
import navImg from '@/assets/logo.png'

const Navbar = () => {

// Nav Items

const NavItems = [

    {path:"/" , icon : <House size={20} /> , text:"Home"},
    {path:"/timeline" , icon : <SquareChartGantt size={20} /> , text:"Timeline"},
    {path:"/stats" , icon : <FileChartPie size={20} /> , text:"Stats"}
]

    return (
       <div>
  <div className="navbar bg-base-100 shadow-sm px-2 sm:px-4 md:px-6">

  <div className="flex-1 px-2 flex items-center">
  <Image 
    src={navImg}
    width={200}
    height={200}
    alt="KeenKeeper"
    className="w-[140px] sm:w-[160px] md:w-[200px] h-auto -translate-y-1 sm:translate-y-0"
  />
</div>

    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 gap-1 sm:gap-2 md:gap-3">

        {
          NavItems.map((item) => {
            return (
              <li key={item.path} className='font-medium'>

                <NavbLinks href={item.path}>
                  <span className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm md:text-base px-2 py-1 sm:p-3">
                    {item.icon}
                    {item.text}
                  </span>
                </NavbLinks>

              </li>
            )
          })
        }

      </ul>
    </div>

  </div>
</div>
    );
};

export default Navbar;