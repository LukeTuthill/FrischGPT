/* eslint-disable @typescript-eslint/naming-convention */
import { Configuration, OpenAIApi } from "openai";

export class ChatGPT {
    api:OpenAIApi;
    constructor(apikey:string) {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
          });
        this.api = new OpenAIApi(configuration);
    }

    fixCode(code:string) {
        const response = this.api.createEdit({
            model: "text-davinci-edit-001",
            input: code,
            instruction: "Fix code",
            temperature: 0,
            top_p: 1,
          });
        response.then((r) => {
			if (r !== undefined) {
				return r;
			}
		});
        return "";
    }

    askQuestion(prompt:string) {
        const response = this.api.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0,
            max_tokens: 300,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });
        response.then((r) => {
			if (r !== undefined) {
				return r;
			}
		});
        return "";
    }
}





