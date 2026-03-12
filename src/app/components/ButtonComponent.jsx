"use client"

import { BookMarked, SortAsc, SortDesc } from 'lucide-react'
import React from 'react'

export default function ButtonComponent({ setReversed, setShowBookmarks, showBookmarks }) {
    return (
        <div className='w-full flex justify-between my-[20px]'>
            <div>
                <button className='bg-white text-black px-2 rounded-[10px] text-[18px] cursor-pointer' onClick={() => setShowBookmarks(false)}>
                    Back
                </button>
            </div>
            <div className='flex gap-[20px] items-center text-[24px]'>
                <div
                    onClick={() => setShowBookmarks(prev => !prev)}
                    className={`flex gap-[10px] items-center cursor-pointer ${showBookmarks ? 'text-yellow-400' : 'hover:text-yellow-400'}`}
                >
                    <p className='text-[20px]'>Your Bookmark</p>
                    <BookMarked />
                </div>
                <div className='hover:text-yellow-400 cursor-pointer'>
                    <SortAsc onClick={() => setReversed(true)} />
                </div>
                <div className='hover:text-yellow-400 cursor-pointer'>
                    <SortDesc onClick={() => setReversed(false)} />
                </div>
            </div>
        </div>
    )
}
