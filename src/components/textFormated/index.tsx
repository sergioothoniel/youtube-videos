import {HTMLAttributes, useState} from "react";
import { TextFormatedContainer } from "./style";

interface InputProps extends HTMLAttributes<HTMLElement>{
    text: string
}

const TextFormated = ({text}: InputProps) => {

    const [textClassName, setTextClassName] = useState<string>('hideText')
    const [showButton, setShowButton] = useState<boolean>(true)

    const handleClick = () => {
        setTextClassName('showText')
        setShowButton(false)
    }

    return(
        <TextFormatedContainer >
            <p dangerouslySetInnerHTML={{__html: text.replaceAll('\n', '<br>')}} className={textClassName}></p>
            {showButton && <span onClick={handleClick}>...ver mais</span>}
        </TextFormatedContainer>
    )
}

export default TextFormated