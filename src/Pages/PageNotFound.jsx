import React, { useEffect } from 'react'
//import { Link } from 'react-router-dom';
import NotFoundImage from "../assets/404.png";

const NotFound = () => {

  useEffect(()=>{
    document.title = "Cavvoh - 404"
  })    

  return (
    <div className='flex-col w-full h-screen px-4 text-center text-zinc-100'>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <img src={NotFoundImage} alt="404" />
        <p>Die Seite, die Du versuchst aufzurufen, <strong>existiert nicht</strong> oder <strong>Du bist nicht berechtigt</strong>, diese anzusehen.</p>
        {/*<p>Zur <strong><Link to='/home'>Startseite</Link></strong> gehen.</p>*/}
      </div>
    </div>
  )
}

export default NotFound