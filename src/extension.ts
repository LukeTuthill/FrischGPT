import * as vscode from 'vscode';
import * as functions from './basicFunctions';

export async function activate(context: vscode.ExtensionContext) {
	console.log('WARNING: FRISCH GPT HAS BEEN ACTIVATED');

	let initalCommand = vscode.commands.registerCommand('frischgpt.inputAPIKey', () => {
		let apikey = vscode.window.showInputBox({prompt: "ChatGPT Api key:"});
		apikey.then((a) => {
			if (a !== undefined) {
				functions.setGPT(a);
			}
		});
	});

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
