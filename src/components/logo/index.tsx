import { LogoContainer } from "./style"
import { HTMLAttributes } from "react"
import { useHistory } from "react-router-dom"

interface InputProps extends HTMLAttributes<HTMLElement>{
    animatedClassName: string
}

const Logo = ({animatedClassName}: InputProps) => {

    const history = useHistory()    

    const handleLogoClick = () => {
        history.push('/')
        window.location.reload()
    }

    return(
        <LogoContainer className={animatedClassName} onClick={handleLogoClick}>
            YouTube <span>API</span>
        </LogoContainer>
    )
}

export default Logo