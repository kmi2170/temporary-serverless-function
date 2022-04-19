import axios, { AxiosError } from 'axios';
// const { AxiosError } = require('axios');

const result = document.getElementsByClassName('result');

// const fetchDate = async () => {
//   try {
//     const data = await axios.get('/.netlify/functions/1-hello');
//     console.log(data);
//   } catch (err) {
//     const error = err as Error | AxiosError;
//     if (axios.isAxiosError(error)) {
//       console.error(error.response);
//     } else {
//       console.error(error);
//     }
//   }
// };

const fetchDate = async () => {
  console.log('test');
};

fetchDate();

exports.module = fetchDate;
