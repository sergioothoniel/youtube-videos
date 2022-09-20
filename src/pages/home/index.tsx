import Form from "../../components/form";
import Logo from "../../components/logo";
import { HomeContainer } from "./style";
import { useEffect, useState} from "react";
import { APIResponse, useVideosList } from "../../providers/videosList";
import CardVideo from "../../components/cardVideo";
import CircularProgress from '@mui/material/CircularProgress';
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import api from "../../services";
import { toast } from "react-toastify";


interface IThumbnail{
    url: string
    width: number
    height: number
}

interface IItemAPIResponse{   
    id: {
        kind?: string
        videoId: string
    }
    snippet: {
        publishedAt: string
        channelId: string
        title: string
        description: string
        thumbnails: {
            default: IThumbnail
            medium?: IThumbnail
            high?: IThumbnail
        }
        channelTitle: string
        liveBroadcastContent: string
        publishTime: string
    }
}


const Home = () =>{

    const {objectApiResponse, nextPageToken, prevPageToken, setObjectApiResponse, textSearched} = useVideosList()

    const [validSearch, setValidSearch] = useState<boolean>(false)
    const [videosList, setVideosList] = useState<any[]>([] as any[])

    useEffect(()=>{

        const list = objectApiResponse.items
        setVideosList(list)   

    }, [objectApiResponse])

    const handlePageNavigation = (direction: string) => {
        setObjectApiResponse({} as APIResponse)

        let token: string
        direction === "next" ? token = nextPageToken : token = prevPageToken

        api.get(`search?part=id,snippet&q=${textSearched}&key=${process.env.REACT_APP_GOOGLE_SECRET_KEY}&pageToken=${token}`)
        .then(response => {
            setObjectApiResponse(response.data)
        })
        .catch(error => {
            setValidSearch(false)
            console.log(error)
            toast.error('Número de requisições máximo atingido') 
        })               
    }   

    return(
        <HomeContainer>            
            <Logo animated={validSearch && true}/>
            <Form validFunction={setValidSearch} animated={validSearch && true }/> 

            {validSearch && 
                (videosList ?         
                    <div className="videosListContainer">
                        {videosList.map(({snippet, id}: IItemAPIResponse) =>{
                            return(
                                <CardVideo title={snippet.title.replaceAll("&quot;", "").replaceAll("&#39;", "")} description={snippet.description} 
                                thumbnailURL={snippet.thumbnails.default.url} videoId={id.videoId} key={id.videoId}/>
                            )
                        })                                  
                    }
                        <div className="navigationOptions">                            
                            {prevPageToken && <button onClick={()=>handlePageNavigation("prev")}><AiOutlineLeft/>Página Anteriror</button>}
                            {nextPageToken && <button onClick={()=>handlePageNavigation("next")}>Próxima Página<AiOutlineRight/></button>}
                        </div>

                    </div> 
                    :
                    <div className="loadingIcon">
                        <CircularProgress size='20vh' color="secondary"/>
                    </div>)
            }   
            
                        
        </HomeContainer>
    )
}

export default Home