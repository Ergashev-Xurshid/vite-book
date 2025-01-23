import React from 'react'
import Footer from '../components/Footer'
import Headr from '../components/Headr'
import { Outlet } from 'react-router-dom'


function RootLayout() {
  return (
    <>
      <header>
        <Headr/>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default RootLayout