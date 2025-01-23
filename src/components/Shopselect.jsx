import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import uzum from "../image/uzum.png"

function Shopselect() {
  return (<>
  <div className='w-[510px] h-[283px] bg-[#101214] fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] p-[30px] rounded-lg'>
      <h2 className='font-bold text-2xl'>Kitobni sotib olish</h2>
      <Link to="/buyurtmaShop">
        <button  className=' absolute  right-[19px] top-[18px]'><i className="fa-solid fa-x"></i></button>
      </Link>
      <div className='w-[450px] h-[170px] gap-6 mt-6 flex justify-between'>
        <Link to="uzum">
        <div className='bg-[#27292b] h-[170px] cursor-pointer w-[213px] p-6 flex flex-col justify-center  rounded-lg'>
          <img className='w-[120px] h-[40px]' src={uzum} alt="uzum" />
          <h4 className='mt-6 font-semibold text-center'>Uzum orqali sotib olish</h4>
        </div>
        </Link>
        <Link to="book">
        <div className='bg-[#27292b] cursor-pointer w-[213px] h-[170px] p-6 flex flex-col justify-center  rounded-lg'>
          <i className="fa-solid text-[46px] text-center fa-book-open"></i>
          <h4 className='mt-6 font-semibold text-center'>Kitobni sotib olish</h4>
        </div>
        </Link>
      </div>
    </div>
    <Outlet/>
  </>
    
  )
}

export default Shopselect