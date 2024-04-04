import { IFilter } from "./IFilter";

export class ImageStorage{
    public store=(image:string,filter:IFilter)=>{
        filter.apply(image)        
    }
}