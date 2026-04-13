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
            <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1 px-2">
 <Image 
  src={navImg}
  width={200}
  height={200}
  alt="KeenKeeper"
/>
  </div>

  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 gap-2">
        {
            NavItems.map((item) => {
                return (
                    <li key={item.path} className='font-medium '> 

                    {/* Map NavIcons here  */}
                    
                    <NavbLinks href={item.path}>
                        <span className="flex p-3 items-center  sm:gap-2 text-us sm:text-sm md:text-base ">
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
  {/* Responsive */}

</div>
        </div>
    );
};

export default Navbar;