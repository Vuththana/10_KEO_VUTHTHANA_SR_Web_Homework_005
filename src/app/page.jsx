
import React from 'react'
import NavbarComponent from './components/NavbarComponent'
import SidebarComponent from './components/SidebarComponent';
import ItemComponent from './components/ItemComponent';
import { getData } from './utils/getData';

export default function Home() {
  const props = getData(true);  
  return (
    <div className='flex flex-col h-screen'>
      <NavbarComponent />
      <div className='flex overflow-hidden p-[10px]'>
        <SidebarComponent />
        <div className='flex w-full px-[10px] overflow-y-auto'>
          <ItemComponent props={props}/>
        </div>
      </div>
    </div>
  )
}
