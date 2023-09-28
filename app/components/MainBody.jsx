import React from 'react'
import Description from './Description'
import Bag from './Bag'

const MainBody = () => {
  return (
    
        <div className='flex flex-row flex-wrap bg-white'>

        <div className='w-2/3 px-12 py-12 border-r-2'>
             <Description/>
        </div>
        <div className=' px-12 py-12'> <Bag/></div>
        </div>
    
  )
}

export default MainBody