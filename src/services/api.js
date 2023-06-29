import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:3333'
    baseURL: 'http://localhost:3000/api'
    // baseURL: 'https://cadeoengenheiro.vercel.app/api'
})

export default api;
// npx json-server --watch db.json --host 192.168.1.103


