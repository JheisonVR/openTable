import React from 'react'
import Image from 'next/image';
import loadingKawaii from '../public/loading/349-3495619_plato-de-sopa-kawaii-removebg-preview.png'

const Loading = () => {
  return (
    <div 
        className='h-screen bg-gradient-to-r from-zinc-100 to-stone-200 flex flex-col justify-center items-center'
    >
        <Image
            src={loadingKawaii}
            alt='loading'
            className='animate-bounce'
        />
        <div
            className='border-none px-9 py-14 animate-pulse '
        >
            <h3
                className='text-3xl font-bold'
                >Loading...
            </h3>
        </div>
    </div>
  )
}

export default Loading;