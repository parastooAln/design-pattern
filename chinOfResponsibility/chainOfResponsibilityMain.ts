import { Authenticator } from "./Authenticator";
import { Compressor } from "./Compressor";
import { HttpRequest } from "./HttpRequest";
import { Logger } from "./Logger";
import { Webserver } from "./Webserver";

function chainOfResponsibilityMain() {
    let compressor = new Compressor(null);
    let logger = new Logger(compressor)
    let auth = new Authenticator(logger)
    let webServer = new Webserver(auth);
    let httpRequest = new HttpRequest('admin', '1234');
    webServer.handle(httpRequest);
}