
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "tfsd-ext" is now active!');

	let world = vscode.commands.registerCommand('tfsd-ext.helloWorld', () => {

		vscode.window.showInformationMessage('std::cout << "Hello world!\n" << std::endl;');
	});

	let lipsum = vscode.commands.registerCommand('tfsd-ext.Fishtext', () => {

		vscode.window.showInformationMessage('Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt ut labore \
		et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis \
		aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat \
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
	});

	let AQS = vscode.commands.registerCommand('tfsd-ext.AQSort', () => {

		vscode.window.showInformationMessage('int AQS(int amount, int karrayl[]){ \
			for (int i = 2; i < amount; i++){ \
				std::swap(karrayl[i], karrayl[i/2]); \
			} \
			for (int i = 0; i < amount; i++) { \
				std::cout << karrayl[i] << " "; \
			} \
			return 0; \
		}');
	});

	let Blank1 = vscode.commands.registerCommand('tfsd-ext.BlankField1', () => {

		vscode.window.showInformationMessage('Intended as a blank field to be filled as necessary');
	});

	let Blank2 = vscode.commands.registerCommand('tfsd-ext.BlankField2', () => {

		vscode.window.showInformationMessage('Intended as a (second and nth) blank field to be filled as necessary');
	});




	context.subscriptions.push(world);
	context.subscriptions.push(lipsum);
	context.subscriptions.push(AQS);
	context.subscriptions.push(Blank1);
	context.subscriptions.push(Blank2);
	
}


export function deactivate() {}
