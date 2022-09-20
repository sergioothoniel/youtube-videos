import { FormContainer } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { HTMLAttributes, useState } from "react";


interface InputProps extends HTMLAttributes<HTMLElement>{
    validFunction: (value: boolean) => void
    animated: boolean
}

const Form = ({validFunction, animated}: InputProps) =>{   
    
    const [textSearched, setTextSearched] = useState<string>('')
    const [invalidSearch, setInvalidSearch] = useState<boolean>(false)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()

        if(!textSearched){
            setInvalidSearch(true)
        }
        else{
            validFunction(true)
            console.log(textSearched)
        }     
                      
    } 

    const handleChange = (event: React.FormEvent<HTMLInputElement>) =>{
        const inputValue = event.currentTarget.value.split(' ').join('+')        
        setTextSearched(inputValue)

        if(inputValue){
            setInvalidSearch(false)
        }
    }

    return(
        <FormContainer onSubmit={handleSubmit} className={animated ? "animated" : "none"}>
            <div className="inputContainer">
                <input type="text" placeholder="Pesquisar" onChange={handleChange}/>
                {invalidSearch && <span>*Digite algum texto para buscar</span>}
            </div>           

            <div className="buttonContainer">
                <AiOutlineSearch/>
                <button type="submit">Buscar</button>
            </div>
        </FormContainer>

    )
}

export default Form