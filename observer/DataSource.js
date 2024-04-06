"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSource = void 0;
const Subject_1 = require("./Subject");
class DataSource extends Subject_1.Subject {
    constructor() {
        super(...arguments);
        this._value = 0;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.notify();
    }
}
exports.DataSource = DataSource;
