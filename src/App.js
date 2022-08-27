import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

function App() {
  const [open, setOpen] = useState(true);
  const menus = [
    { name: 'DashBord', link: '/', icon: MdOutlineDashboard },
    { name: 'user', link: '/', icon: AiOutlineUser },
    { name: 'Messages', link: '/', icon: FiMessageSquare },
    { name: 'Analytics', link: '/', icon: TbReportAnalytics, margin: true },
    { name: 'File Manager', link: '/', icon: FiFolder },
    { name: 'Cart', link: '/', icon: FiShoppingCart },
    { name: 'Save', link: '/', icon: AiOutlineHeart, margin: true },
    { name: 'Settings', link: '/', icon: RiSettings4Line },

  ];
  return (

    <section className='flex gap-6'>
      <div className={`min-h-screen bg-[#0e0e0e] ${open ? 'w-60' : 'w-16'} duration-500 text-gray-200 px-4`}>
        <div className='py-3 flex justify-end'>
          <HiMenuAlt3
            size={26}
            className='cursor-pointer'
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className='flex flex-col mt-4 gap-4'>
          {menus.map((menu, i) => (
            <Link to={menu?.link} key={i}
              className={` ${menu?.margin && 'mt-4'} flex items-center text-sm gap-4 font-medium p-2 hover:bg-gray-400 rounded-md`}>
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{ transitionDelay: `${i + 3}00ms` }}
                className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{menu.name}
              </h2>
              <h2>

              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className='m-3 text-xl text-gray-900 font-semibold'>DashBoard</div>
    </section>
  );
}

export default App;
