import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            name: 'Start',
            link: '/home#start'
        },
        {
            id: 2,
            name: 'Über mich',
            link: '/home#about'
        },
        {
            id: 3,
            name: 'Projekte',
            link: '/home#projects'
        },
    ]

  return (
    <div className='fixed flex items-center justify-between md:w-[80%] md:ml-[10%] h-20 px-4 text-white z-5 md:rounded-[30px] rounded-b-[30px] md:mt-[8px] navbar w-full'>
        <div>
            <h1 className='ml-2 text-6xl font-signature duration-200 hover:opacity-[80%]'>Cavvoh</h1>
        </div>

        <ul className='hidden md:flex'>
            {links.map(({id, name, link}) =>(
                <li key={id} className='px-4 font-medium duration-200 cursor-pointer text-zinc-100 hover:scale-105'>
                    <Link to={link}>
                        {name}
                    </Link>
                </li>
            ))}
        </ul>

        <div onClick={() => setNav(!nav)} className="z-10 pr-4 cursor-pointer text-zinc-100 md:hidden">
            <div>
                {nav ? <FaTimes size={30} className='duration-200 hover:scale-105 btn p-[5px] w-[40px] h-[40px] ml-[15%]' /> : <FaBars size={30} className='duration-200 hover:scale-105' />}
            </div>
        </div>

        {nav && (
            <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen nav_mobile text-zinc-100">
                
                {links.map(({id, name, link}) =>(
                    <li key={id} className='gap-3 px-4 py-6 my-[15px] text-4xl duration-200 cursor-pointer hover:scale-105 btn'>
                    <Link onClick={() => setNav(!nav)} to={link}>
                        {name}
                    </Link>
                    </li>
                ))}
            </ul>
            )}
    </div>
  );
};

export default NavBar;