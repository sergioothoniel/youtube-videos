import { createContext, ReactNode, useContext, useState, useEffect } from "react"

export interface APIResponse{
    kind: string
    etag: string
    nextPageToken?: string
    prevPageToken?: string
    regionCode?: string
    pageInfo: {
        totalResults: number
        resultsPerPage: number
    }
    items: any[]
}

interface VideosListProviderData{
    objectApiResponse: APIResponse
    setObjectApiResponse: (objectApiResponse: APIResponse) => void
    nextPageToken: string   
    prevPageToken: string 
    textSearched: string
    setTextSearched: (value: string) => void
}

interface VideosListProps{
    children: ReactNode
}

const VideosListContext = createContext<VideosListProviderData>({} as VideosListProviderData)

export const VideosListProvider = ({children}: VideosListProps) => {

    const [objectApiResponse, setObjectApiResponse] = useState<APIResponse>({} as APIResponse)
    const [nextPageToken, setNextPageToken] = useState<string>('')
    const [prevPageToken, setPrevPageToken] = useState<string>('')
    const [textSearched, setTextSearched] = useState<string>('')
    
    useEffect(()=>{
        
        objectApiResponse.nextPageToken ? setNextPageToken(objectApiResponse.nextPageToken) : setNextPageToken('')
        objectApiResponse.prevPageToken ? setPrevPageToken(objectApiResponse.prevPageToken) : setPrevPageToken('')       

    }, [objectApiResponse])

    return (
        <VideosListContext.Provider value={{objectApiResponse, setObjectApiResponse, nextPageToken, prevPageToken, setTextSearched, textSearched}}>
            {children}
        </VideosListContext.Provider>
    )
}

export const useVideosList = () => useContext(VideosListContext)