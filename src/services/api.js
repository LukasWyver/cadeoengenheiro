import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:3000/api'
    // baseURL: 'https://cadeoengenheiro.vercel.app/api'
    // baseURL: 'https://cadeoengenheiro-api.vercel.app/api'
    // baseURL: 'https://www.cadeoengenheiro.com.br/api'
    baseURL: 'https://admin.cadeoengenheiro.com.br/api'
})

export default api;
// npx json-server --watch db.json --host 192.168.1.103


