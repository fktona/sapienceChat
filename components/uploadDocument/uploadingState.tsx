import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import { useQueryClient } from '@tanstack/react-query';

export default function UploadingState({mutation}:{mutation: any}) {
  const queryClient = useQueryClient()

  const {isError ,isPending , error ,isSuccess } = mutation
  
  const fetching = queryClient.isFetching({queryKey: ['bot']})
  
  return (
    <div className='flex flex-col items-start px-12 justify-center gap-4'>
       <div className={`flex text-black  items-center justify-center gap-2`}>
        {isPending &&   <><CircularProgress size={16} color='inherit' /> <span className={`${isPending && 'text-gray-400'}`}>Uploading document...</span></>}
        {isError && <><ErrorIcon color='error' /> {error?.response.data.error}</>}
        {isSuccess && <><CheckCircleIcon color='success' /> Document uploaded successfully</>}
       </div>
       <div className='flex items-center justify-center gap-2'>
        {isPending || fetching > 0 ? <><CircularProgress size={16} color='inherit' /><span className='text-gray-400'>Creating chatbot...</span> </>:null}
        {isSuccess && !fetching&&<><CheckCircleIcon color='success' /> Chatbot created</>}
       </div>
    </div>
  )
}
