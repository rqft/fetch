"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Peq = void 0;
const pariah_1 = require("../pariah");
var Peq;
(function (Peq) {
    Peq.Url = new URL("https://link.samifying.com/api");
    class API extends pariah_1.Pariah {
        constructor() {
            super(Peq.Url);
        }
        async cacheUuid(uuid) {
            return await this.get.json("/cache/uuid/:uuid", {
                ":uuid": uuid,
            });
        }
        async cacheName(name) {
            return await this.get.json("/cache/name/:name", {
                ":name": name,
            });
        }
        async getAllLinks() {
            return await this.get.json("/data/");
        }
        async getLink(id) {
            return await this.get.json("/data/:id", {
                ":id": id,
            });
        }
        async uuidLink(uuid) {
            return await this.get.json("/data/uuid/:uuid", {
                ":uuid": uuid,
            });
        }
        async uuidLinkHistory(uuid) {
            return await this.get.json("/data/uuid/:uuid/history", {
                ":uuid": uuid,
            });
        }
        async discordLink(id) {
            return await this.get.json("/data/discord/:id", {
                ":id": id,
            });
        }
        async discordLinkHistory(id) {
            return await this.get.json("/data/discord/:id/history", {
                ":id": id,
            });
        }
        async guildLink(id) {
            return await this.get.json("/data/guild/:id", {
                ":id": id,
            });
        }
        async linkedUser(uuid) {
            return await this.get.json("/user/:uuid", {
                ":uuid": uuid,
            });
        }
        async linkedGuildMember(guildId, uuid) {
            return await this.get.json("/user/:guildId/:uuid", {
                ":guildId": guildId,
                ":uuid": uuid,
            });
        }
        async linkedGuildMemberRole(guildId, roleId, uuid) {
            return await this.get.json("/user/:guildId/:roleId/:uuid", {
                ":guildId": guildId,
                ":roleId": roleId,
                ":uuid": uuid,
            });
        }
        async serverStatus(hostname, port) {
            return await this.get.json("/status/:hostname/:port", {
                ":hostname": hostname,
                ":port": port || "",
            });
        }
        async info() {
            return await this.get.json("/info");
        }
        async guilds() {
            return await this.get.json("/info/guilds");
        }
        async lookup(name) {
            return await this.get.json("/lookup/:name", {
                ":name": name,
            });
        }
        async lookupGuildMember(guildId, name) {
            return await this.get.json("/lookup/:guildId/:name", {
                ":guildId": guildId,
                ":name": name,
            });
        }
        async lookupGuildMemberRole(guildId, roleId, name) {
            return await this.get.json("/lookup/:guildId/:roleId/:name", {
                ":guildId": guildId,
                ":roleId": roleId,
                ":name": name,
            });
        }
    }
    Peq.API = API;
})(Peq = exports.Peq || (exports.Peq = {}));
