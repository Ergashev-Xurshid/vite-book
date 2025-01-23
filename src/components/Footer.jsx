

import { Link } from "react-router-dom"
import logo from "../image/logo.png"
function Footer() {
  return (
    <footer className="bg-[#111214] mt-[65px]">
      <div className="w-[1214px] h-[113px] mx-auto  flex justify-between items-center">
      <Link to="/" className="w-[240px]">
        <img src={logo} alt="logo" />
      </Link>
      <div>
      <ul className="flex gap-[30px]">
        <li>
          <a href="#">Bizning Loyihalar</a>
        </li>
        <li>
          <a href="#">Kurslar</a>
        </li>
        <li>
          <a href="#">Podkastlar</a>
        </li>
        <li>
          <a href="#">Kitoblar</a>
        </li>
      </ul>
      
      <p className="text-center mt-[18px] text-sm text-[#88898a]">Barcha huquqlar himoyalangan 2024</p>
      </div>
      <div className="flex gap-3 w-[240px]">
        <a href="#" className="w-[38px] h-[38px] cursor-pointer bg-[#282828] py-2 text-center rounded-full ">
        <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#" className="w-[38px] h-[38px] cursor-pointer bg-[#282828] py-2 text-center rounded-full">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="#" className="w-[38px] h-[38px] cursor-pointer bg-[#282828] py-2 text-center rounded-full">
          <i className="fa-brands fa-telegram"></i>
        </a>
        <a href="#" className="w-[38px] h-[38px] cursor-pointer bg-[#282828] py-2 text-center rounded-full">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="#" className="w-[38px] h-[38px] cursor-pointer bg-[#282828] py-2 text-center rounded-full">
        <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
      </div>
    </footer>
  )
}

export default Footer