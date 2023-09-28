import React from 'react'
import Image from 'next/image'
import {BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube} from 'react-icons/bi'
import {PiDotsThreeOutlineFill} from 'react-icons/pi'
import TopbarIcons from './TopbarIcons'



const Topbar = () => {
  return (
    <div className='bg-white flex justify-between flex-wrap'>
        <div className='py-2 pl-3'><Image src={"/logo.png"} width={110} height={110} className='' alt='logo'/></div>
        <div className='flex cursor-pointer'>
            <a className='pr-10 align-middle py-8 font-bold text-black  text-xs'>COMMUNITY</a>
            <a className='pr-10 align-middle py-8 font-bold text-black text-xs'>JOBS</a>
            <a className='pr-10 align-middle py-8 font-bold text-black text-xs'>BLOG</a>
            <a className='pr-10 align-middle py-8 font-bold text-black text-xs'>RESOURCES</a>
        </div>
        <div className='py-8'> <TopbarIcons/></div>
    </div>
  )
}

export default Topbar