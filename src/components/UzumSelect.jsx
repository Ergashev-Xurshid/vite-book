import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function UzumSelect() {
  return (
    <>
    <div className='w-[510px] h-[362px]  p-7 bg-[#101214] fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]  rounded-lg '>
      <h2 className='font-bold mb-6'>Kitobni sotib olish</h2>
       <Link to="/buyurtmaShop">
          <button  className=' absolute  right-[19px] top-[18px]'><i className="fa-solid fa-x"></i></button>
        </Link>
      <p className='text-[#cfd0d0] mb-6'>Agar kitobni Uzum Marketdan sotib olgan bo’lsangiz, kitob bilan berilgan 7 raqamli vaucherni kiriting va kitob Audiosiga ega bo’ling!</p>
      <label>
        <span className='text-[#cfd0d0] block mb-2 ' >Vaucher raqamini kiriting :</span>
       <input required className='bg-inherit outline-none  text-4 border border-[#cfd0d0] py-3 px-4 rounded-lg  w-full'  type="text" placeholder='32165492' />
      </label>
       <Link to="uzumend">
      <button className='w-full mt-6  rounded-lg py-3 items-center bg-[#4F5D2F]'>Audioni olish</button>
       </Link>
    </div>
    <Outlet />
    </>
    
  )
}

export default UzumSelect