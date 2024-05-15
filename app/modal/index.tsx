import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
// import Button from '@mui/material/Button';
import { ModalProps } from '@/types'
import { Backdrop } from '@mui/material'
import { display, maxWidth, minHeight, minWidth } from '@mui/system'
import Close from '@mui/icons-material/Close'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 750,
  minWidth: 600,
  minHeight: 450,
  bgcolor: 'white',
  boxShadow: 24,
  // pt: 2,
  // px: 5,
  // pb: 3,
}

const CustomModal: React.FC<ModalProps> = ({
  children,
  open,
  handleClose,
  size,
}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={(_, reason) => {
          if (reason !== 'backdropClick') {
            handleClose()
          }
        }}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <button
            onClick={handleClose}
            className="absolute  bg-red-700 z-[8] w-8 flex items-center justify-center cursor-pointer
           aspect-square top-5 right-3 rounded-full text-white hover:shadow-md hover:top-4"
          >
            <Close />
          </button>
          {children}
        </Box>
      </Modal>
    </div>
  )
}
export default CustomModal
