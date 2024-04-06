import { DataSource } from "./DataSource"
import { Spreadshit } from "./Spreadsheet"

export const ObserverMain=()=>{
    const dataSource=new DataSource()
    const spreadsheet1=new Spreadshit()
    const spreadsheet2=new Spreadshit()
    dataSource.addObserver(spreadsheet1);
    dataSource.addObserver(spreadsheet2);

    dataSource.value=5;
}