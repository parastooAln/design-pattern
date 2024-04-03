"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorState = void 0;
class EditorState {
    constructor(value) {
        this.content = null;
        return this.content = value;
    }
    getContent() {
        return this.content;
    }
}
exports.EditorState = EditorState;
