import React from 'react'
import Books from '../components/Books'
import AllBook from '../components/AllBook'
import AdviceBooks from '../components/AdviceBooks'

function Home() {
  return (
    <div className='w-[1214px] mx-auto'>  
        <hr className='border-slate-800' />
        <Books/>
        <AllBook/>
        <AdviceBooks/>
    </div>
  )
}

export default Home