import banner_1 from "../image/banner_1.png"
import payme from "../image/payme.png"
import uzum from "../image/uzum.png"
import clik from "../image/clik.png"
import admin from "../image/admin.png"
import { useState } from "react"
import { Link, Outlet } from "react-router-dom"




function BuyurtmaMah() {
  const [isLocalActive, setIsLocalActive] = useState(false);

  const toggleLocal = () => {
    setIsLocalActive(true);
  };

  const toggleGlobal = () => {
    setIsLocalActive(false);
  };

  return (
    <div className='w-[543px] h-[770px] rounded-lg bg-[#101214] fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] p-[30px]'>
      <div>
        <h2 className='text-2xl font-bold'>Kitobga buyurtma berish</h2>
        <Link to="/batafsilBuyurtma">
          <button  className=' absolute  right-[19px] top-[18px]'><i className="fa-solid fa-x"></i></button>
        </Link>
      </div>
      <div className="mt-6">
        <h3 className='font-semibold mb-3'>Kitob nomi</h3>
        <div className="flex gap-4 items-center">
          <img className="w-[72px] h-[81px] rounded-lg" src={banner_1} alt="" />
          <div>
            <p className="font-medium text-[#b7b7b8] mb-2">Oldindan buyurtma uchun 50 foiz chegirma!</p>
            <h3 className="font-semibold">Foydali kontaktlar</h3>
          </div>
        </div>
        <hr className='border-slate-800 my-6' />
        <div>
          <div className="bg-[#27292b] p-1 rounded-lg my-[18px]  ">
            <button
              onClick={toggleGlobal}
              className={`w-1/2 font-semibold rounded-lg py-3 items-center ${!isLocalActive ? "bg-[#4F5D2F] text-white" : ""
                }`}
            >
              Mahalliy
            </button>
            <button
              onClick={toggleLocal}
              className={`w-1/2 font-semibold rounded-lg py-3 items-center ${isLocalActive ? "bg-[#4F5D2F] text-white" : ""
                }`}
            >
              Xalqaro
            </button>
          </div>
          <div className="flex flex-wrap gap-[18px] w-[483px] h-[320px]  overflow-hidden">
            {!isLocalActive && <div className="flex flex-wrap gap-[18px]">
              <label className=" cursor-pointer h-[96px]">
                <span className=" flex w-[149px] py-[36px] px-7  bg-[#27292b] rounded-lg mb-3">
                  <img src={payme} alt="icon" />
                </span>
                <span className="flex items-center gap-1">
                  <input type="radio" name="option"  className="hidden peer" />
                  <span className="w-5 h-5 rounded-full border-4  border-[#27292b]  flex items-center justify-center bg-[#27292b]    peer-checked:bg-[#4F5D2F]"></span>
                  <span className=" peer-checked:text-[#4F5D2F] font-semibold">Payme</span>
                </span>
              </label>
              <label className=" cursor-pointer h-[96px]">
                <span className=" flex w-[149px] py-[29px] px-7  bg-[#27292b] rounded-lg mb-3">
                  <img src={uzum} alt="icon" />
                </span>
                <span className="flex items-center gap-1">
                  <input type="radio" name="option" className="hidden peer" />
                  <span className="w-5 h-5 rounded-full border-4  border-[#27292b]  flex items-center justify-center bg-[#27292b]    peer-checked:bg-[#4F5D2F]"></span>
                  <span className=" peer-checked:text-[#4F5D2F] font-semibold">Uzum Bank</span>
                </span>
              </label>
              <label className=" cursor-pointer h-[96px]">
                <span className=" flex w-[149px] py-[29px] px-7  bg-[#27292b] rounded-lg mb-3">
                  <img src={clik} alt="icon" />
                </span>
                <span className="flex items-center gap-1">
                  <input type="radio" name="option" className="hidden peer" />
                  <span className="w-5 h-5 rounded-full border-4  border-[#27292b]  flex items-center justify-center bg-[#27292b]    peer-checked:bg-[#4F5D2F]"></span>
                  <span className=" peer-checked:text-[#4F5D2F] font-semibold">Click</span>
                </span>
              </label>
              <label className="cursor-pointer h-[96px]">
                <span className=" flex w-[149px] py-[24px] px-12  bg-[#27292b] rounded-lg mb-3">
                  <img src={admin} alt="icon" />
                </span>
                <span className="flex items-center gap-1">
                  <input type="radio" name="option" className="hidden peer" />
                  <span className="w-5 h-5 rounded-full border-4  border-[#27292b]  flex items-center justify-center bg-[#27292b]    peer-checked:bg-[#4F5D2F]"></span>
                  <span className=" peer-checked:text-[#4F5D2F] font-semibold">Admin orqali</span>
                </span>
              </label>
            </div>}
            {isLocalActive &&
              <div className="flex flex-wrap gap-[18px]">
              <label className=" cursor-pointer h-[96px]">
                <span className=" flex w-[149px] py-[29px] px-7  bg-[#27292b] rounded-lg mb-3">
                  <img src={clik} alt="icon" />
                </span>
                <span className="flex items-center gap-1">
                  <input type="radio" name="option"  className="hidden peer" />
                  <span className="w-5 h-5 rounded-full border-4  border-[#27292b]  flex items-center justify-center bg-[#27292b]    peer-checked:bg-[#4F5D2F]"></span>
                  <span className=" peer-checked:text-[#4F5D2F] font-semibold">Click</span>
                </span>
              </label>
              <label className="cursor-pointer h-[96px]">
                <span className=" flex w-[149px] py-[24px] px-12  bg-[#27292b] rounded-lg mb-3">
                  <img src={admin} alt="icon" />
                </span>
                <span className="flex items-center gap-1">
                  <input type="radio" name="option" className="hidden peer" />
                  <span className="w-5 h-5 rounded-full border-4  border-[#27292b]  flex items-center justify-center bg-[#27292b]    peer-checked:bg-[#4F5D2F]"></span>
                  <span className=" peer-checked:text-[#4F5D2F] font-semibold">Admin orqali</span>
                </span>
              </label>
            </div>
            }
          </div>
          <hr className='border-slate-800 my-2' />
          <div className="flex justify-between mb-3 ">
            <p>Kurs umumiy narxi</p>
            <p>4 000 000 UZS</p>
          </div>
          <Link to="end">
            <button  className='w-full font-semibold rounded-lg py-3 items-center bg-[#4F5D2F]'>To’lovni amalga oshirish</button> 
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default BuyurtmaMah