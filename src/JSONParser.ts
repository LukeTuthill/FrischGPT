/* eslint-disable @typescript-eslint/naming-convention */
import * as json from "./test.json";


export interface ProgrammingLanguagesExtensions {
    name:        string;
    type:        Type;
    extensions?: string[];
}

export enum Type {
    Data = "data",
    Markup = "markup",
    Programming = "programming",
    Prose = "prose",
}

export class Convert {
    public static toProgrammingLanguagesExtensions(): ProgrammingLanguagesExtensions[] {
        return JSON.parse(json.toString());
    }
}
