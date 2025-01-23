import React from 'react'
import { Link, Outlet } from "react-router-dom"
import banner_2 from "../image/banner_2.png"
import fikr from "../image/fikr.png"
import avatar_1 from "../image/rasm_1.png"
import avatar_2 from "../image/rasm_2.png"

function BuyurtmaShop() {
  return (
    <>
      <div className="w-[1215px]  mx-auto">
        <div className=" flex my-10 justify-between ">
          <div>
            <h4 className='font-medium text-lg mb-3'>Ikhtiyor Dostmetov</h4>
            <h2 className='font-medium text-4xl mb-[30px]'>Foydali kontaktlar</h2>
            <p className='font-normal w-[598px] text-lg mb-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
            <p className='font-normal w-[598px] text-lg mb-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
            <div >
              <button className='w-[206px] rounded-lg py-3 items-center bg-[#4F5D2F]'>Batafsil</button>
            </div>
          </div>
          <div className="w-[340px] ">
            <img src={banner_2} alt="banner" />
          </div>
        </div>
        <hr className='border-slate-800' />
        <div className="flex gap-[112px] my-10">
          <div>
            <h3 className="font-semibold text-lg mb-[18px]">Bu kitob siz uchun agar:</h3>
            <ul className="text-justify flex flex-col gap-[18px]">
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check" style={{ color: "#8AAB3F" }}></i>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check" style={{ color: "#8AAB3F" }}></i>
                <p>Lorem Ipsum is simply dummy text of the </p>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check" style={{ color: "#8AAB3F" }}></i>
                <p>Of the printing and typesetting industry.</p>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check" style={{ color: "#8AAB3F" }}></i>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check" style={{ color: "#8AAB3F" }}></i>
                <p>Lorem, ipsum dolor. printing and typesetting industry. Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-[18px]">Kitobni o’qigandan keyin siz:</h3>
            <ul className="text-justify flex flex-col gap-[18px]">
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check" style={{ color: "#8AAB3F" }}></i>
                <p>Lorem Ipsum is simply dummy text of the printing </p>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check" style={{ color: "#8AAB3F" }}></i>
                <p>Lorem Ipsum is simply dummy text of the </p>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check" style={{ color: "#8AAB3F" }}></i>
                <p>Of the printing and typesetting industry. Lorem ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </li>
              <li className="flex items-center gap-3 ">
                <i className="fa-solid fa-check" style={{ color: "#8AAB3F" }}></i>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque!</p>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check" style={{ color: "#8AAB3F" }}></i>
                <p>Lorem, ipsum dolor. printing and typesetting industry. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
            </ul>
          </div>
        </div>
        <hr className='border-slate-800' />
        <div className="pt-10">
          <h2 className="font-semibold text-xl text-center mb-[30px]">Kitob haqida muallif fikrlari</h2>
          <div>
            <img src={fikr} alt="author" />
          </div>
          <hr className='border-slate-800 my-10' />
          <div>
            <h2 className=' font-bold text-2xl text-center mb-8'>Kitob haqida harid qilganlar fikrlari</h2>
          </div>
          <div className='flex justify-between gap-8 mb-[150px]'>
            <div className='bg-[#191919] p-6 rounded-lg' >
              <div className='flex gap-[18px] items-center mb-6 '>
                <div>
                  <img src={avatar_1} alt="img" />
                </div>
                <div>
                  <h3 className='font-semibold text-lg mb-2'>Eshonov Fakhriyor</h3>
                  <p className='font-normal  text-[#a3a3a3]'>Uzum Market CEO</p>
                </div>
              </div>
              <div>
                <p className='font-normal  text-[#a3a3a3]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
              </div>
            </div>
            <div className='bg-[#191919] p-6 rounded-lg' >
              <div className='flex gap-[18px] items-center mb-6'>
                <div>
                  <img src={avatar_2} alt="img" />
                </div>
                <div>
                  <h3 className='font-semibold text-lg mb-2'>Eshonov Fakhriyor</h3>
                  <p className='font-normal  text-[#a3a3a3]'>Uzum Market CEO</p>
                </div>
              </div>
              <div>
                <p className='font-normal  text-[#a3a3a3]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, </p>
              </div>
            </div>
          </div>

          <div className="w-[600px] mx-auto mt-2 text-center ">
            <i className="fa-solid fa-gift text-6xl"></i>
            <h3 className=" font-semibold text-2xl my-5 ">Hoziroq kitobni sotib oling va sovg’a sifatida kitob audiosiga ega bo’ling!</h3>
            <Link to="shopselect">
              <button className='w-[206px] rounded-lg py-3 items-center bg-[#4F5D2F]'>Sotib olish</button>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default BuyurtmaShop