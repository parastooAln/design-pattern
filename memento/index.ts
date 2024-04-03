import {Editor} from './Editor';
import { History } from './History';
export const run=()=>{
    let editor=new Editor();
    var history=new History();

    editor.setContent('a');
    history.push(editor.createState())
    console.log(editor.getContent())

    editor.setContent('b');
    console.log(editor.getContent())

    editor.setContent('c');
    history.push(editor.createState())
    console.log(editor.getContent())

    editor.restore(history.pop());
    console.log(editor.getContent())

    // editor.restore(history.pop());
    // console.log(editor.getContent())
}