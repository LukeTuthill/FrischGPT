import * as vscode from 'vscode';

export function enterText(text: string, position:vscode.position) {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        editor.edit(editBuilder => {
            editBuilder.insert(editor.selection.active, text);
        });
    }
}

export function findPosition() {
    const editor = vscode.window.activeTextEditor;
	const text = editor.textDocument;
    const lineCount = text.lineCount;
    for (let line = 0; line < lineCount; i++) {
        
    }
}