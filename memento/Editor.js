"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = void 0;
const EditorState_1 = require("./EditorState");
class Editor {
    constructor() {
        this.content = null;
        this.createState = () => {
            return new EditorState_1.EditorState(this.content);
        };
        this.restore = (state) => {
            this.content = state.getContent();
        };
    }
    getContent() {
        return this.content;
    }
    setContent(value) {
        this.content = value;
    }
}
exports.Editor = Editor;
