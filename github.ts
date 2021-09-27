import { Base, BaseExtension } from "./base";

export module GitHub {
  export namespace CodesOfConduct {
    export interface CodeOfConduct {
      key: string;
      name: string;
      url: string;
      html_url?: string;
    }
    export interface CodeOfConductMeta extends CodeOfConduct {
      body: string;
    }
    export class CodesOfConduct extends BaseExtension {
      constructor() {
        super({
          baseUrl: "https://api.github.com",
          headers: { Accept: "application/vnd.github.v3+json" },
        });
      }
      async codesOfConduct() {
        return this.getJSON<Array<CodeOfConduct>>("/codes_of_conduct");
      }
    }
  }
  export const A = "";
}
GitHub.A;
