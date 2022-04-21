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
const handler = (event, context, cb) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = event.queryStringParameters;
    if (id) {
        try {
            const product = yield airtable.retrieve(id);
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
        }
        catch (error) {
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
});
export { handler };
