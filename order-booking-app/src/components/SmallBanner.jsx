import React from 'react'
import  SBC1 from "../assets/img/SBC1.png"
import  SBC2 from "../assets/img/SBC2.png"
import  SBC3 from "../assets/img/SBC3.png"

function SmallBanner() {
  return (
    <div className='flex  m-3 p-4 my-10'>


      <div className='w-1/3 mx-5 rounded-xl'>
           <img className='w-full h-full rounded-xl'
            src='../src/assets/img/SBC1.png'
           />
      </div>

      
      <div className='w-1/3 h- mx-5 rounded-xl'>
           <img
           className='w-full h-full rounded-xl'
            src='../src/assets/img/SBC2.png'
           />
      </div>

      
      <div className='w-1/3 h- mx-5 rounded-xl'>
           <img
           className='w-full h-full rounded-xl'
            src='../src/assets/img/SBC3.png'
           />
      </div>
      
    </div>
  )
}

export default SmallBanner
