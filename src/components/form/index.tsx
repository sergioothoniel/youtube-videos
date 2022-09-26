import { FormContainer } from "./style";
import { AiOutlineSearch } from "react-icons/ai";
import { HTMLAttributes, useState } from "react";
import { APIResponse, useVideosList } from "../../providers/videosList";
import { toast } from 'react-toastify';
import api from "../../services";


interface InputProps extends HTMLAttributes<HTMLElement>{
    animatedClassNameFunction: (value: string) => void
    animatedClassName: string
}

const Form = ({animatedClassNameFunction, animatedClassName}: InputProps) =>{   

    const {setObjectApiResponse, textSearched, setTextSearched} = useVideosList()    
    
    const [invalidSearch, setInvalidSearch] = useState<boolean>(false)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault()

        if(!textSearched){
            setInvalidSearch(true)
        }
        else{

            if(!animatedClassName){
                animatedClassNameFunction('animated')
            }
            
            setObjectApiResponse({} as APIResponse)            

            api.get(`search?part=id,snippet&q=${textSearched}&key=${process.env.REACT_APP_GOOGLE_SECRET_KEY}`)
            .then(response => {
                setObjectApiResponse(response.data)
            })
            .catch(error => {
                animatedClassNameFunction('')
                console.log(error)
                toast.error('Número de requisições máximo atingido')               
            })            
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
        <FormContainer onSubmit={handleSubmit} className={animatedClassName} role="form">
            <div className="inputContainer">
                <input type="text" placeholder="Pesquisar" onChange={handleChange}/>
                {invalidSearch && <span>*Digite algum texto para buscar</span>}
            </div>           

            <button className="buttonContainer">
                <AiOutlineSearch/>
                <span>Buscar</span>
            </button>
        </FormContainer>
    )
}

export default Form