import {
  HandlerEvent,
  HandlerContext,
  HandlerResponse,
} from '@netlify/functions';
// @ts-ignore
import Airtable from 'airtable-node';
import dotnev from 'dotenv';
// // const Airtable = require('airtable-node');

dotnev.config();

interface Product {
  id: number;
  fields: {
    name: string;
    description: string;
    image: [{ url: string }];
    price: number;
  };
}

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
          headers: { 'Access-Control-Allow-Origin': '*' },
          statusCode: 404,
          body: `No product with id: ${id}`,
        };
      }
      return {
        headers: { 'Access-Control-Allow-Origin': '*' },
        statusCode: 200,
        body: JSON.stringify(product),
      };
    } catch (error) {
      console.error(error);
      return {
        headers: { 'Access-Control-Allow-Origin': '*' },
        statusCode: 500,
        body: 'Server Error',
      };
    }
  }

  try {
    const { records } = await airtable.list();
    const products = records.map((product: Product) => {
      const { id } = product;
      const { name, image, price } = product.fields;
      const url = image[0].url;
      return { id, name, url, price };
    });
    return {
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.error(error);
    return {
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: 500,
      body: 'Server Error',
    };
  }
};

export { handler };
