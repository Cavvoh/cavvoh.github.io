import React from 'react'

const About = () => {
  return (
    <div name='Über mich' className='w-full h-screen text-zinc-100'>
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='pb-8 pl-4 sm:text-right'>
                    <p className='inline text-4xl font-bold text-white proj'>Über mich</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='text-4xl font-bold sm:text-right'>
                        <p>Hi. Ich bin Cavvoh schön dich kennen zu lernen. Bitte schau dich um</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga qui voluptates architecto aspernatur natus neque non molestias quas quidem illum, saepe officia fugit sed deleniti dolores! Id atque consequuntur iure.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;