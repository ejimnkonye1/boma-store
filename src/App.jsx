import { useState } from 'react'

import './App.css'
import { Footer } from './components/footer'
import { Head } from './components/header'
import ProductList from './components/featured'
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Deatils from './components/productdeatils'
import MenList from './components/men'
import ProductPage from './components/ProductPage'
import ShoppingCart from './components/cart'
function App() {
  const [count, setCount] = useState(0)
const [cartItem,setCartItem] = useState([]) //define cart
  return (
    <div className=''>
  <Head />
      <Router>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/men' element={<MenList />} />
          <Route path='/details/:id' element={<ProductPage cartItem={cartItem} setCartItem={setCartItem} />} />
          <Route path='/cart' element={<ShoppingCart cartItem={cartItem} setCartItem={setCartItem}/>} />
        </Routes>
        <Footer />
      </Router>

     
     
    </div>
  )
}

export default App
