import React from 'react'
import { dummyOutfitData } from '../../assets/assets'

const ManageOutfits = () => {

  const [outfits,setOutfits] = useState([])

  const fetchOwnerOutfits = async ()=>{
    setOutfits(dummyOutfitData)
  }
  return (
    <div>
        
    </div>
  )
}

export default ManageOutfits