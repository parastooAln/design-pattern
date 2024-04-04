import { BrowseHistory } from "./BrowseHistory"

export const IteratorMain = () => {
    let history=new BrowseHistory();
    history.push("a");
    history.push("b");
    history.push("c");

    let iterator=history.createIterator();
    while(!iterator.isDone()){
        console.log(iterator.current());
        iterator.next();        
    }
}