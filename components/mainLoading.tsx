import React from 'react'
import Identity from '@/assets/identity'
export default function 
MainLoading() {
  return (
    <div className='absolute mx-auto my-auto w-[50vw] h-[50vh] 
    left-0 top-0 right-0 bottom-0 bg-action-green/10 z-[10000] backdrop-blur-sm flex items-center justify-center'>
        <Identity />
    </div>
  )
}
