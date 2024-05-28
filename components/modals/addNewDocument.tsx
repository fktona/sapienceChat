'use client'
import React, { useState } from 'react'
import CustomModal from '@/app/modal'
import Button from '../button'
import { ModalProps } from '@/types'
import CustomizedSteppers from '../stepper'
import FillingDetails from '../uploadDocument/fillingDetails'
import SelectAssistance from '../uploadDocument/selectAssistance'
import FileInput from '../uploadDocument/uploadDocument'
import fileMutation from '@/libs/upload'
import { useUpload } from '@/context/uploadDocument/uploadInfo'
import UploadingState from '../uploadDocument/uploadingState'
import CircularProgress from '@mui/material/CircularProgress';

type addNewDocument = Omit<ModalProps, 'children'>
export default function AddNew({ open, handleClose }: addNewDocument) {
  const {mutation} = fileMutation()
  const [toggle, setToggle] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const handleNext = () => {
    setToggle(true)
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    console.log(activeStep)
    activeStep === 2 && mutation.mutate()
  }
  
  const { state } = useUpload() as any

  const {isError ,isPending , error ,isSuccess } = mutation

  

  const handleBack = () => {
    setToggle(false)
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <CustomModal open={open} handleClose={handleClose}>
      
      <div className="flex flex-col justify-between p-6 absolute h-full w-full  ">
        <CustomizedSteppers count={toggle} Nextsteps={activeStep} />
        {activeStep === 0 && <FillingDetails />}
        {activeStep === 1 && <SelectAssistance />}
        {activeStep === 2 && <FileInput />}
        {activeStep === 3 && <UploadingState mutation={mutation} />}
        <div className="flex gap-3 items-end justify-end">
        {!isPending || isError  ? <Button onClick={handleBack}>Back</Button>:null}
       {isSuccess || isPending ?
       null:
          <Button
          onClick={handleNext}>
             { activeStep < 2 ?'Continue':'Submit'}
          </Button>
        }
        </div>
      </div>
    </CustomModal>
  )
}
