import { UPDATE_VIDEOS_LIST } from "./actionTypes";

export const updateList = (APIListResponse: any[]) =>({
    type: UPDATE_VIDEOS_LIST,
    APIListResponse
})