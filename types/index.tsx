import { ReactNode } from 'react'

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
