import { Pariah } from "./lib/base";
export declare module GitHub {
    class GitHubBase {
        raw: Pariah;
        constructor();
    }
    type RepoString = `${string}/${string}`;
    interface RepoObject {
        owner: string;
        name: string;
    }
    type Repo = RepoString | RepoObject;
    function parseRepo(repo: Repo): RepoObject;
    interface CodeOfConduct {
        key: string;
        name: string;
        url: string;
        html_url?: string;
    }
    interface CodeOfConductMeta extends CodeOfConduct {
        body: string;
    }
    class CodesOfConduct extends GitHubBase {
        codesOfConduct(): Promise<CodeOfConduct[]>;
        codeOfConduct(key: string): Promise<CodeOfConductMeta>;
        repositoryCodeOfConduct(repo: Repo): Promise<CodeOfConductMeta>;
    }
    class Emojis extends GitHubBase {
        emojis(): Promise<Record<string, `https://github.githubassets.com/images/icons/emoji/unicode/${string}.png?v8`>>;
    }
    class Markdown extends GitHubBase {
        markdown(text: string, mode?: string): Promise<ArrayBuffer>;
    }
}
