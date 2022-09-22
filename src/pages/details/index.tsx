import { useHistory, useParams } from "react-router-dom";
import { useVideoDetail } from "../../providers/videoDetail";
import { DetailsPageContainer } from "./style";
import { useEffect, useState } from "react";
import Logo from "../../components/logo";
import VideoPlayer from "../../components/videoPlayer";
import Button from '@mui/material/Button';
import { AiOutlineLike } from "react-icons/ai";
import TextFormated from "../../components/textFormated"

interface IVideoDataUpdated {
    snippet: {
        title: string
        description: string
    }
    statistics: {
        viewCount: string
        likeCount: string
        favoriteCount: string
        commentCount: string
    }
}

const Details = () => {

    const history = useHistory()

    const {setVideoId, videoData} = useVideoDetail()

    const [videoDataUpdated, setVideoDataUpdated] = useState<IVideoDataUpdated>({} as IVideoDataUpdated)
    const [validData, setValidData] = useState<boolean>(false)
    
    const {videoId} = useParams<{videoId: string}>()

    useEffect(()=>{
        setVideoId(videoId)
    }, [])

    useEffect(()=>{
        if(videoData.snippet){
            setVideoDataUpdated(videoData)
            setValidData(true)            
        }    
    }, [videoData])    

    return(
        <DetailsPageContainer>
            <Logo animatedClassName="static"/>

            <div className="videoDetailBox">
                <VideoPlayer playerWidth={800} videoId={videoId}/>

                {validData &&
                 <>
                    <h1>{videoDataUpdated.snippet.title}</h1>

                    <div  className="videoStatistics">
                        <h2>{Number(videoDataUpdated.statistics.viewCount).toLocaleString('pt-BR')} Visualizações</h2>
                        <h2><AiOutlineLike/>{Number(videoDataUpdated.statistics.likeCount).toLocaleString('pt-BR')}</h2>
                        <h2>{Number(videoDataUpdated.statistics.commentCount).toLocaleString('pt-BR')} Comentários</h2>
                    </div>

                    <div className="videoDescription">
                        <TextFormated text={videoDataUpdated.snippet.description}/>
                    </div>
                                         
                 </>
                } 

                <Button variant="contained" onClick={()=>history.push('/')}>Voltar</Button>                                       
            </div>
            
        </DetailsPageContainer>
    )
}

export default Details