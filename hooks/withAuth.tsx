'use client'
// withAuth.js
import React from 'react';
import {  redirect } from 'next/navigation';
import { useAuth } from '@/context/Auth/authinfo';
import AuthProvider from '@/context/Auth/authinfo';
import Identity from '@/assets/identity';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import MenuProvider from '@/context/menuContext';
import Authorized from '@/app/authorizedComponent/authorized';
import { useEffect } from 'react';
import protectedRoute from '@/libs/verifyUser';


const withAuth = (WrappedComponent: React.ComponentType<any>) => {
    
        
    return (props: any) => {

      const { state , dispatch } = useAuth();

  const { verifyUser } = protectedRoute({dispatch})
  const {isError , isLoading , isSuccess} =verifyUser


        useEffect (() => {
            if (!state.userId && !isSuccess && isError && !isLoading) {
                return redirect('/authorization');
            }
        
        }, [])

        return (
            <Authorized>
              {!isLoading &&
            <>
            <MenuProvider>
              <div className="w-fit lg:hidden relative left-0 ">
                <Identity />
              </div>
              <Navbar />
              <div className="mb-20"></div>
              <div
                className={`
        relative`}
              >
                <Sidebar />
              </div>
            </MenuProvider>
            <main className=" relative lg:max-w-[80vw] w-full md:w-[90%] px-4 float-right">
                <WrappedComponent {...props} />
            </main>
            </>}
            </Authorized>
        )
    };
};

export default withAuth;
