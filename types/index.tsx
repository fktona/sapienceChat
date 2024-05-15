import { Dispatch, ReactNode } from 'react'

export interface NavLinkProps {
  href: string
  children:
    | ReactNode
    | ReactNode[]
    | string
    | string[]
    | number
    | number[]
    | boolean
    | boolean[]
    | null
    | null[]
    | undefined
    | undefined[]
    | symbol
    | symbol[]
    | bigint
    | bigint[]
    | object
    | object[]
    | any
    | any[]
    | unknown
    | unknown[]
    | never
    | never[]
    | void
    | void[]
    | Function
}

export interface MenuProps {
  toggleMenu: boolean
  toggle: () => void
}

export interface ModalProps {
  children: ReactNode
  open: boolean
  handleClose: any | void
  size?: string
}

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  changeStyle?: boolean
  label?: string
  required?: boolean
  readonly?: boolean
}
export interface ButtonProps {
  children: React.ReactNode
  icons?: React.ReactNode
  onClick?: () => void
}

export interface AuthState {
  userId: string | null
  email: string | null
  password?: string | null
  token: string | null
  verified: boolean
}

export interface AuthResponse {
  accessToken: string
  _id: string
  email: string
  verified: boolean
}

export interface authAction {
  type: string
  payload?: {
    userId?: string
    email?: string
    token?: string
    verified?: boolean
  }
}

export interface UploadProps {
  name: string,
  purpose: string,
  category: string,
  document: File | null,
  assistant:string
}

export interface uploadAction {
  type: string,
  payload?: {
    name?: string,
    purpose?: string,
    category?: string,
    assistant?: string,
    document?: File | null,
  }
}

export interface UploadContextProps {
  state: UploadProps | null,
  dispatch: Dispatch<any>
}