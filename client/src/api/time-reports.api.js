// time-reports.api.js

// Modules
import axios from 'axios';
import {CONFIG} from '../config';

const request = ({method = 'get', URI, data, params}) => (
  axios({
    timeout: CONFIG.baseRequestTimeout,
    method,
    responseType: 'json',
    url: `${CONFIG.baseRequestUrl}/api/${URI}`,
    data,
    params,
  })
    .then(res => res.data)
    .catch(errorHandler)
);

const errorHandler = error => {
  console.error(`Data error: ${error.message}`);
  return Promise.reject(error);
};

const fetch = () => (
  request({URI: 'time-reports'})
);

const post = data => (
  request({URI: 'time-reports', method: 'post', data})
);

const put = (id, data) => (
  request({method: 'put', URI: `time-reports/${id}`, data})
);

const remove = id => (
  request({method: 'delete', URI: `time-reports/${id}`})
);

export {
  fetch,
  post,
  put,
  remove,
};
