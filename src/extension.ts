import * as vscode from 'vscode';
import * as functions from './basicFunctions';

export async function activate(context: vscode.ExtensionContext) {
	console.log('WARNING: FRISCH GPT HAS BEEN ACTIVATED');
	const apikey = await vscode.window.showInputBox({prompt: "ChatGPT Api key:"});
	if (apikey !== undefined) {
		functions.setGPT(apikey);
	}

	let command1 = vscode.commands.registerCommand('frischgpt.helloWorld', () => {
		vscode.window.showInformationMessage('Any comments, questions, concerns, or cries of outrage?');
	});

	let command2 = vscode.commands.registerCommand('frischgpt.inputText', () => {
		let question = vscode.window.showInputBox();
		question.then((q) => {
			if (q !== undefined) {
				vscode.window.showInformationMessage(functions.askQuestion(q));
			}
		});
	});

	let command3 = vscode.commands.registerCommand('frischgpt.highlight', () => {
		vscode.window.showInformationMessage(functions.getHighlightedText());
	});

	context.subscriptions.push(command1);
}

export function deactivate() {}
