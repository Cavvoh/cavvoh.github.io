import React from 'react';
import HeroImage from "../assets/JonasLEGO_6.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <div name="Start" className="sm:pt-[180px] pt-[80px] w-full h-screen text-zinc-100">
        
        <div className='max-w-[1000px] flex flex-col items-center justify-center h-full px-4 mx-auto md:flex-row'>
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl font-bold text-white sm:text-6xl">I'm a Full Stack Developper</h2>
                <p className="max-w-md py-4 text-zinc-100">
                    <Typewriter loop cursor cursorStyle="|" typeSpeed={70} deleteSpeed={50} delaySpeed={1000} words={['I have 8 years of experience building and desgining software.', 'I have 8 years of experience building and desgining software.']}/>
                </p>
                <div>
                    <Link to='Projekte' smooth duration={500} className="flex items-center px-6 py-3 my-2 text-white duration-200 cursor-pointer z-5 group btn w-fit hover:scale-105">
                        Projekte
                        <span className="duration-200 group-hover:rotate-90">
                            <MdOutlineKeyboardArrowRight size={20} className='ml-1' />
                        </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="ProfilePic" className="w-2/3 mx-auto rounded-2xl md:w-full" />
            </div>
        </div>
    </div>
  );
};

export default Home;