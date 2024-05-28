import React, { useState } from 'react'
import Image from 'next/image'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import Close from '@mui/icons-material/Close'
import{useUpload} from '@/context/uploadDocument/uploadInfo'
import { UploadContextProps } from '@/types'

const FileInput = () => {
  const [fileName, setFileName] = useState('')
  const { state, dispatch } = useUpload() as UploadContextProps
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0] || null;
    console.log(file);
    if (!file || file.type !== 'application/pdf' ) return;

    const fileName = file ? file.name : '';
    dispatch({ type: 'UPLOAD_DOCUMENT', payload: { file } });
    setFileName(fileName);
    console.log(state);  
  };

  const handleFileDelete = () => {
    dispatch({ type: 'FILE_CHANGE', payload: { file: null, fileName: '' } });
    setFileName('');
  }

  

  return (
    <div className="flex leftAnimation flex-col gap-1 px-10 items-center justify-center">
      <label
        htmlFor="fileInput"
        className="cursor-pointer flex flex-col gap-2 justify-center items-center w-full min-h-[120px] text-center border-dashed border-spacing-1 border-2  border-[#757cf6] bg-gray-300 px-4 py-2 rounded-md shadow-sm"
      >
        <CloudUploadIcon sx={{ width: '500px' }} />
        <span className="text-sm font-medium text-gray-700">Choose File</span>
        <input
          id="fileInput"
          type="file"
          className=""
          onChange={handleFileChange}
          accept=".pdf"
        />
      </label>
      <p className="text-gray-700 text-[12px] w-full text-start">
        Supported Format: PDF
      </p>
      {fileName != '' && (
        <div className="bg-gray-300 mt-3 flex relative gap-4 w-full p-2">
          <Image alt="" src={'/pdf.jpg'} width={50} height={50} /> {fileName}
          <button onClick={handleFileDelete} className="absolute right-6">
            <Close />
          </button>
        </div>
      )}
    </div>
  )
}

export default FileInput
