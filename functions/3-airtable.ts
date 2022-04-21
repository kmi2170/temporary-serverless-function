import { Handler } from '@netlify/functions';
// @ts-ignore
import Airtable from 'airtable-node';
import dotnev from 'dotenv';
// const Airtable = require('airtable-node');

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

const handler: Handler = async (event, context, cb) => {
  try {
    const { records } = await airtable.list();
    const products = records.map((product: Product) => {
      const { id } = product;
      const { name, image, price } = product.fields;
      const url = image[0].url;
      return { id, name, url, price };
    });
    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: 'Server Error',
    };
  }
};

export { handler };
