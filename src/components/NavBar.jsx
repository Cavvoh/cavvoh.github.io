import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'Home'
        },
        {
            id: 2,
            link: 'About'
        },
        {
            id: 3,
            link: 'Projects'
        },
    ]

  return (
    <div className='fixed flex items-center justify-between w-full h-20 px-4 text-white z-5 navbar'>
        <div>
            <h1 className='ml-2 text-6xl font-signature'>Cavvoh</h1>
        </div>

        <ul className='hidden md:flex'>
            {links.map(({id, link}) =>(
                <li key={id} className='px-4 font-medium duration-200 cursor-pointer text-zinc-100 hover:scale-105'>
                    <Link to={link} smooth duration={500}>
                        {link}
                    </Link>
                </li>
            ))}
        </ul>

        <div onClick={() => setNav(!nav)} className="z-10 pr-4 cursor-pointer text-zinc-100 md:hidden">
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen bg-gradient-to-tr from-[#ec7c26] to-[#7b1fa2] text-zinc-100">
                
                {links.map(({id, link}) =>(
                    <li key={id} className='px-4 py-6 text-4xl duration-200 cursor-pointer hover:scale-105'>
                    <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                        {link}
                    </Link>
                    </li>
                ))}
            </ul>
            )}
    </div>
  );
};

export default NavBar;