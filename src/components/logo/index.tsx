import { LogoContainer } from "./style"
import { HTMLAttributes } from "react"

interface InputProps extends HTMLAttributes<HTMLElement>{
    name: string
}

const Logo = ({name}: InputProps) => {
    return(
        <LogoContainer className={name}>
            YouTube <span>API</span>
        </LogoContainer>
    )
}

export default Logo