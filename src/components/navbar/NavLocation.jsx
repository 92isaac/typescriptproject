import React from 'react'
import {  RiArrowDropRightLine } from 'react-icons/ri'

const NavLocation = () => {
  return (
    <nav className='hidden md:block h-20 w-full'>
        <ul className='flex gap-4 mt-10 text-xs font-semibold'>
            <li className='text-[#4BA791]'>Home <RiArrowDropRightLine className='text-2xl inline'/></li>
            <li className='text-[#4BA791]'>Men's Fashion <RiArrowDropRightLine className='text-2xl inline'/> </li>
            <li className='text-[#4BA791]'>Men's Top <RiArrowDropRightLine className='text-2xl inline'/></li>
            <li className='text-[#4BA791]'>Casual Shirt <RiArrowDropRightLine className='text-2xl inline'/></li>
            <li>Essential Men's Regular-Fit-Long-Sleeve Oxford Shirt <RiArrowDropRightLine className='text-2xl inline'/></li>
        </ul>
    </nav>
  )
}

export default NavLocation