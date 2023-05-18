import * as vscode from 'vscode';
import * as functions from './basicFunctions';
import * as json from './JSONParser';

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
		// let array:json.ProgrammingLanguagesExtensions[] = json.Convert.toProgrammingLanguagesExtensions();
		// vscode.window.showInformationMessage(array[0].name);
		vscode.window.showInformationMessage(vscode.window.);
	});

	let command2 = vscode.commands.registerCommand('frischgpt.askQuestion', () => {
		let question = vscode.window.showInputBox();
		question.then((q) => {
			if (q !== undefined) {
				let response = functions.askQuestion(q);
				response.then((r) => {
					if (r.data.choices[0].text !== undefined) {
						vscode.window.showInformationMessage(r.data.choices[0].text);
					}
				});
			}
		});
	});

	let command3 = vscode.commands.registerCommand('frischgpt.fixCode', () => {
		let response = functions.editText(functions.getHighlightedText());
		response.then((r) => {
			if (r.data.choices[0].text !== undefined) {
				functions.replaceText(r.data.choices[0].text);
			}
		});
	});

	let command4 = vscode.commands.registerCommand('frischgpt.fixCodeWithPrompt', () => {
		let prompt = vscode.window.showInputBox({prompt:"Prompt:"});
			prompt.then((p) => {
				let response = functions.editText(functions.getHighlightedText(), p);
				response.then((r) => {
				if (r.data.choices[0].text !== undefined) {
					functions.replaceText(r.data.choices[0].text);
				}
			});
		});
	});

	let command5 = vscode.commands.registerCommand('frischgpt.explainCode', () => {
		let choice = vscode.window.showQuickPick(["Explanation as comments in code", "Explanation separate"]);
		choice.then((c)=> {
			if (c === "Explanation as comments in code") {
				let response = functions.explainCode(functions.getHighlightedText(), true);
				response.then((r) => {
					if (r.data.choices[0].text !== undefined) {
						functions.replaceText(r.data.choices[0].text);
					}
				});
			}
			else if (c === "Explanation separate") {
				let response = functions.explainCode(functions.getHighlightedText(), false);
				response.then((r) => {
					if (r.data.choices[0].text !== undefined) {
						vscode.window.showInformationMessage(r.data.choices[0].text);
					}
				});
			}
		});
	});

	let command6 = vscode.commands.registerCommand('frischgpt.addCode', () => {
		let prompt = vscode.window.showInputBox({prompt:"Prompt:"});
			prompt.then((p) => {
				if (p !== undefined ) {
					let response = functions.askQuestion(p);
					response.then((r) => {
						if (r.data.choices[0].text !== undefined) {
							functions.enterText(r.data.choices[0].text);
						}
					});
				}
			});
		});

	let command7 = vscode.commands.registerCommand('frischgpt.translateCode', () => {
		let language = vscode.window.showInputBox({prompt:"Langauge to translate to:"});
			language.then((p) => {
				let response = functions.askQuestion("Translate this code to "+language+" "+functions.getText());
				let fileName = "test.txt";
				response.then((r) => {
				if (r.data.choices[0].text !== undefined) {
					functions.createFile(fileName, r.data.choices[0].text);
				}
			});
		});
	});

	context.subscriptions.push(command1);
}

export function deactivate() {}
