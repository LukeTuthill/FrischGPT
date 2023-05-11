import * as vscode from 'vscode';
import {ChatGPT} from './ChatGPT';

let chatgpt:ChatGPT;

export function setGPT(apikey:string) {
    chatgpt = new ChatGPT(apikey);
}

export function askQuestion(question:string) {
    return chatgpt.askQuestion(question);
}

//Has an optional position parameter, defaults to current cursor position
export function enterText(text: string, position?:vscode.Position) {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        editor.edit(editBuilder => {
            if (position === undefined) {
                editBuilder.insert(editor.selection.active, text);
            }
            else {
                editBuilder.insert(position, text);
            }
        });
    }
}

export function getHighlightedText() {
    let highlighted:string = "";
    const editor = vscode.window.activeTextEditor;
    if (editor !== undefined) {
        const selection = editor.selection;
        if (selection && !selection.isEmpty) {
            const range = new vscode.Range(selection.start.line, selection.start.character, 
                selection.end.line, selection.end.character);
            highlighted = editor.document.getText(range);
        }
    }
    return highlighted;
}

// export function getLanguage() {
//     const editor = vscode.window.activeTextEditor;
//     let fileName:string = "";
//     if (editor !== undefined) {
//         fileName = editor.document.fileName;
//     }
//     let splitFile = fileName.split(".");
//     return splitFile[splitFile.length-1];
// }


// export function findPosition() {
//     const editor = vscode.window.activeTextEditor;
//     if (editor !== undefined) {
//         const text = editor.document;
//         const lineCount = text.lineCount;
//         for (let line = 0; line < lineCount; line++) {
            
//         }
//     }
// }