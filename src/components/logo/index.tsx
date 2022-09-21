import { LogoContainer } from "./style"
import { HTMLAttributes } from "react"
import { useHistory } from "react-router-dom"

interface InputProps extends HTMLAttributes<HTMLElement>{
    animated: boolean
}

const Logo = ({animated}: InputProps) => {

    const history = useHistory()

    return(
        <LogoContainer className={animated ? "animated" : "none"} onClick={()=>history.push('/')}>
            YouTube <span>API</span>
        </LogoContainer>
    )
}

export default Logo