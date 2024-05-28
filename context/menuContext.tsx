'use client'
import { useContext, useState, createContext } from 'react'
import { ReactNode } from 'react'
// import { MenuProps } from '@/types'

const menuContext = createContext<any>(null)

const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const toggle = () => {
    setToggleMenu((prev) => !prev)
    console.log(toggleMenu)
  }
  return (
    <menuContext.Provider value={{ toggleMenu, toggle }}>
    {children}
    </menuContext.Provider>
  )
}
export default MenuProvider
export const MenuToggle = () => useContext(menuContext)
