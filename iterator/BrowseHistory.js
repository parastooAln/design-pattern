"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowseHistory = void 0;
class BrowseHistory {
    constructor() {
        this.urls = [];
        this.pop = () => {
            this.urls.pop();
        };
        this.push = (value) => {
            this.urls.push(value);
        };
        this.createIterator = () => {
            return new this.ArrayIterator(this);
        };
        this.ArrayIterator = class {
            constructor(history) {
                this.index = 0;
                this.next = () => {
                    this.index++;
                };
                this.current = () => {
                    return this.history.urls[this.index];
                };
                this.isDone = () => {
                    return this.history.urls.length == this.index;
                };
                this.history = history;
            }
        };
    }
}
exports.BrowseHistory = BrowseHistory;
