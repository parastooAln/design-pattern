
export class BrowseHistory {
    private _urls: Array<string> = [];
    public pop = () => {
        this.urls.pop()
    }
    public push = (value:string) => {
        this.urls.push(value);
    }
    public get urls(): Array<string> {
        return this._urls;
    }
}