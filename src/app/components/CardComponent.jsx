"use client"
import { Bookmark } from 'lucide-react';
import Image from 'next/image';
import React from 'react'


export default function CardComponent(
    { items, setBookmarkedIds, bookmarkedIds, setSelectedView, setOpenView }
) {

    const toggleBookmark = (id) => {
        console.log(id)
        setBookmarkedIds(prev =>
            prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
        );
    };
    return (
        <>
            {items.map((item) => (
            <div className='bg-gray-900 rounded-[15px] p-[40px]' key={item.id}>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-[20px]'>
                        <div className='relative w-[130px] h-[80px]'>
                            <Image
                                src={item.image}
                                fill
                                className='rounded-[15px]'
                                alt='Image'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <div className='flex gap-[20px] items-center'>
                                <p className='text-[20px] font-bold'>{item.item_name}</p>
                                <p className='text-gray-300'>${item.item_price}</p>
                                <button
                                    onClick={() => toggleBookmark(item.id)}
                                    className={bookmarkedIds.includes(item.id) ? 'text-yellow-300 cursor-pointer' : 'hover:text-yellow-300 cursor-pointer'}
                                >
                                    <Bookmark className='text-[20px]' />
                                </button>
                            </div>
                            <p className='font-light text-gray-300'>{item.item_description}</p>
                        </div>
                    </div>
                    <button className='bg-gray-800 p-[10px] font-bold rounded-[10px] cursor-pointer hover:bg-white hover:text-black'
                        onClick={() => {
                            setSelectedView(item)
                            setOpenView(true)
                        }}>
                        View
                    </button>
                </div>
            </div>
            ))}
        </>
    )
}
