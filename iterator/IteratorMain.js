"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IteratorMain = void 0;
const BrowseHistory_1 = require("./BrowseHistory");
const IteratorMain = () => {
    let history = new BrowseHistory_1.BrowseHistory();
    history.push("a");
    history.push("b");
    history.push("c");
    let iterator = history.createIterator();
    while (!iterator.isDone()) {
        console.log(iterator.current());
        iterator.next();
    }
};
exports.IteratorMain = IteratorMain;
