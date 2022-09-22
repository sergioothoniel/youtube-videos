import { CardContainer } from "./style";
import {HTMLAttributes} from "react";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

interface InputProps extends HTMLAttributes<HTMLElement>{
    videoId: string
    title: string
    description: string
    thumbnailURL: string
}

const CardVideo = ({videoId, title, description, thumbnailURL}: InputProps) => {

    const history = useHistory()

    const handleClick = () => {
        history.push(`/details/${videoId}`)
    }

    return(
        <CardContainer>
            <figure>
                <img src={thumbnailURL} alt="" />
            </figure>

            <div className="videoDetails">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <Button variant="contained" onClick={handleClick}>Ver Mais</Button>

        </CardContainer>
    )
}

export default CardVideo