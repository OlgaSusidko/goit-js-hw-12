// функції для HTTP-запитів

 export function searchImagesByQuery(query) {
    const URL = "https://pixabay.com/api/";
    const API_KEY = "45271778-6269ea34eb71195547930c138";

    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    })
   
return fetch(`${URL}?${params}`).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}





  

 