import { Data } from "../data";
import { Pariah } from "../pariah";
export declare module Peq {
    const Url: URL;
    interface Err {
        name: string;
        message: string;
        path: string;
        timestamp: number;
    }
    interface CachedItem {
        name: string;
        id: string;
    }
    interface Paged<T> {
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
    interface PagedSort {
        empty: boolean;
        sorted: boolean;
        unsorted: boolean;
    }
    interface Link {
        id: string;
        uuid: string;
        user: DiscordItem;
        guild: DiscordItem;
        createdAt: string;
    }
    interface DiscordItem {
        id: string;
        discordId: string;
        createdAt: string;
    }
    interface User {
        id: string;
        name: string;
        avatar: string;
    }
    interface GuildMember extends User {
        nickname: string;
    }
    interface Server {
        description: ServerDescription;
        players: ServerPlayers;
        version: ServerVersion;
        favicon: string;
        time: number;
    }
    interface ServerDescription {
        text: string;
    }
    interface ServerPlayers {
        max: number;
        online: number;
        sample: Array<Player> | null;
    }
    interface Player {
    }
    interface ServerVersion {
        name: string;
        protocol: number;
    }
    interface Info {
        id: string;
        name: string;
        serverCount: number;
        totalAccountLinks: number;
    }
    interface Guild {
        id: string;
        name: string;
        iconUrl: string | null;
        memberCount: number;
    }
    class API extends Pariah {
        constructor();
        cacheUuid(uuid: string): Promise<Data<Err | CachedItem>>;
        cacheName(name: string): Promise<Data<Err | CachedItem>>;
        getAllLinks(): Promise<Data<Err | Paged<Link>>>;
        getLink(id: number): Promise<Data<Err | Link>>;
        uuidLink(uuid: string): Promise<Data<Err | Link>>;
        uuidLinkHistory(uuid: string): Promise<Data<Err | Array<Link>>>;
        discordLink(id: string): Promise<Data<Err | Link>>;
        discordLinkHistory(id: string): Promise<Data<Err | Array<Link>>>;
        guildLink(id: string): Promise<Data<Err | Paged<Link>>>;
        linkedUser(uuid: string): Promise<Data<Err | User>>;
        linkedGuildMember(guildId: string, uuid: string): Promise<Data<Err | GuildMember>>;
        linkedGuildMemberRole(guildId: string, roleId: string, uuid: string): Promise<Data<Err | GuildMember>>;
        serverStatus(hostname: string, port?: string): Promise<Data<Err | Server>>;
        info(): Promise<Data<Err | Info>>;
        guilds(): Promise<Data<Err | Array<Guild>>>;
        lookup(name: string): Promise<Data<Err | User>>;
        lookupGuildMember(guildId: string, name: string): Promise<Data<Err | GuildMember>>;
        lookupGuildMemberRole(guildId: string, roleId: string, name: string): Promise<Data<Err | GuildMember>>;
    }
}
