"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strategyMain = void 0;
const BlackAndWhite_1 = require("./BlackAndWhite");
const ContrastFilter_1 = require("./ContrastFilter");
const ImageStorage_1 = require("./ImageStorage");
const strategyMain = () => {
    let imageStore = new ImageStorage_1.ImageStorage();
    imageStore.store("a", new ContrastFilter_1.ContrastFilter());
    imageStore.store("a", new BlackAndWhite_1.BlackAndWhite());
};
exports.strategyMain = strategyMain;
