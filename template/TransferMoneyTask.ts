import { Task } from "./Task";

export class TransferMoneyTask extends Task{
    public doExecute= () => {
        console.log("Transfer money");
    };
}