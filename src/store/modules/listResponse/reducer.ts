import { UPDATE_VIDEOS_LIST } from "./actionTypes";

interface ActiosObject{
    type: string
    APIListResponse: any[]
}

const listReducer = (state = [], actions: ActiosObject) =>{
    switch (actions.type){
        case UPDATE_VIDEOS_LIST:
            return actions.APIListResponse
        
        default:
            return state
    }
}

export default listReducer