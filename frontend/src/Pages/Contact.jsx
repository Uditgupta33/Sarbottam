import React from 'react'
import {assets} from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full rounded md:max-w-[360px]' src={assets.sarbottamLogo1} alt="" />

        <div className='flex flex-col justify-center items-start gap-6' >
          <p className='font-semibold text-lg text-gray-600'>Visit Us</p>
          <p className='text-gray-500'>Panitanki-8 <br /> Birgunj, Nepal</p>
          <p className='text-gray-500'>tel: (000) 000-0000 <br /> email: sarbottam9@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>CAREERS AT SARBOTTAM</p>
          <p className='text-gray-500' >Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore</button>
        </div>
      </div>
      </div>
  )
}

export default Contact