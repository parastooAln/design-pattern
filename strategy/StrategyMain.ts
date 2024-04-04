import { BlackAndWhite } from "./BlackAndWhite";
import { ContrastFilter } from "./ContrastFilter";
import { ImageStorage } from "./ImageStorage"

export const strategyMain=()=>{
    let imageStore=new ImageStorage();
    imageStore.store("a",new ContrastFilter())
    imageStore.store("a",new BlackAndWhite())
}