import React from 'react'
import {AiOutlineGooglePlus} from 'react-icons/ai'
import {BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube} from 'react-icons/bi'
import {PiDotsThreeOutlineFill} from 'react-icons/pi'

const Icongroup = () => {
  return (
    <div className='flex flex-row justify-center text-center align-middle py-8'>
        <div className='border border-black mr-3'><BiLogoFacebook size={22} className=' text-black justify-between m-3'/></div>
        <div className='border border-black mr-3'><BiLogoTwitter size={22} className=' text-black justify-between m-3'/></div>
        <div className='border border-black mr-3'><AiOutlineGooglePlus size={22} className=' text-black justify-between m-3'/></div>
    </div>
  )
}

export default Icongroup