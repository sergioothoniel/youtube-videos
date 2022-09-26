import Form from "../../components/form";
import Logo from "../../components/logo";
import { HomeContainer } from "./style";
import { useEffect, useState} from "react";
import { useVideosList } from "../../providers/videosList";
import CardVideo from "../../components/cardVideo";
import CircularProgress from '@mui/material/CircularProgress';
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import api from "../../services";
import { toast } from "react-toastify";


interface IThumbnail{
    url: string
    width?: number
    height?: number
}

export interface IItemAPIResponse{   
    id: {
        kind: string
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

    const [animatedCompClassName, setAnimatedCompClassName] = useState<string>('')
    const [videosList, setVideosList] = useState<IItemAPIResponse[]>([] as IItemAPIResponse[])     

    useEffect(()=>{
        
        if(objectApiResponse.items){

            if(textSearched){
                setAnimatedCompClassName('static')
            }

            const list = objectApiResponse.items.filter(item => item.id.kind === "youtube#video")  //exclude youtube channels
            setVideosList(list)   
        }
        else{
            setVideosList([] as IItemAPIResponse[])
        }

    }, [objectApiResponse])

    const handlePageNavigation = (direction: string) => {
        setVideosList([] as IItemAPIResponse[])

        let token: string
        direction === "next" ? token = nextPageToken : token = prevPageToken

        api.get(`search?part=id,snippet&q=${textSearched}&key=${process.env.REACT_APP_GOOGLE_SECRET_KEY}&pageToken=${token}`)
        .then(response => {
            setObjectApiResponse(response.data)
        })
        .catch(error => {
            setAnimatedCompClassName('')
            console.log(error)
            toast.error('Número de requisições máximo atingido') 
        })               
    }   

    return(
        <HomeContainer>            
            <Logo animatedClassName={animatedCompClassName}/>
            <Form animatedClassNameFunction={setAnimatedCompClassName} animatedClassName={animatedCompClassName}/> 

            {animatedCompClassName && 
                (videosList[0] ?         
                    <div className="videosListContainer">
                        {videosList.map(({snippet, id}: IItemAPIResponse, index: number) =>{
                            return(
                                <CardVideo title={snippet.title.replaceAll("&quot;", "").replaceAll("&#39;", "")} description={snippet.description} 
                                thumbnailURL={snippet.thumbnails.medium ? snippet.thumbnails.medium.url : snippet.thumbnails.default.url} videoId={id.videoId} key={index}/>
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