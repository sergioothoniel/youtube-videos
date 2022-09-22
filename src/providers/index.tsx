import { ReactNode } from "react"
import { VideoDetailProvider } from "./videoDetail"
import { VideosListProvider } from "./videosList"


interface ProvidersProps{
    children: ReactNode
}

const Provider = ({children}: ProvidersProps) => {
    return(
        <VideosListProvider>
            <VideoDetailProvider>
                {children}
            </VideoDetailProvider>            
        </VideosListProvider>
    )
}

export default Provider