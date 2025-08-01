"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/lib/stack-app/apps/interfaces/client-app.ts
var client_app_exports = {};
__export(client_app_exports, {
  StackClientApp: () => StackClientApp
});
module.exports = __toCommonJS(client_app_exports);
var import_implementations = require("../implementations");
var StackClientApp = import_implementations._StackClientAppImpl;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  StackClientApp
});
//# sourceMappingURL=client-app.js.map