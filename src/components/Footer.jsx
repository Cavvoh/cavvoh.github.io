import React from 'react'

const Footer = () => {
  return (
    <footer className='flexCenter mt-10 md:mx-[7%]'>
        <div className='padding-container max-container flex w-full flex-col gap-14'>
            <div className="border-2 border-black border-opacity-[10%] border-dashed" />
            <p className='regular-14 w-full text-center text-zinc-200 text-opacity-[50%] hover:text-opacity-[80%] font-semibold duration-200 mb-10'>&copy; {new Date().getFullYear()} Cavvoh | All rights reserved</p>
        </div>
    </footer>
  );
};

export default Footer;