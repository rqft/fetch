"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("./lib");
(async () => {
    const instance = new lib_1.OpenMeteo.API();
    const result = await instance.forecast({
        latitude: 51.5074,
        longitude: 0.1278,
    });
    console.log(result.payload);
})();
