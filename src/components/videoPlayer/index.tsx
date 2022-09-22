import { VideoPlayerContainer } from "./style"
import {useState, useEffect, HTMLAttributes} from "react"

interface InputProps extends HTMLAttributes<HTMLElement>{
    playerWidth: number
    videoId: string
}


const VideoPlayer = ({playerWidth, videoId}: InputProps) => {
    
    const [playerHeight, setPlayerHeight] = useState<number>()

    useEffect(()=>{
        setPlayerHeight(playerWidth*9/16)
    }, [playerWidth])

    return(
        <VideoPlayerContainer>
            <iframe width={String(playerWidth)+'px'} height={String(playerHeight)+'px'} 
                src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>                
            </iframe>
        </VideoPlayerContainer>
    )
}

export default VideoPlayer