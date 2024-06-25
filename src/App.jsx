import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Footer } from './components/footer'
import { Head } from './components/header'
import ProductList from './components/featured'
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Deatils from './components/productdeatils'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
  <Head />
      <Router>
        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/details/:id' element={<Deatils />} />
          
        </Routes>
      </Router>

     
     
    </div>
  )
}

export default App
