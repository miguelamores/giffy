import { API_KEY, API_URL } from './settings';

export default function getGifts({ keyword = 'morty' } = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifts = data.map(image => {
          const { images, title, id } = image;
          const { url } = images.downsized_medium;
          return { id, title, url };
        });
        return gifts;
      }
    });
}
