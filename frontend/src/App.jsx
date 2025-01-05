import React from 'react'
import About from'./pages/About'
import Home from './pages/Home'
import Doctor from './pages/Doctor'
import Login from './pages/Login'
import Appointment from './Appointment'
import MyAppointment from './pages/MyAppointment'
import MyProfile from './pages/MyProfile'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/doctor/:speciality" element={<Doctor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment/:docID" element={<Appointment />} />
        <Route path="/my-appointment" element={<MyAppointment />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
