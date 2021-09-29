import { Pariah } from "./lib/base";

export module GitHub {
  export class GitHubBase {
    public raw: Pariah;
    constructor() {
      this.raw = new Pariah({
        baseUrl: "https://api.github.com",
        headers: { Accept: "application/vnd.github.v3+json" },
      });
    }
  }
  export type RepoString = `${string}/${string}`;
  export interface RepoObject {
    owner: string;
    name: string;
  }
  export type Repo = RepoString | RepoObject;
  export function parseRepo(repo: Repo) {
    if (typeof repo === "string") {
      const [name, owner] = repo.split("/", 2);
      repo = { name, owner };
    }
    return repo;
  }
  export interface CodeOfConduct {
    key: string;
    name: string;
    url: string;
    html_url?: string;
  }
  export interface CodeOfConductMeta extends CodeOfConduct {
    body: string;
  }
  export class CodesOfConduct extends GitHubBase {
    async codesOfConduct() {
      return this.raw.getJSON<Array<CodeOfConduct>>("/codes_of_conduct");
    }
    async codeOfConduct(key: string) {
      return this.raw.getJSON<CodeOfConductMeta>(`/codes_of_conduct/${key}`);
    }
    async repositoryCodeOfConduct(repo: Repo) {
      const { name, owner } = parseRepo(repo);
      return this.raw.getJSON<CodeOfConductMeta>(
        `/repos/${owner}/${name}/community/code_of_conduct`
      );
    }
  }
  export class Emojis extends GitHubBase {
    emojis() {
      return this.raw.getJSON<
        Record<
          string,
          `https://github.githubassets.com/images/icons/emoji/unicode/${string}.png?v8`
        >
      >("/emojis");
    }
  }
  export class Markdown extends GitHubBase {
    async markdown(text: string, mode: string = "markdown") {
      return this.raw.postArrayBuffer("/markdown", {
        body: JSON.stringify({ text, mode }),
      });
    }
  }
}
