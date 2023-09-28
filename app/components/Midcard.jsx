import React from 'react'
import Icongroup from './Icongroup'

const Midcard = () => {
  return (
    <div className='flex flex-col justify-center text-center align-middle py-16'>
        <div className='sm:text-2xl md:text-3xl  font-semibold'>Django Developer Internship</div>
        <div className='sm:text-xs md:text-xs font-normal flex justify-center flex-wrap '>
            <a className='mr-2 mt-8'>JOB BY <a className='font-bold'>CERTEON TECHNOLOGY</a> </a>
            <a className='mr-2 mt-8'> IN DEVELOPER  <a className='font-bold'>(INTERNSHIP)</a> </a>
            <a className='mr-2 mt-8'>ADDED ON <a className='font-bold'>25 SEP, 2023</a> - APPLY BY <a className='font-bold'>15 OCT, 2023</a></a>
        </div>
        <div>
            <Icongroup/>
        </div>
    </div>
  )
}

export default Midcard