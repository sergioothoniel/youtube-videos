import { FormContainer } from "./style"
import {AiOutlineSearch} from "react-icons/ai";
import { HTMLAttributes } from "react"
import { useState } from "react";

interface InputProps extends HTMLAttributes<HTMLElement>{
    validFunction: (value: boolean) => void
    animated: boolean
}

const Form = ({validFunction, animated}: InputProps) =>{    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()
        validFunction(true)
        console.log((event.currentTarget[0] as HTMLInputElement).value)               
    } 

    return(
        <FormContainer onSubmit={handleSubmit} className={animated ? "animated" : "none"}>
            <input type="text" placeholder="Pesquisar" />

            <div className="buttonContainer">
                <AiOutlineSearch/>
                <button type="submit">Buscar</button>
            </div>
        </FormContainer>

    )
}

export default Form