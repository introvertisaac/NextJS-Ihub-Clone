import React from 'react'
import TopbarIcons from './TopbarIcons'

const Footer = () => {
  return (
    <div className='w-full'>
        <div className='flex pb-9 pt-9 mx-10 justify-between flex-wrap'>
        <div><p className='font-semibold text-sm '>Copyright © 2023 iHub Nairobi. All Rights Reserved</p></div>
        <div><p className='font-semibold text-xl'>Connect Build Invest</p></div>
        <div><TopbarIcons/></div>
        </div>
        
    </div>
  )
}

export default Footer