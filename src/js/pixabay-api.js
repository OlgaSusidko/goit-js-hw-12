// функції для HTTP-запитів
import axios from 'axios';

axios.defaults.baseURL = "https://pixabay.com/api/";
    
export async function searchImagesByQuery(query) {
    const API_KEY = "45271778-6269ea34eb71195547930c138";

    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: 1,
        per_page: 15
    })
     
    const {data} = await axios.get(`?${params}`);
    return data;
}