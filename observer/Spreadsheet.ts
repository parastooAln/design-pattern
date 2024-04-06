import { DataSource } from "./DataSource";
import { Observer } from "./Observer";

export class Spreadshit implements Observer{
    private dataSource=new DataSource()
    update= () => {
        console.log("Update spreadshit ",this.dataSource.value);
    };

}