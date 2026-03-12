"use client"
import React, { useEffect, useState } from 'react'
import { getData } from '../utils/getData'
import Image from 'next/image';
import ItemModal from './ui/ItemModal';
import { Bookmark, BookMarked, SortAsc, SortDesc } from 'lucide-react';
import CardComponent from './CardComponent';
import ButtonComponent from './ButtonComponent';

export default function ItemClient({ props }) {
    const [reversed, setReversed] = useState(true);
    const [data, setData] = useState(props);
    const [openView, setOpenView] = useState(false);
    const [selectedView, setSelectedView] = useState(null);
    const [bookmarkedIds, setBookmarkedIds] = useState([6, 1]);
    const [showBookmarks, setShowBookmarks] = useState(false);

    useEffect(() => {
        setData(getData(reversed))
    }, [reversed])

    
    const displayedData = showBookmarks
        ? data.filter(item => bookmarkedIds.includes(item.id))
        : data;
    return (
        <>
            <div className='w-full h-screen rounded-[10px]'>

                <ButtonComponent setReversed={setReversed} setShowBookmarks={setShowBookmarks} showBookmarks={showBookmarks} />


            {showBookmarks && bookmarkedIds.length === 0 && (
                <div className='flex justify-center items-center mt-[40px] text-gray-400 text-[18px]'>
                    No bookmarks yet!
                </div>
            )}
                <div className='flex flex-col gap-[20px]'>
                    <CardComponent
                        items={displayedData}
                        showBookmarks={showBookmarks}
                        setOpenView={setOpenView}
                        setSelectedView={setSelectedView}
                        bookmarkedIds={bookmarkedIds}
                        setBookmarkedIds={setBookmarkedIds} />

                </div>
            </div>
            {openView && (
                <ItemModal item={selectedView} onClose={() => setOpenView(false)} />
            )}
        </>
    )
}
