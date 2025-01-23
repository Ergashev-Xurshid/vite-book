import React from 'react'
import logo from "../image/logo.png"
import { Link } from 'react-router-dom'
function Headr() {
  return (
    <div className='flex w-[1394px] h-[106px] mx-auto justify-between items-center'>
      <nav className='w-[340px]'>
        <button className='p-[10px] border rounded-xl border-slate-800'> 
          <i className="fa-solid fa-bars mr-2"></i>
          Menu</button>
      </nav>
      <Link to="/" >
        <img src={logo} alt="" />
      </Link>
      <div className='flex gap-[30px] items-center w-[340px] cursor-pointer'>
        <span>
          <i className="fa-solid fa-phone mr-2"></i>
          <span>+998 97 628 28 82</span>
        </span>
          <span>
            <i className="fa-solid fa-globe mr-2"></i>
            <span>UZ</span>
          </span>
        <span className='w-[44px] h-[44px] p-2 text-center border rounded-full border-slate-800'>
          <i className="fa-solid fa-user"></i>
        </span>
      </div>
    </div>
  )
}

export default Headr