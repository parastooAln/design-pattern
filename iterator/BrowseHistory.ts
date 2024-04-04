import { IIterator } from "./IItarator";
export class BrowseHistory {
    private urls: Array<string> = [];
    public pop = () => {
        this.urls.pop()
    }
    public push = (value: string) => {
        this.urls.push(value);
    }

    public createIterator=()=>{
        return new this.ArrayIterator(this);
    }

    public ArrayIterator = class implements IIterator<string>{
        private history: BrowseHistory;
        private index = 0;
        public constructor(history: BrowseHistory) {
            this.history = history
        }
        public next = () => {
            this.index++;
        };
        public current = () => {
            return this.history.urls[this.index];
        };
        public isDone = () => {
            return this.history.urls.length  == this.index
        };
    }
}