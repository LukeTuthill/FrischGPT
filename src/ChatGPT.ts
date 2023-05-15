/* eslint-disable @typescript-eslint/naming-convention */
import { Configuration, OpenAIApi } from "openai";

export class ChatGPT {
    api:OpenAIApi;
    constructor(apikey:string) {
        const configuration = new Configuration({
            apiKey: apikey,
          });
        this.api = new OpenAIApi(configuration);
    }

    fixCode(code:string, prompt?:string) {
        let instruction = "fix code";
        if (prompt !== undefined) {
            instruction = prompt;
        }
        return this.api.createEdit({
            model: "text-davinci-edit-001",
            input: code,
            instruction: instruction,
            temperature: 0,
            top_p: 1,
        });
    }

    askQuestion(prompt:string) {
        return this.api.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0,
            max_tokens: 300,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
    }

    explainCode(code:string, isComment:boolean) {
        if (isComment) {
            return this.api.createEdit({
                model: "text-davinci-edit-001",
                input: code,
                instruction: "Add a comment to the beginning of the code explaining what it does: "+code,
                temperature: 0,
                top_p: 1,
            });
        }
        else {
            return this.api.createCompletion({
                model: "text-davinci-003",
                prompt: "Explain this code: "+code,
                temperature: 0,
                max_tokens: 300,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            });
        }
    }
}





