'use client'
import React, { useState } from 'react'
import CustomModal from '@/app/modal'
import Button from '../button'
import { ModalProps } from '@/types'
import CustomizedSteppers from '../stepper'
import FillingDetails from '../uploadDocument/fillingDetails'
import SelectAssistance from '../uploadDocument/selectAssistance'
import FileInput from '../uploadDocument/uploadDocument'
import UploadProvider from '@/context/uploadDocument/uploadInfo'


type addNewDocument = Omit<ModalProps, 'children'>
export default function AddNew({ open, handleClose }: addNewDocument) {
  const [toggle, setToggle] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const handleNext = () => {
    setToggle(true)
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setToggle(false)
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <CustomModal open={open} handleClose={handleClose}>
      <UploadProvider>
      <div className="flex flex-col justify-between p-6 absolute h-full w-full  ">
        <CustomizedSteppers count={toggle} Nextsteps={activeStep} />
        {activeStep === 0 && <FillingDetails />}
        {activeStep === 1 && <SelectAssistance />}
        {activeStep === 2 && <FileInput />}
        <div className="flex gap-3 items-end justify-end">
          {activeStep > 0 && <Button onClick={handleBack}>Back</Button>}
          <Button onClick={handleNext}>
            {activeStep < 2 ? 'Continue' : 'Submit'}
          </Button>
        </div>
      </div>
      </UploadProvider>
    </CustomModal>
  )
}
