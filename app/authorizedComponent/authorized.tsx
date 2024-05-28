import React from 'react'
import AuthProvider, { useAuth } from '@/context/Auth/authinfo'
import WithAuth from '@/hooks/withAuth'
import protectedRoute from '@/libs/verifyUser';

export default function  Authorized({
  children,
}: {
  children?: React.ReactNode
}) {

  const { state , dispatch } = useAuth();
 
return (
  <div>
     { children}
  </div>
)
}
