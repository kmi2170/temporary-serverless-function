var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const fetchDate = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('test');
});
fetchDate();
exports.module = fetchDate;
export {};
