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
            <Logo animated={validSearch && true}/>
            <Form validFunction={setValidSearch} animated={validSearch && true }/> 
     
                        
        </HomeContainer>
    )
}

export default Home