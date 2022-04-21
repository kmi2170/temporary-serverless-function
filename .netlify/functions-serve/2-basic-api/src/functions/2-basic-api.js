var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// functions/2-basic-api.ts
__export(exports, {
  handler: () => handler
});

// assets/data.js
var items = [
  {
    id: "recmg2a1ctaEJNZhu",
    name: "utopia sofa",
    image: {
      url: "https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg"
    },
    price: 39.95
  },
  {
    id: "recvKMNR3YFw0bEt3",
    name: "entertainment center",
    image: {
      url: "https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg"
    },
    price: 29.98
  },
  {
    id: "recxaXFy5IW539sgM",
    name: "albany sectional",
    image: {
      url: "https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg"
    },
    price: 10.99
  },
  {
    id: "recyqtRglGNGtO4Q5",
    name: "leather sofa",
    image: {
      url: "https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg"
    },
    price: 9.99
  }
];
var data_default = items;

// functions/2-basic-api.ts
var handler = async (event, context, cb) => {
  return {
    headers: { "Access-Control-Allow-Origin": "*" },
    statusCode: 200,
    body: JSON.stringify(data_default)
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=2-basic-api.js.map
