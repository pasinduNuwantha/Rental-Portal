import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-start items-center justify-between px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'>
        <div className='text-white'>
            <h2 className='text-3xl font-medium'>Do you own stunning party dresses?</h2>
            <p className='mt-2'>Simply list them on Klassy Shirts and start earning today!</p>
            <p className='max-w-130'>We handle the logistics, dress verification, and secure payments,allowing you to generate passive income with ease and peace of mind.</p>
            <button className='px-6 py-2 bg-white hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-4 cursor-pointer'>List your Dress</button>
        </div>
            <img src={assets.banner_wedding_image2} alt="outfit"  className='max-h-50 mt-10'/>
        
    </div>
  )
}

export default Banner