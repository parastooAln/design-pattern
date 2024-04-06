"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageStorage = void 0;
class ImageStorage {
    constructor() {
        this.store = (image, filter) => {
            filter.apply(image);
        };
    }
}
exports.ImageStorage = ImageStorage;
