import Form from "../../components/form";
import Logo from "../../components/logo";
import { HomeContainer } from "./style";
import { useEffect, useState} from "react";
import { APIResponse, useVideosList } from "../../providers/videosList";
import CardVideo from "../../components/cardVideo";
import CircularProgress from '@mui/material/CircularProgress';
import { AiOutlineRight } from "react-icons/ai";
import api from "../../services";


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

    const {objectApiResponse, nextPageToken, prevPageToken, setObjectApiResponse} = useVideosList()

    const [validSearch, setValidSearch] = useState<boolean>(false)
    const [videosList, setVideosList] = useState<any[]>([] as any[])

    useEffect(()=>{

        const list = objectApiResponse.items
        setVideosList(list)   

    }, [objectApiResponse])

    const nextPageFunction = () => {
        // setObjectApiResponse({} as APIResponse)
        //     api.get(`search?part=id,snippet&q=${textSearched}&key=${process.env.REACT_APP_GOOGLE_SECRET_KEY}`)
        //     .then(response => {
        //         setObjectApiResponse(response.data)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })            
        // }          

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
                                <CardVideo title={snippet.title.replaceAll("&quot;", "")} description={snippet.description} 
                                thumbnailURL={snippet.thumbnails.default.url} videoId={id.videoId} key={id.videoId}/>
                            )
                        })                                  
                    }
                        <div className="navigationOptions">
                            {nextPageToken && <button onClick={nextPageFunction}>Próxima Página<AiOutlineRight/></button>}
                            {prevPageToken && <button>Página Anteriror</button>}
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