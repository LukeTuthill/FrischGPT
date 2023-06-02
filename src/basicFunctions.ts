import * as vscode from 'vscode';
import {ChatGPT} from './ChatGPT';

let chatgpt:ChatGPT;

export function setGPT(apikey:string) {
    chatgpt = new ChatGPT(apikey);
}

export function testGPT() {
    return chatgpt.askQuestion("Say test if this is working") !== undefined;
}

export function askQuestion(question:string) {
    return chatgpt.askQuestion(question);
}

export function editText(text:string, prompt?:string) {
    if (prompt !== undefined) {
        return chatgpt.fixCode(text, prompt);
    }
    return chatgpt.fixCode(text);
}

export function explainCode(text:string, isComment:boolean) {
    if (isComment) {
    return chatgpt.explainCode(text, true);
    }
    return chatgpt.explainCode(text, false);
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

export function replaceText(text:string) {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        editor.edit(editBuilder => {
            const selection = editor.selection;
            if (selection && !selection.isEmpty) {
                const range = new vscode.Range(selection.start.line, selection.start.character, 
                    selection.end.line, selection.end.character);
                editBuilder.delete(range);
            }
            editBuilder.insert(editor.selection.active, text);
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

export function getText() {
    const editor = vscode.window.activeTextEditor;
    let text:string = "";
    if (editor !== undefined) {
        text = editor.document.getText();
    }
    return text;
}

export function createFile(fileName:string, text:string) {
    
}

export function getFileExtension() {
    const editor = vscode.window.activeTextEditor;
    let fileName:string = "";
    if (editor !== undefined) {
        fileName = editor.document.fileName;
    }
    let splitFile = fileName.split(".");
    return splitFile[splitFile.length-1];
}

export function getLanguage() {
    const extension:string = getFileExtension();
    
}


// export function findPosition() {
//     const editor = vscode.window.activeTextEditor;
//     if (editor !== undefined) {
//         const text = editor.document;
//         const lineCount = text.lineCount;
//         for (let line = 0; line < lineCount; line++) {
            
//         }
//     }
// }