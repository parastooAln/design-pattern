
export class HttpRequest {
    private _userName: string;
    private _password: string;

    constructor(userName: string, password: string) {
        this._userName = userName;
        this._password = password
    }

    public get userName(): string {
        return this._userName;
    }
    public set userName(value: string) {
        this._userName = value;
    }

    public get password(): string {
        return this._password;
    }
    public set password(value: string) {
        this._password = value;
    }
}