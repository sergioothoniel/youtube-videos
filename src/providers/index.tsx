import { ReactNode } from "react"
import { VideosListProvider } from "./videosList"


interface ProvidersProps{
    children: ReactNode
}

const Provider = ({children}: ProvidersProps) => {
    return(
        <VideosListProvider>
            {children}
        </VideosListProvider>
    )
}

export default Provider