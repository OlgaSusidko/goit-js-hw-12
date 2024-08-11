// функції для HTTP-запитів
import axios from 'axios';

axios.defaults.baseURL = "https://pixabay.com/api/";
    export const limit = 15;
export async function searchImagesByQuery(query, page) {
    const API_KEY = "45271778-6269ea34eb71195547930c138";

    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page,
        per_page: limit,
    })
     
    const {data} = await axios.get(`?${params}`);
    return data;
}