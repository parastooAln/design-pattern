"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateMain = void 0;
const AuditTrail_1 = require("./AuditTrail");
const TransferMoneyTask_1 = require("./TransferMoneyTask");
const templateMain = () => {
    const auditTrail = new AuditTrail_1.AuditTrail();
    const task = new TransferMoneyTask_1.TransferMoneyTask(auditTrail);
    task.execute("A");
};
exports.templateMain = templateMain;
