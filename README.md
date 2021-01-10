# react-http

### Axios 
This is the http client js library 

+ https://github.com/axios/axios#features

### Dummy JSON service
This is a quick and dirty way to mock some http end point
+ https://jsonplaceholder.typicode.com

### Axion configuration 
Axios configuration can be created in the root JS  or as a separate configuration file 

+ Root JS 
    
```
axios.defaults.baseURL='https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization']='AUTH XXAH^&ABMBNBMBNBNM';
axios.defaults.headers.post['Content-Type']='application/json';
```

+fspost-axios.js
 
```import axios from "axios";

const fpostservice = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

fpostservice.defaults.headers.common['Authorization']='AUTH Token4';

 export default fpostservice;```
