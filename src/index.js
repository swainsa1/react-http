import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from "axios";

/****** Global axios configuration***** */
axios.defaults.baseURL='https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization']='AUTH XXAH^&ABMBNBMBNBNM';
axios.defaults.headers.post['Content-Type']='application/json';


axios.interceptors.request.use(request => {
    console.log("Index.js Request: "+request)
    return request;
}
,error => {
    console.log("Index.js : Error: "+error)
    return Promise.reject(error);
}
);

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
