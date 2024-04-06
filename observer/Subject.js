"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subject = void 0;
class Subject {
    constructor() {
        this.observers = [];
        this.addObserver = (o) => {
            this.observers.push(o);
        };
        this.removeObserver = (o) => {
            this.observers = this.observers.splice(this.observers.indexOf(o), 1);
        };
        this.notify = () => {
            this.observers.forEach(o => o.update());
        };
    }
}
exports.Subject = Subject;
