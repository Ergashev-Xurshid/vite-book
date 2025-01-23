//icon
import '@fortawesome/fontawesome-free/css/all.min.css';
//style css
import './App.css'
//react-router-dom
import {createBrowserRouter ,createRoutesFromElements , Route, RouterProvider } from 'react-router-dom'
//Layout
import RootLayout from './Layout/RootLayout';

import Home from './pages/Home';
import BatafsilBuyurma from "./components/BatafsilBuyurtma"
import BuyurtmaMah from "./components/BuyurtmaMah"
import BuyurtmaMahEnd from "./components/BuyurtmaMahEnd"
import BuyurtmaShop from './components/BuyurtmaShop';
import Shopselect from './components/Shopselect';
import UzumSelect from './components/UzumSelect';
import UzumEnd from './components/UzumEnd';
import BookSelect from './components/BookSelect';


function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index  element={<Home />} />
        <Route path="batafsilBuyurtma"  element={<BatafsilBuyurma/>} >
          <Route path="buyurtma" element={<BuyurtmaMah />}/>
          <Route path="buyurtma/end" element={<BuyurtmaMahEnd/>} />
        </Route>
        <Route path="buyurtmaShop" element={<BuyurtmaShop />}>
          <Route path="shopselect" element={<Shopselect />}/>
          <Route path="shopselect/uzum" element={<UzumSelect/>}/>
          <Route path="shopselect/uzum/uzumend" element={<UzumEnd/>}/>
          <Route path="shopselect/book" element={<BookSelect/>}/>
          <Route path="shopselect/book/uzumend" element={<UzumEnd/>}/>
        </Route>
      </Route>
    )
  )
  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App




 