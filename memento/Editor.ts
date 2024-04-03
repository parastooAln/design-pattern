import { EditorState } from "./EditorState";

export class Editor {
    private content:any = null;
    public getContent() {
        return this.content;
    }
    public setContent(value:any) {
        this.content = value;
    }

    public createState=()=>{
        return new EditorState(this.content)
    }
    
    public restore=(state:EditorState)=>{
        this.content=state.getContent()
    } 
}