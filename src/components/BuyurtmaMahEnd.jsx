import React from 'react'
import { Link } from 'react-router-dom'

function BuyurtmaMahEnd() {
  return (
    <div className='w-[400px] h-[200px] rounded-lg bg-[#101214] fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] p-[30px]'>
      <h1 className='text-center font-bold text-3xl mb-10'>Buyurtma qabul qilindi</h1>
      <p className='text-center font-semibold text-1xl'>Buyurtmangiz uchun rahmat</p>
      <Link to="/batafsilBuyurtma">
        <button  className=' absolute  right-[19px] top-[18px]'><i className="fa-solid fa-x"></i></button>
      </Link>
    </div>
  )
}

export default BuyurtmaMahEnd