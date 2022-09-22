import { createContext, ReactNode, useContext, useState, useEffect } from "react"
import api from "../../services"

interface VideoDetailProviderData{
    setVideoId: (value: string) => void
    videoData: IVideoData

}

interface VideoDetailProps{
    children: ReactNode
}

interface IThumbnailsVideoDetails{
    default: {
        url: string        
    }
    medium?: {
        url: string
    }
    high?: {
        url: string
    }
    standard?: {
        url: string
    }
    maxres?: {
        url: string
    }
}

interface IVideoData{
    id: string
    snippet: {
        title: string
        description: string
        thumbnails: IThumbnailsVideoDetails       
    }
    statistics: {
        viewCount: string
        likeCount: string
        favoriteCount: string
        commentCount: string
    }
}

const VideoDetailContext = createContext<VideoDetailProviderData>({} as VideoDetailProviderData)

export const VideoDetailProvider = ({children}: VideoDetailProps) => {

    const [videoId, setVideoId] = useState<string>('')
    const [videoData, setVideoData] = useState<IVideoData>({} as IVideoData)

    useEffect(()=>{

        if(videoId){
            api.get(`videos?id=${videoId}&part=snippet,statistics&key=${process.env.REACT_APP_GOOGLE_SECRET_KEY}`)
            .then((response) =>{
                setVideoData(response.data.items[0])
            })
            .catch(error =>{
                console.log(error)
            })
        }

    }, [videoId])

    return(
        <VideoDetailContext.Provider value={{setVideoId, videoData}}>
            {children}
        </VideoDetailContext.Provider>
    )
}

export const useVideoDetail = () => useContext(VideoDetailContext)