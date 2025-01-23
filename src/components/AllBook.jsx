import All_img from "../image/All_img.png"


function AllBook() {
  return (
    <div className="pt-[62px]">
      <h2 className="text-3xl mb-[30px]">Ixtiyor Dosmetov barcha kitoblari</h2>
      <div className='flex justify-start gap-[30px] '>
        <div className='w-[281px] h-[381px] relative cursor-pointer'>
          <img src={All_img} alt="img" />
          <div className='absolute bottom-[18px] left-[18px] '>
            <p className='text-[#b5b6b9] font-medium text-sm mb-[6px]'>Robert Kiosaki</p>
            <h3 className='font-semibold '>Boy ota va Kambag’al ota</h3>
          </div>
        </div>
        <div className='w-[281px] h-[381px] relative cursor-pointer'>
          <img src={All_img} alt="img" />
          <div className='absolute bottom-[18px] left-[18px] '>
            <p className='text-[#b5b6b9] font-medium text-sm mb-[6px]'>Robert Kiosaki</p>
            <h3 className='font-semibold '>Vavilonlik eng boy odam</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllBook