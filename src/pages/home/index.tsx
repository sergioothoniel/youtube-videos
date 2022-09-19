import Form from "../../components/form"
import Logo from "../../components/logo"
import { HomeContainer } from "./style"
import { useEffect, useState} from "react"

const Home = () =>{

    const [validSearch, setValidSearch] = useState<boolean>(false)

    useEffect(()=>{
        if(validSearch){
            console.log('mudar')
        }

    }, [validSearch])

    return(
        <HomeContainer>
            <div className="logoInputContainer" >
                <Logo name={validSearch ? "animated" : "none"}/>
                <Form validFunction={setValidSearch} name={validSearch ? "moveToTop" : "none"}/>
            </div>
                        
        </HomeContainer>
    )
}

export default Home