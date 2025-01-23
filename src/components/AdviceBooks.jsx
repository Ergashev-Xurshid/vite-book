import bookData from "../data/data"
function AdviceBooks() {
  return (
    <div className="pt-[62px]">
          <h2 className="text-3xl mb-[30px]">Ixtiyor Dosmetov barcha kitoblari</h2>
          <div className='flex justify-start gap-[30px] flex-wrap'>
            {bookData.map((book) =>{
              return(
              <div key={book.id} className='w-[281px] h-[381px] relative rounded-lg cursor-pointer'>
                <img src={book.bookImg} alt={book.bookName} />
              <div className='absolute bottom-[18px] left-[18px]  '>
                <p className='text-[#b5b6b9] font-medium text-sm mb-[6px]'>{book.bookauthor}</p>
                <h3 className='font-semibold '>{book.bookName}</h3>
              </div>
            </div>
            )})}
          </div>
        </div>
  )
}

export default AdviceBooks