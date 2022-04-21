var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// functions/1-hello.ts
__export(exports, {
  handler: () => handler
});
var handler = async (event, context, cb) => {
  return {
    headers: { "Access-Control-Allow-Origin": "*" },
    statusCode: 200,
    body: "Our First Netlify Function"
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=1-hello.js.map
