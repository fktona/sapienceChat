import React from 'react'
import withAuth from '@/hooks/withAuth'

const Messages = () =>{
  return (
    <div>
      {' '}
      <p className="text-action-green md:hidden block lg:block text-sm  font-extrabold">
        SapienceChat
      </p>
    </div>
  )
}

export default withAuth(Messages)
