var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// const person = { name: 'kmi' };
// returns promise
const handler = (event, context, cb) => __awaiter(void 0, void 0, void 0, function* () {
    return {
        statusCode: 200,
        // must be string
<<<<<<< HEAD
        body: 'Our First Netlify Function Example',
=======
        body: 'Our First Netlify Function',
>>>>>>> 83d3aecf9d2306ed278c000397ae610e0b537671
        // body: JSON.stringify(person),
    };
});
// domain/.netlify/functions/1-hello
// const handler: Handler = (event, context, cb) => {
//   cb(null, { statusCode: 200, body: 'Our First Netlify Function Example' });
// };
export { handler };
