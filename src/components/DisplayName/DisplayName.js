import React from 'react'
import { MdOutlineEdit } from "react-icons/md";

const DisplayName = () => {
  return (
    <div className='bg-white rounded-md w-full  h-64'>
     <div className="flex justify-center items-center">
     <button className='mb-2 text-xs mt-2 bg-black text-white rounded-sm py-1 px-2'>
     Save Colour
     </button>
     </div>
      <div className=''>
        <p className=" text-xs mr-6 text-gray-200 flex justify-end items-center">
        <span className=''><MdOutlineEdit /></span>
        Edit Display Name</p>
      </div>
      <hr/>
      <section className='w-full flex flex-col justify-center items-center'>
        <h2 className='mb-2'>Display Name</h2>
        <div>
      <input className="opacity-50 bg-gray-300 text-gray-600 cursor-not-allowed" disabled />
       </div>
       <button className='mb-10 text-xs mt-2 bg-black text-white rounded-sm py-1 px-2'>Save Display Name</button>
       <hr/>
       <div className='border py-2 w-full flex justify-center items-center '>
            <p className='text-sm flex justify-center items-center'><span className='text-lg'>Username:</span>ayeniisaac1on1@gmail.com</p>
            
        </div>
        <hr/>
        <div><p>Role:</p></div>
      </section>
      <section>
      
       
      </section>
    </div>
  )
}

export default DisplayName
