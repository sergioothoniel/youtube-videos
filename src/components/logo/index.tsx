import { LogoContainer } from "./style"
import { HTMLAttributes } from "react"

interface InputProps extends HTMLAttributes<HTMLElement>{
    animated: boolean
}

const Logo = ({animated}: InputProps) => {
    return(
        <LogoContainer className={animated ? "animated" : "none"}>
            YouTube <span>API</span>
        </LogoContainer>
    )
}

export default Logo