import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

export const UtilitiesComponent = () => {
  return (
    <div className='bg-white rounded-md py-4 px-4'>
        <ul className='flex justify-between pb-5 shadowbotom'>
            <li>Electricity Bill</li>
            <li className=''>Internet Data</li>
            <li>Flight</li>
            <li>Top Up</li>
        </ul>
        <div className="flex pt-4">
            <div className="block pt-1 ">
                <label htmlFor="" className='font-semibold text-xs'>Phone Number</label>
                <div className='flex'>
                    <div className='border rounded-l-md inline bg-[#E8DDDF]'>
                        <RiArrowDropDownLine className='bg-[#E8DDDF] text-2xl'/>
                    </div>
                    <input type="text" className='border rounded-r-md w-2/3' />
                </div>
            </div>
            <div className="block pt-1">
            <label htmlFor="" className='font-semibold text-xs'>Phone Number</label>
            <div className='flex'>
                    <input type="text" className='border rounded-l-md w-2/3' />
                    <div className='border rounded-r-md inline bg-[#E8DDDF]'>
                        <RiArrowDropDownLine className='bg-[#E8DDDF] text-2xl'/>
                    </div>
                </div>
            </div>
            <div className="block text-xs py-5">
                <button className='px-3 w-24 bg-[#2A967F] text-white'>Buy Now</button>
            </div>
        </div>
    </div>
  )
}
