'use client'
import { SetStateAction, useState } from "react"

export default function Fuctions () {

    const [openModal , setOpenModal] = useState<boolean>(false)
    const handleModal = () => {
        setOpenModal(o=> !o)
    }

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement> ,
         setState:React.Dispatch<React.SetStateAction<any>>) => {
            e.preventDefault()
        const {name, type, value} = e.target;

        setState((prev: any) => ({
            ...prev,
            [name]: value
        }));
    }

       return{
        openModal,
        handleModal,
        handleInputChange
       }

}

