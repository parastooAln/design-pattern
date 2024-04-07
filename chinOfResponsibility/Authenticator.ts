import { Handler } from "./Handler";
import { HttpRequest } from "./HttpRequest";

export class Authenticator extends Handler{
    public doHandle= (request:HttpRequest) => {
        let isValid=false
        if(request.userName=="admin" && request.password=="123"){            
            isValid=true
        }
        return !isValid         
    };    
}