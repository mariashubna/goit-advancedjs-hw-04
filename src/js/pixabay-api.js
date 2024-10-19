import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '39901627-719ccf8971235dd54bb900542';

async function getImages({ page, perPage, query }) {
  const {data} = await axios.get('',
    {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: perPage,
      },
    }
  );
  return data;
}

export { getImages };
