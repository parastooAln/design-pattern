"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferMoneyTask = void 0;
const Task_1 = require("./Task");
class TransferMoneyTask extends Task_1.Task {
    constructor() {
        super(...arguments);
        this.doExecute = () => {
            console.log("Transfer money");
        };
    }
}
exports.TransferMoneyTask = TransferMoneyTask;
