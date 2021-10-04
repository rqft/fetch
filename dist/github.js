"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHub = void 0;
const base_1 = require("./lib/base");
var GitHub;
(function (GitHub) {
    class GitHubBase {
        raw;
        constructor() {
            this.raw = new base_1.Pariah({
                baseUrl: "https://api.github.com",
                headers: { Accept: "application/vnd.github.v3+json" },
            });
        }
    }
    GitHub.GitHubBase = GitHubBase;
    function parseRepo(repo) {
        if (typeof repo === "string") {
            const [name, owner] = repo.split("/", 2);
            repo = { name, owner };
        }
        return repo;
    }
    GitHub.parseRepo = parseRepo;
    class CodesOfConduct extends GitHubBase {
        async codesOfConduct() {
            return this.raw.getJSON("/codes_of_conduct");
        }
        async codeOfConduct(key) {
            return this.raw.getJSON(`/codes_of_conduct/${key}`);
        }
        async repositoryCodeOfConduct(repo) {
            const { name, owner } = parseRepo(repo);
            return this.raw.getJSON(`/repos/${owner}/${name}/community/code_of_conduct`);
        }
    }
    GitHub.CodesOfConduct = CodesOfConduct;
    class Emojis extends GitHubBase {
        emojis() {
            return this.raw.getJSON("/emojis");
        }
    }
    GitHub.Emojis = Emojis;
    class Markdown extends GitHubBase {
        async markdown(text, mode = "markdown") {
            return this.raw.postArrayBuffer("/markdown", {
                body: JSON.stringify({ text, mode }),
            });
        }
    }
    GitHub.Markdown = Markdown;
})(GitHub = exports.GitHub || (exports.GitHub = {}));
