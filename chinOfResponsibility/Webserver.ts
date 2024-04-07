import { Handler } from "./Handler";
import { HttpRequest } from "./HttpRequest";

export class Webserver{
    private handler; 
    constructor(handler:Handler){
        this.handler=handler
    }
    public handle(request:HttpRequest ){
        this.handler.handle(request)
    }
}