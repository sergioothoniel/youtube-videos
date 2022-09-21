import { useHistory } from "react-router-dom"
import { DetailsPageContainer } from "./style"

const Details = () => {

    const history = useHistory()

    return(
        <DetailsPageContainer>
            testando detalhes

        <button onClick={()=>history.push('/')}>voltar</button>
        </DetailsPageContainer>
    )
}

export default Details