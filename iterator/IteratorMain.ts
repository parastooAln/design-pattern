import { BrowseHistory } from "./BrowseHistory"

export const Main = () => {
    let history=new BrowseHistory();
    history.push("a");
    history.push("b");
    history.push("c");
}