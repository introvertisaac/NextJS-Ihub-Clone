import React from 'react'
import {BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube} from 'react-icons/bi'
import {PiDotsThreeOutlineFill} from 'react-icons/pi'

const TopbarIcons = () => {
  return (
    <div>
        <div className='flex '>
                <BiLogoFacebook  size={22} className=' text-black justify-between mr-2'/>
                <BiLogoTwitter size={22} className=' text-black justify-between mr-2'/>
                <BiLogoInstagram size={22} className=' text-black justify-between mr-2'/>
                <PiDotsThreeOutlineFill size={22} className=' text-black justify-between mr-2'/>
                <BiLogoYoutube size={22} className=' text-black justify-between mr-2'/>
        </div>
    </div>
  )
}

export default TopbarIcons