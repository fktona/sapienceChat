import React from 'react'
import { InputFieldProps } from '@/types'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

const InputField: React.FC<InputFieldProps> = ({
  value,
  id,
  onChange,
  required,
  changeStyle,
  label,
  className,
  type,
  placeholder,
  name,
}) => {
  return (
    <Box
      component="form"
      // sx={{
      //   '& > (style)': { m: 1},
      // }}
      noValidate
      autoComplete="off"
    >
      <TextField
        type={type}
        value={value}
        required={required ? true : false}
        //readOnly={readonly ? true : false}
        id={id}
        sx={{ height: '100%', p: { x: 2, y: 2 }, m: 3 }}
        label={label}
        autoFocus={true}
        variant={  'standard'}
        name={name}
        className={
          !changeStyle ? className : ' border-gray-300 rounded-md p-2 w-full'
        }
        onChange={onChange}
        placeholder={placeholder}
      />
    </Box>
  )
}

export default InputField
