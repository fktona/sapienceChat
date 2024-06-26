import React from 'react'
import { ButtonProps } from '@/types'

export default function Button({ children, icons, onClick ,disabled  }: ButtonProps) {
  
  return (
    <div className="relative flex justify-end">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${disabled ?'bg-gray-200':'bg-action-green'} flex gap-2 items-center justify-center 
        text-black px-4 py-2 rounded-lg`}
      >
        {icons}
        {children}
      </button>
    </div>
  )
}
