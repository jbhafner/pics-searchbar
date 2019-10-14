import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.unsplash.com',
   headers: {
      Authorization: 'Client-ID c3b8498d981455035a9f46d8b1562e9e55bba24f373e76828a90715ed7d53cad'
   }
});
