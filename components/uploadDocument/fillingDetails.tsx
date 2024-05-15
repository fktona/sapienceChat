'use client'
import Button from '../button'
import CustomizedSteppers from '../stepper'
import InputField from '../input'
import Fuctions from '@/libs/utils'
import { useState } from 'react'
import { useUpload } from '@/context/uploadDocument/uploadInfo'
import { UploadContextProps } from '@/types'

export default function FillingDetails() {
  const { state, dispatch } = useUpload() as UploadContextProps
  


  return (
    <div>
      <div className="flex  gap-3">
        <InputField
          value={state?.name}
          onChange={(e)=>dispatch({type:'INPUT_CHANGE',payload:e.target})}
          name="name"
          type="text"
          label="Website Name/Company/Organizations"
          required={true}
        />

        <InputField
          value={state?.category}
          onChange={(e)=>dispatch({type:'INPUT_CHANGE',payload:e.target})}
          name="category"
          type="text"
          label="Category"
          required={true}
        />
      </div>
      <div>
        <InputField
          value={state?.purpose}
          onChange={(e)=>dispatch({type:'INPUT_CHANGE',payload:e.target})}
          name="purpose"
          type="text"
          label="Purpose"
          required={true}
          className="w-full"
        />
      </div>
    </div>
  )
}
