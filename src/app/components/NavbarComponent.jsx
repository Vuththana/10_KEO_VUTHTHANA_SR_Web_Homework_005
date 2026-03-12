import React from 'react'
import Image from 'next/image'

export default function NavbarComponent() {

  return (
    <nav className='sticky top-0'>
      <div className='flex justify-between items-center  p-[5px] bg-[#404040]'>
        <div className='flex items-center gap-[20px]'>
          {/* PROFILE IMAGE */}
          <div className='relative w-[60px] h-[60px]'>
            <Image src="https://i.pinimg.com/736x/8d/5c/d0/8d5cd06a586e69e91a672c5dfa622d3b.jpg"
              fill
              alt="Profile Picture"
              className='rounded-full object-cover border-white border-2'
              loading="lazy"
            />
          </div>
          <p className='text-[18px] font-bold'>Dashboard</p>
        </div>
        {/* SEARCH */}
        <div className='w-[300px]'>
          <input
            className='w-full px-[12px] py-[10px] rounded-[10px] bg-[#252525] tracking-[1px]'
            type="text" placeholder='Search by item name...' />
        </div>
      </div>
    </nav>
  )
}