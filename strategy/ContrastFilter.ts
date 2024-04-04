import { IFilter } from "./IFilter";

export class ContrastFilter implements IFilter{
    apply= (fileName:string) => {
        console.log("Contrast filter applied...",fileName)
    };

}