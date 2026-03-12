import React from 'react'
import { sidebarLinks } from '../lib/sidebarlinks'

export default function SidebarComponent() {
  return (
    <aside className='sticky top-[80px] h-full'>
      <div className="w-[300px] h-full bg-[#404040] p-[15px] text-gray-300 rounded-[10px]">
        {/* TITLE */}
        <p className='text-[14px] mb-[5px]'>MENU</p>
        <ul className='flex flex-col gap-[8px]'>
          {
            sidebarLinks.map((link) => (
              <li key={link.value} className='w-full bg-gray-800 p-[13px] rounded-[20px] tracking-wide hover:bg-gray-800/50 hover:text-white'>
                <a className='inline-block w-full' href={link.href}>{link.value}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </aside>
  )
}
