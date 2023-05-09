import * as vscode from 'vscode';

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

export function getLanguage() {
    const editor = vscode.window.activeTextEditor;
    let fileName:string = "";
    if (editor !== undefined) {
        fileName = editor.document.fileName;
    }
    let splitFile = fileName.split(".");
    return splitFile[splitFile.length-1];
}

function pairLanguage(file:string) {
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