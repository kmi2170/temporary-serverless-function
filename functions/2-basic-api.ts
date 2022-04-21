import { Handler } from '@netlify/functions';
// @ts-ignore
import items from '../assets/data';
// const items = require('../assets/data');

const handler: Handler = async (event, context, cb) => {
  return {
    headers: { 'Access-Control-Allow-Origin': '*' },
    statusCode: 200,
    body: JSON.stringify(items),
    // body: 'Our Basic API Example',
  };
};

export { handler };
