var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// @ts-ignore
import Airtable from 'airtable-node';
import dotnev from 'dotenv';
// // const Airtable = require('airtable-node');
dotnev.config();
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
    .base(process.env.AIRTABLE_APP_BASE)
    .table('products');
const handler = (event, context, cb) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = event.queryStringParameters;
    if (id) {
        try {
            const product = yield airtable.retrieve(id);
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
        }
        catch (error) {
            console.error(error);
            return {
                headers: { 'Access-Control-Allow-Origin': '*' },
                statusCode: 500,
                body: 'Server Error',
            };
        }
    }
    try {
        const { records } = yield airtable.list();
        const products = records.map((product) => {
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
    }
    catch (error) {
        console.error(error);
        return {
            headers: { 'Access-Control-Allow-Origin': '*' },
            statusCode: 500,
            body: 'Server Error',
        };
    }
});
export { handler };
