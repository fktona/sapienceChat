import { useSelectedLayoutSegment } from 'next/navigation'
import React from 'react'

export default function Navigation({children}: {children: React.ReactNode}) {
  const segment = useSelectedLayoutSegment()
  const authorizationPage = segment === 'authorization'

  return (
    <main>
    {!authorizationPage && children}
    </main>
  )
}
