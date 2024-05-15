import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useUpload } from '@/context/uploadDocument/uploadInfo'
import { UploadContextProps } from '@/types'

export default function SelectAssistance() {

  const {  dispatch } = useUpload() as UploadContextProps



  const [selectedAssistance, setSelectedAssistance] = useState<string | null>(
    null,
  )

  useEffect(() => {
    console.log(selectedAssistance)
  }, [selectedAssistance])

  const handleSelect = (assistant: string) => {
    setSelectedAssistance(assistant)
    dispatch({type:'AVATAR',payload:{assistant}})
  }
  return (
    <div className="leftAnimation  flex  gap-5 justify-center ">
      <button
        onClick={() => handleSelect('Bob')}
        className="flex flex-col cursor-pointer  items-center justify-center gap-2"
      >
        <span
          className={` ${selectedAssistance === 'Bob' && ' p-2 border-dotted border-spacing-1 border-4 rounded-full border-[#757cf6]'}`}
        >
          <Image
            alt="Bob assistance"
            src="/avatar/Bob.jpg"
            width={100}
            height={100}
            className="rounded-full"
          />
        </span>
        <span className="text-lg font-semibold">Bob</span>
      </button>
      <button
        onClick={() => handleSelect('Nova')}
        className="flex flex-col cursor-pointer items-center justify-center gap-2"
      >
        <span
          className={` ${selectedAssistance === 'Nova' && 'p-2 border-dotted border-spacing-1 border-4 rounded-full border-[#757cf6]'}`}
        >
          <Image
            alt="Luna assistance"
            src="/avatar/Nova.jpg"
            width={100}
            height={100}
            className="rounded-full"
          />
        </span>
        <span className="text-lg font-semibold">Luna</span>
      </button>
      <div
        onClick={() => handleSelect('Alice')}
        className="flex flex-col cursor-pointer items-center justify-center gap-2"
      >
        <span
          className={` ${
            selectedAssistance === 'Alice' &&
            'p-2 border-dotted border-spacing-1 border-4 rounded-full border-[#757cf6]'
          }`}
        >
          <Image
            alt="Alice assistance"
            src="/avatar/Nova.jpg"
            width={100}
            height={100}
            className="rounded-full"
          />
        </span>
        <span className="text-lg font-semibold">Alice</span>
      </div>
    </div>
  )
}
