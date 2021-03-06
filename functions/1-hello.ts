import { Handler } from '@netlify/functions';

// const person = { name: 'kmi' };

// returns promise
const handler: Handler = async (event, context, cb) => {
  return {
    headers: { 'Access-Control-Allow-Origin': '*' },
    statusCode: 200,
    // must be string
    body: 'Our First Netlify Function',
    // body: JSON.stringify(person),
  };
};
// domain/.netlify/functions/1-hello
// const handler: Handler = (event, context, cb) => {
//   cb(null, { statusCode: 200, body: 'Our First Netlify Function Example' });
// };

export { handler };
