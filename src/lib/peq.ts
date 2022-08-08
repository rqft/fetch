import { Data } from "../data";
import { Pariah } from "../pariah";

export module Peq {
    export const Url = new URL("https://link.samifying.com/api");

    export interface Err {
        name: string;
        message: string;
        path: string;
        timestamp: number;
    }

    export interface CachedItem {
        name: string;
        id: string;
    }

    export interface Paged<T> {
        totalPages: number;
        totalElements: number;
        last: boolean;
        size: number;
        number: number;
        sort: PagedSort;
        numberOfElements: number;
        first: boolean;
        empty: boolean;
        content: Array<T>;
    }

    export interface PagedSort {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    }

    export interface Link {
        id: string;
        uuid: string;
        user: DiscordItem;
        guild: DiscordItem;
        createdAt: string;
    }

    export interface DiscordItem {
        id: string;
        discordId: string;
        createdAt: string;
    }

    export interface User {
        id: string;
        name: string;
        avatar: string;
    }

    export interface GuildMember extends User {
        nickname: string;
    }

    export interface Server {
        description: ServerDescription;
        players: ServerPlayers;
        version: ServerVersion;
        favicon: string;
        time: number;
    }

    export interface ServerDescription {
        text: string;
    }

    export interface ServerPlayers {
        max: number;
        online: number;
        sample: Array<Player> | null;
    }

    export interface Player {}

    export interface ServerVersion {
        name: string;
        protocol: number;
    }

    export interface Info {
        id: string;
        name: string;
        serverCount: number;
        totalAccountLinks: number;
    }

    export interface Guild {
        id: string;
        name: string;
        iconUrl: string | null;
        memberCount: number;
    }

    export class API extends Pariah {
        constructor() {
            super(Url);
        }

        public async cacheUuid(uuid: string): Promise<Data<Err | CachedItem>> {
            return await this.get.json("/cache/uuid/:uuid", {
                ":uuid": uuid,
            });
        }

        public async cacheName(name: string): Promise<Data<Err | CachedItem>> {
            return await this.get.json("/cache/name/:name", {
                ":name": name,
            });
        }

        public async getAllLinks(): Promise<Data<Err | Paged<Link>>> {
            return await this.get.json("/data/");
        }

        public async getLink(id: number): Promise<Data<Err | Link>> {
            return await this.get.json("/data/:id", {
                ":id": id,
            });
        }

        public async uuidLink(uuid: string): Promise<Data<Err | Link>> {
            return await this.get.json("/data/uuid/:uuid", {
                ":uuid": uuid,
            });
        }

        public async uuidLinkHistory(
            uuid: string
        ): Promise<Data<Err | Array<Link>>> {
            return await this.get.json("/data/uuid/:uuid/history", {
                ":uuid": uuid,
            });
        }

        public async discordLink(id: string): Promise<Data<Err | Link>> {
            return await this.get.json("/data/discord/:id", {
                ":id": id,
            });
        }

        public async discordLinkHistory(
            id: string
        ): Promise<Data<Err | Array<Link>>> {
            return await this.get.json("/data/discord/:id/history", {
                ":id": id,
            });
        }

        public async guildLink(id: string): Promise<Data<Err | Paged<Link>>> {
            return await this.get.json("/data/guild/:id", {
                ":id": id,
            });
        }

        public async linkedUser(uuid: string): Promise<Data<Err | User>> {
            return await this.get.json("/user/:uuid", {
                ":uuid": uuid,
            });
        }

        public async linkedGuildMember(
            guildId: string,
            uuid: string
        ): Promise<Data<Err | GuildMember>> {
            return await this.get.json("/user/:guildId/:uuid", {
                ":guildId": guildId,
                ":uuid": uuid,
            });
        }

        public async linkedGuildMemberRole(
            guildId: string,
            roleId: string,
            uuid: string
        ): Promise<Data<Err | GuildMember>> {
            return await this.get.json("/user/:guildId/:roleId/:uuid", {
                ":guildId": guildId,
                ":roleId": roleId,
                ":uuid": uuid,
            });
        }

        public async serverStatus(
            hostname: string,
            port?: string
        ): Promise<Data<Err | Server>> {
            return await this.get.json("/status/:hostname/:port", {
                ":hostname": hostname,
                ":port": port || "",
            });
        }

        public async info(): Promise<Data<Err | Info>> {
            return await this.get.json("/info");
        }

        public async guilds(): Promise<Data<Err | Array<Guild>>> {
            return await this.get.json("/info/guilds");
        }

        public async lookup(name: string): Promise<Data<Err | User>> {
            return await this.get.json("/lookup/:name", {
                ":name": name,
            });
        }

        public async lookupGuildMember(
            guildId: string,
            name: string
        ): Promise<Data<Err | GuildMember>> {
            return await this.get.json("/lookup/:guildId/:name", {
                ":guildId": guildId,
                ":name": name,
            });
        }

        public async lookupGuildMemberRole(
            guildId: string,
            roleId: string,
            name: string
        ): Promise<Data<Err | GuildMember>> {
            return await this.get.json("/lookup/:guildId/:roleId/:name", {
                ":guildId": guildId,
                ":roleId": roleId,
                ":name": name,
            });
        }
    }
}
