'use client'
import React from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { NavLinkProps } from '@/types'


 const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const segment = useSelectedLayoutSegment()

  const isActive = segment === children[1].props.children.toLowerCase().trim()

  console.log( segment, typeof children[1].props.children.toLowerCase())

  return (
    <Link href={href} className={` md:w-fit md:px-2 lg:px-0 lg:w-full transition-all 
    lg:hover:border-[1px] flex md:text-center  items-center md:justify-center lg:justify-start
    gap-2 border-action-green lg:text-start lg:rounded-xl md:rounded-md duration-300 relative lg:pl-6 
     py-2 text-white 
    ${isActive ? 'bg-action-green text-black ' : ''}`}>
        {children}
    </Link> 
  )
}

export default NavLink