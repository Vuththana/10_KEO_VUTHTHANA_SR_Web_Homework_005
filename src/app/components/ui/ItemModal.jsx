import React from 'react'

export default function ItemModal({ item, onClose }) {
  if (!item) return null;
  return (
    <div className="w-full h-full overflow-hidden inset-0 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.3)]" style={{ position: "fixed" }}>

      <div className='w-[400px] bg-black flex flex-col p-[20px] rounded-[15px]'>
        <div className='w-full flex justify-between'>
          <p className='font-bold'>Items Details</p>
          <button className='border-2 px-[5px] rounded-[5px] cursor-pointer' onClick={() => onClose(true)}>Close</button>
        </div>

        <p className='font-bold'>ID: <span className='font-normal'>{item.id}</span></p>
        <p className='font-bold'>Name: <span className='font-normal'>{item.item_name}</span></p>
        <p className='font-bold'>Price: <span className='font-normal'>{item.item_price}</span></p>
        <p className='font-bold'>Description: </p>
        <p className='font-normal'>{item.item_description}</p>
      </div>
    </div>
  )
}
