import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductList from './pages/ProductList'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import ProductDetail from './pages/ProductDetail'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductList/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/products/:id' element={<ProductDetail/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
