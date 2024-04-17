import React from 'react'

export default function Button({children , icons}: {children: React.ReactNode , icons?: React.ReactNode}) {
    return (
        <div className=' relative flex justify-end'>
        <button className='bg-action-green flex gap-2 items-center justify-center  text-black px-4 py-2 rounded-lg'>{icons}{children}</button>
        </div>
    )
}
