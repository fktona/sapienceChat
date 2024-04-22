'use client'
import { useState } from 'react'

const useToggle = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const toggle = () => {
    setToggleMenu((prev) => !prev)
    console.log(toggleMenu)
  }

  return {
    toggleMenu,
    toggle,
  }
}

export default useToggle
