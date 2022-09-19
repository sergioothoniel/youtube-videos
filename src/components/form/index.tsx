import { FormContainer } from "./style"
import {AiOutlineSearch} from "react-icons/ai";
import { HTMLAttributes } from "react"
import { useState } from "react";

interface InputProps extends HTMLAttributes<HTMLElement>{
    validFunction: (value: boolean) => void
    name: string
}

const Form = ({validFunction, name}: InputProps) =>{    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        validFunction(true)
        console.log((event.currentTarget[0] as HTMLInputElement).value)               
    } 

    return(
        <FormContainer onSubmit={handleSubmit} name={name}>
            <input type="text" placeholder="Pesquisar" />

            <div className="buttonContainer">
                <AiOutlineSearch/>
                <button type="submit">Buscar</button>
            </div>
        </FormContainer>

    )
}

export default Form