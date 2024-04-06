"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(auditTrail) {
        this.execute = (task) => {
            this.auditTrail.record(task);
            this.doExecute();
        };
        console.log("Base constructor");
        this.auditTrail = auditTrail;
    }
}
exports.Task = Task;
