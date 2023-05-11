import {ChatGPTAPI} from 'chatgpt';

export class ChatGPT {
    api:ChatGPTAPI;
    constructor(apikey:string) {
        this.api = new ChatGPTAPI({apiKey: apikey, debug: false});
    }

    askQuestion(question:string) {
        let answer = this.api.sendMessage(question);
        answer.then((a) => {
			if (a !== undefined) {
				return a;
			}
		});
        return "";
    }
}