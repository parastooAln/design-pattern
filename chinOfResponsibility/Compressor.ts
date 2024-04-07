import { Handler } from "./Handler";
import { HttpRequest } from "./HttpRequest";

export class Compressor extends Handler {
    public doHandle = (request: HttpRequest) => {
        console.log("handle Compressor");
        return false;
    };
}