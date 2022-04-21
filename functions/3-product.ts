import {
  Handler,
  HandlerEvent,
  HandlerContext,
  HandlerResponse,
} from '@netlify/functions';
// @ts-ignore
import Airtable from 'airtable-node';
import dotnev from 'dotenv';
// // const Airtable = require('airtable-node');

dotnev.config();

// interface Product {
//   id: number;
//   fields: {
//     name: string;
//     description: string;
//     image: [{ url: string }];
//     price: number;
//   };
// }

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_APP_BASE)
  .table('products');

interface CustomHandlerEvent extends HandlerEvent {
  queryStringParameters: { id: string };
}

const handler = async (
  event: CustomHandlerEvent,
  context: HandlerContext,
  cb: HandlerResponse
) => {
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      const product = await airtable.retrieve(id);
      if (product.error) {
        return {
          statusCode: 404,
          body: `No product with id: ${id}`,
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: 'Server Error',
      };
    }
  }
  return {
    statusCode: 400,
    body: 'Please provide product id',
  };
};

export { handler };
