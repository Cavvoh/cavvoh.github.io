import React from 'react'
import WorkImg from '../assets/workImg.jpeg'

const Projects = () => {
  return (
    <div name='Projekte' className='w-full md:h-screen text-zinc-100 bg-gradient-to-tr from-[#ec7c26] to-[#7b1fa2]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='inline text-4xl font-bold text-white'>Projekte</p>
                <p className='py-6'>Schaue dir einige meiner letzten Projekte an</p>
            </div>

            <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-2'>

                <div style={{backgroundImage:`url(${WorkImg})`}} className='container flex items-center justify-center mx-auto duration-200 group content-div'>
                    <div className='text-2xl text-center opacity-0 text-zinc-100 group-hover:opacity-100'>
                        <span>
                            Cavvoh OS (Android ROM)
                        </span>
                        <div className='pt-8 text-center'>
                            {/*<a href="/">
                                <button className='px-4 py-3 m-2 text-lg font-bold text-center duration-200 button text-zinc-300 hover:scale-105'>Demo</button>
                            </a>*/}
                            <a href="https://github.com/Cavvoh-OS">
                                <button className='px-4 py-3 m-2 text-lg font-bold text-center duration-200 button text-zinc-300 hover:scale-105'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${WorkImg})`}} className='container flex items-center justify-center mx-auto duration-200 group content-div'>
                    <div className='text-2xl text-center opacity-0 text-zinc-100 group-hover:opacity-100'>
                        <span>
                            This Website
                        </span>
                        <div className='pt-8 text-center'>
                            {/*<a href="/">
                                <button className='px-4 py-3 m-2 text-lg font-bold text-center duration-200 button text-zinc-300 hover:scale-105'>Demo</button>
                            </a>*/}
                            <a href="https://github.com/Cavvoh/cavvoh.github.io/tree/master">
                                <button className='px-4 py-3 m-2 text-lg font-bold text-center duration-200 button text-zinc-300 hover:scale-105'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default Projects;