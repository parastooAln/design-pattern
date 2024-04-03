import { EditorState } from "./EditorState"

export class History {
    private states: Array<EditorState> = []

    public pop = () => {
        this.states.pop()
        return this.states[this.states.length - 1]
    }
    public push = (state: EditorState) => {
        this.states.push(state);
    }
}