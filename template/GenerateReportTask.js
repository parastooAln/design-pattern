"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateReportTask = void 0;
const Task_1 = require("./Task");
class GenerateReportTask extends Task_1.Task {
    constructor() {
        super(...arguments);
        this.doExecute = () => {
            console.log("Generate Report");
            ;
        };
    }
}
exports.GenerateReportTask = GenerateReportTask;
