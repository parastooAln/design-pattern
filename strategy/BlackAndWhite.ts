import { IFilter } from "./IFilter";

export class BlackAndWhite implements IFilter{
    apply= (fileName:string) => {
        console.log("BlackAndWhite filter applied...",fileName)
    };
}