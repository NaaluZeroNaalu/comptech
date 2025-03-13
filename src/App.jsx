import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Aboutus from './pages/aboutus/aboutus'
import Contact from './pages/contact/contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About-us' element={<Aboutus />} />
          <Route path='/Connect-with-us' element={<Contact />} />

        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
