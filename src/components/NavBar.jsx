import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'Start'
        },
        {
            id: 2,
            link: 'Über mich'
        },
        {
            id: 3,
            link: 'Projekte'
        },
    ]

  return (
    <div className='fixed flex items-center justify-between md:w-[80%] md:ml-[10%] h-20 px-4 text-white z-5 md:rounded-[30px] rounded-b-[30px] navbar w-full'>
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
            <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-zinc-100">
                
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