import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import OutfitDetails from './pages/OutfitDetails'
import Outfits from './pages/Outfits'
import MyBookings from './pages/MyBookings'
import Footer from './components/pasindu/Footer'
import Layout from './pages/owner/Layout'
import Dashboard from './pages/owner/Dashboard'
import AddOutfit from './pages/owner/AddOutfit'
import ManageOutfits from './pages/owner/ManageOutfits'
import ManageBookings from './pages/owner/ManageBookings'


const App = () => { 
  const [showLogin,setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
      {!isOwnerPath && < Navbar setShowLogin = {setShowLogin} />}

      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/outfit-details/:id' element = {<OutfitDetails/>}/>
        <Route path='/outfits' element = {<Outfits/>}/>
        <Route path='/my-bookings' element = {<MyBookings/>}/>
        <Route path='/owner' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='add-outfit' element={<AddOutfit />} />
            <Route path='manage-outfits' element={<ManageOutfits />} />
            <Route path='manage-bookings' element={<ManageBookings />} />
        </Route>

      </Routes>

      {!isOwnerPath && <Footer/>}
     



    </>
  )
}

export default App