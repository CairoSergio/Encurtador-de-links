import axios from "axios";



const key = "4f3c61cbb6ae0ac6293d2543bb79983284fb466d" ;


const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;