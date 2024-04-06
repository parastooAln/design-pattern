import { Observer } from "./Observer";

export class Subject{
    private observers:Array<Observer>=[];
    public addObserver=(o:Observer)=>{
        this.observers.push(o);
    }

    public removeObserver=(o:Observer)=>{
        this.observers=this.observers.splice(this.observers.indexOf(o),1);
    }

    public notify=()=>{
        this.observers.forEach(o=>o.update());
    }
}