import React from 'react'
import Identity from '@/assets/identity'
import { ArrowBack } from '@mui/icons-material'

export default function sidebar() {
  return (
    <div className="p-3 flex flex-col gap-5">
      <div className="py-2 border-1">
        <Identity />
      </div>
      <div>
        <h6>histroy</h6>
        <ul></ul>
      </div>
      <button>
        <ArrowBack /> Back
      </button>
    </div>
  )
}
