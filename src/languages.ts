// import resolveJsonModule from './Programming_Languages_Extensions.json';
// import { plainToClass } from "class-transformer";

export class Language {
    name!: string;
    type!: string;
    extensions!: string[];

    setName(name:string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setExtension(extension:string) {
        this.extensions[0] = extension;
    }
}