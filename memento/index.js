"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const Editor_1 = require("./Editor");
const History_1 = require("./History");
const run = () => {
    let editor = new Editor_1.Editor();
    var history = new History_1.History();
    editor.setContent('a');
    history.push(editor.createState());
    console.log(editor.getContent());
    editor.setContent('b');
    console.log(editor.getContent());
    editor.setContent('c');
    history.push(editor.createState());
    console.log(editor.getContent());
    editor.restore(history.pop());
    console.log(editor.getContent());
    // editor.restore(history.pop());
    // console.log(editor.getContent())
};
exports.run = run;
