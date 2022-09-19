import axios from "axios";

const api = axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_GOOGLE_SECRET_KEY}&part=id,snippet&q=`
})

export default api