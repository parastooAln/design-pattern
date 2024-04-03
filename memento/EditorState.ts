export class EditorState {
    private content: any = null;
    public constructor(value: any) {
        return this.content = value;
    }
    public getContent() {
        return this.content;
    }
}