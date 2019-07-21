// time-reports.api.js

// Modules
import axios from 'axios';
import {DB} from '../config';

const URI = `${DB.host}/api/time-reports`; // URI time-reports only

const errorHandler = error => {
  console.error(`Data error: ${error.message}`);
  return Promise.reject(error);
};

const fetch = () => (
  axios.get(`${URI}/fetch`)
    .then(response => response.data)
    .catch(error => errorHandler(error))
);

const post = data => (
  axios.post(`${URI}/create`, data)
    .then(response => response.data)
    .catch(error => errorHandler(error))
);

const put = (id, data) => (
  axios.put(`${URI}/update/${id}`, data)
    .then(response => response.data)
    .catch(error => errorHandler(error))
);

const remove = id => (
  axios.delete(`${URI}/${id}`)
    .then(response => response.data)
    .catch(error => errorHandler(error))
);

export {
  fetch,
  post,
  put,
  remove,
};
