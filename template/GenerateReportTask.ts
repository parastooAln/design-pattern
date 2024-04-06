import { Task } from "./Task";

export class GenerateReportTask extends Task{
    doExecute= () => {
        console.log("Generate Report");;
    }
}