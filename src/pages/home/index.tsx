import Form from "../../components/form"
import Logo from "../../components/logo"
import { HomeContainer } from "./style"
import { useEffect, useState} from "react"
import { useDispatch, useSelector } from "react-redux";

const Home = () =>{

    const [validSearch, setValidSearch] = useState<boolean>(false)

    const dispatch = useDispatch()
    const responseList = useSelector(state=>state.listResponse)

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