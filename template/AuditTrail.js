"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditTrail = void 0;
class AuditTrail {
    constructor() {
        this.record = (str) => {
            console.log(`Recording ${str}`);
        };
    }
}
exports.AuditTrail = AuditTrail;
