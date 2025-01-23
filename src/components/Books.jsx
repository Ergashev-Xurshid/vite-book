import { useState } from "react"
import banner_1 from "../image/banner_1.png"
import banner_2 from "../image/banner_2.png"
import { Link } from "react-router-dom";

function Books() {

  const [isClicked, setIsClicked] = useState(false);
  const [isClicked1, setIsClicked1] = useState(false);
  const [x, setX] = useState(0)

  const style = {
    transform: `translateX(${x}px)`,
    transition: "transform 0.5s ease"
  }

  const toggleLeft = () => {
    if (!isClicked1) {
      setX(0);
      setIsClicked1(true);
      setIsClicked(false)
    }
  };


  const toggleRight = () => {
    if (!isClicked) {
      setX(-1100);
      setIsClicked(true);
      setIsClicked1(false)
    }
  };

  return (
    <div>
      <div className='pt-12 flex justify-between items-center '>
        <h1 className='font-semibold text-[40px] font-Playfair'>Kitoblar</h1>
        <span className='p-[10px] border rounded-xl border-slate-800 gap-[10px]'>
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input className='bg-inherit outline-none ml-2 text-4' type="text" placeholder='Kitob nomini kiriting' />
        </span>
      </div>
      <div className='flex h-[500px] w-[1140px] overflow-hidden justify-between mt-[30px]  pl-[50px] pt-[56px] pr-[30px] pb-[30px] bg-[#191919] rounded-lg ' >
        <div className=' relative flex gap-20 '>
          <div style={style} className="w-[1040px] flex justify-between ">
            <div>
              <h4 className='font-medium text-lg mb-3'>Ikhtiyor Dostmetov</h4>
              <h2 className='font-medium text-4xl mb-[30px]'>Foydali kontaktlar </h2>
              <p className='font-normal w-[598px] text-lg mb-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              <div className='w-[558px] bg-[#252525] p-[18px] flex justify-between gap-[30px] border border-black rounded-lg '>
                <Link to="batafsilBuyurtma">
                <button  className='w-[206px] rounded-lg py-3 items-center bg-[#4F5D2F]'>Batafsil</button>
                </Link>
                <p className='w-[313px]'>Kitobga oldindan buyurtma bering, va <span className='fond-bold rounded-md p-[1px] bg-[#4F5D2F]'>50%</span> chegirmaga ega bo’ling!</p>
              </div>
            </div>
            <div className="w-[340px] ">
              <img src={banner_1} alt="banner" />
            </div>
          </div>
          <div style={style} className="w-[1040px] flex justify-between ">
            <div>
              <h4 className='font-medium text-lg mb-3'>Ikhtiyor Dostmetov</h4>
              <h2 className='font-medium text-4xl mb-[30px]'>Qadam - baqadam</h2>
              <p className='font-normal w-[598px] text-lg mb-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
              <div className="mt-20">
                <Link to="buyurtmaShop">
                <button  className='w-[206px] rounded-lg py-3 items-center bg-[#4F5D2F]'>Batafsil</button>
                </Link>
              </div>
            </div>
            <div className="w-[340px] ">
              <img src={banner_2} alt="banner" />
            </div>
          </div>
          
          <div className="w-[100px] rounded-full flex gap-3 absolute left-12 bottom-0 justify-center items-center">
            <button onClick={toggleLeft} className="w-[46px] h-[46px] border rounded-full border-[#4F5D2F]">{"<"}</button>
            <button onClick={toggleRight} className="w-[46px] h-[46px] border rounded-full border-[#4F5D2F]">{">"}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Books