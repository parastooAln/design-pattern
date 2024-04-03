"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.History = void 0;
class History {
    constructor() {
        this.states = [];
        this.pop = () => {
            this.states.pop();
            return this.states[this.states.length - 1];
        };
        this.push = (state) => {
            this.states.push(state);
        };
    }
}
exports.History = History;
