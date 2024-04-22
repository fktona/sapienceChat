'use client'
import React, { useState } from 'react'
import CustomModal  from '@/app/modal'
import Fuctions from '@/libs/utils'
import InputField from '../input' 
import { Category } from '@mui/icons-material'
import Button from '../button'
import { ModalProps } from '@/types'

type addNewDocument = Omit<ModalProps , 'children'>
export default function AddNew ({open , handleClose}:addNewDocument) {
  const{ handleInputChange} = Fuctions()
  const [formField , setFormField] = useState({
    websiteName: '',
    category: '',
    purpose: '',

})
  return (
    <CustomModal
      open={open} 
      handleClose={handleClose}
    >
    
  <InputField
  value={formField.websiteName}
  onChange={(e) => handleInputChange(e, setFormField)}
  name='websiteName'
  type='text'
  label='Website Name/Company/Organizations'
  required={true}
/>

<InputField
  value={formField.category}
  onChange={(e) => handleInputChange(e, setFormField)}
  name='category'
  type='text'
  label='Category'
  required={true}
/>
<InputField
  value={formField.purpose}
  onChange={(e) => handleInputChange(e, setFormField)}
  name='purpose'
  type='text'
  label='Purpose'
  required={true}
/>
  <Button>Continue</Button>
    </CustomModal>
  )
}
