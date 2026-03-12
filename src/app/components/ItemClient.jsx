"use client"
import React, { useEffect, useState } from 'react'
import { getData } from '../utils/getData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faBookmark, faSortAlphaAsc, faSortAlphaDesc } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import ItemModal from './ui/ItemModal';

export default function ItemClient({ props }) {
    const [reversed, setReversed] = useState(true);
    const [data, setData] = useState(props);
    const [openView, setOpenView] = useState(false);
    const [selectedView, setSelectedView] = useState(null);
    const [bookmarkedIds, setBookmarkedIds] = useState([6,2,1]);
    const [showBookmarks, setShowBookmarks] = useState(false);
    useEffect(() => {
        setData(getData(reversed))
    }, [reversed])

    const toggleBookmark = (id) => {
        setBookmarkedIds(prev =>
            prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
        );
    };

    const displayedData = showBookmarks
        ? data.filter(item => bookmarkedIds.includes(item.id))
        : data;

    return (
        <>
            <div className='w-full h-screen rounded-[10px]'>
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
                            <FontAwesomeIcon icon={faBookBookmark} />
                        </div>
                        <div className='hover:text-yellow-400 cursor-pointer'>
                            <FontAwesomeIcon icon={faSortAlphaAsc} onClick={() => setReversed(true)} />
                        </div>
                        <div className='hover:text-yellow-400 cursor-pointer'>
                            <FontAwesomeIcon icon={faSortAlphaDesc} onClick={() => setReversed(false)} />
                        </div>
                    </div>
                </div>

                {showBookmarks && bookmarkedIds.length === 0 && (
                    <div className='flex justify-center items-center mt-[40px] text-gray-400 text-[18px]'>
                        No bookmarks yet!
                    </div>
                )}
                <div className='flex flex-col gap-[20px]'>
                    {displayedData.map(value => (
                        <div className='bg-gray-900 rounded-[15px] p-[40px]' key={value.id}>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-[20px]'>
                                    <div className='relative w-[130px] h-[80px]'>
                                        <Image
                                            src={value.image}
                                            fill
                                            className='rounded-[15px]'
                                            alt='Image'
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <div className='flex gap-[20px] items-center'>
                                            <p className='text-[20px] font-bold'>{value.item_name}</p>
                                            <p className='text-gray-300'>${value.item_price}</p>
                                            <button
                                                onClick={() => toggleBookmark(value.id)}
                                                className={bookmarkedIds.includes(value.id) ? 'text-yellow-300 cursor-pointer' : 'hover:text-yellow-300 cursor-pointer'}
                                            >
                                                <FontAwesomeIcon className='text-[20px]' icon={faBookmark} />
                                            </button>
                                        </div>
                                        <p className='font-light text-gray-300'>{value.item_description}</p>
                                    </div>
                                </div>
                                <button className='bg-gray-800 p-[10px] font-bold rounded-[10px] cursor-pointer hover:bg-white hover:text-black'
                                    onClick={() => {
                                        setSelectedView(value)
                                        setOpenView(true)
                                    }}>
                                    View
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {openView && (
                <ItemModal item={selectedView} onClose={() => setOpenView(false)} />
            )}
        </>
    )
}
