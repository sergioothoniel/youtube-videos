import { CardContainer } from "./style";
import {HTMLAttributes} from "react";

interface InputProps extends HTMLAttributes<HTMLElement>{
    videoId: string
    title: string
    description: string
    thumbnailURL: string
}

const CardVideo = ({videoId, title, description, thumbnailURL}: InputProps) => {
    return(
        <CardContainer>
            <figure>
                <img src={thumbnailURL} alt="" />
            </figure>

            <div className="videoDetails">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

        </CardContainer>
    )
}

export default CardVideo