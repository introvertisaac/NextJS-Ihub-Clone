import Image from 'next/image'
import React from 'react'
import {BsBagDash} from 'react-icons/bs'

const Bag = () => {
  return (
    <div className='flex flex-wrap '>
        <div className='bg-gray-800'> <BsBagDash  className='my-5 mx-5' color='white' size={30}/> </div>
        <div className='ml-5'>
            <h3 className='font-semibold'>Certeon Technology</h3>
            <a>https://certeon.technology</a>
            <h3 className='font-semibold text-gray-500 text-xs'>WESTLANDS, KE</h3>
        </div>
    </div>
  )
}

export default Bag