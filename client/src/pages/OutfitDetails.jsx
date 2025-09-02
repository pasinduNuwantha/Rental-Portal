import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { assets, dummyOutfitData } from '../assets/assets'

const OutfitDetails = () => {
  const {id}= useParams()
  const navigate = useNavigate()
  const [outfit,setOutfit] = useState(null)

  useEffect(()=>{
    setOutfit(dummyOutfitData.find(outfit => outfit._id === id))
  },[id])
  return outfit ? (
    <div className='px-6 md:px lg:-24 xl:px-32 mt-16'>
      <button onClick={()=> navigate(-1)} className='flex items-center gap-2 mb-2 text-gray-500 cursor-pointer'>
        <img src={assets.arrow_icon} alt="" className='rotate-180 opacity-65'/>
        Back to all Outfits
      </button>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
        {/*Left: Outfit Image and details*/}
        <div className='lg:col-span-2'>
          <img src={outfit.image} alt="" className='w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md' />
          <div className='space-y-6'>
            <div>
              <h1 className='text-3xl font-bold'>{outfit.brand} {outfit.model}</h1>
              <p className='text-gray-500 text-lg'>{outfit.category} • {outfit.year} </p>
            </div>
            <hr className='border-borderColor my-6' />
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
              {[]}

            </div>

          </div>

        </div>
        {/*Right: booking form*/}
        <form action=""></form>

      </div>

    </div>
  ) : <p>Loading ...</p>
}

export default OutfitDetails