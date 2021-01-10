import axios from "axios";

const fpostservice = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

fpostservice.defaults.headers.common['Authorization']='AUTH Token4';

 export default fpostservice;