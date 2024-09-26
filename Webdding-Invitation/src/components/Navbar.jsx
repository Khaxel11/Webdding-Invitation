import { useState } from "react";
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import Button from "./Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <img src={logo} alt="cineflis" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer ${nav.id==='login' ? 'text-[22px]' : 'text-[16px]'} text-white 
            ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}
          `}>
              {nav.id === 'login' ? 
                <Button text={nav.title}/>
                :
                <a href={`#${nav.id}`}> {nav.title}</a>
              }
            
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 left-0
          min-w-[140px] rounded-xl sidebar w-full h-full z-[100]`}>
        <ul className="list-none flex flex-col  items-center flex-1 justify-center">
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[30px] text-white 
            ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}
          `}>
              <a href={`#${nav.id}`}> {nav.title}</a>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar