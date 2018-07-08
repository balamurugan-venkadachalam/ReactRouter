import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// configure base url
axios.defaults.baseURL ='https://jsonplaceholder.typicode.com';

axios.defaults.headers.common['Authorization'] = 'AUTH CODE';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log("##################");
    console.log(request);
    console.log("##################");
    // config rquired config
    return request;
});



ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
