import { Requester } from "../lib/requester";

export const Uri = "https://pylon.bot/api";
export enum Methods {
    USER = "GET /user",
    USER_GUILDS_AVAILABLE = "GET /user/guilds/available",
    GUILD = "GET /guilds/:guildId",
    GUILD_STATS = "GET /guilds/:guildId/stats",
    USER_GUILDS = "GET /user/guilds",
    DEPLOYMENT = "GET /deployments/:deploymentId",
    PUBLISH_DEPLOYMENT = "POST /deployments/:deploymentId",
    KV_NAMESPACES = "GET /deployments/:deploymentId/kv/namespaces",
}

export class Pylon extends Requester {
    constructor(public readonly token: string) {
        super(Uri);
    }

    user() {
        return this.json(Methods.USER);
    }

    userGuildsAvailable() {
        return this.json(Methods.USER_GUILDS_AVAILABLE);
    }

    guild(guildId: string) {
        return this.json(Methods.GUILD, { ":guildId": guildId });
    }

    guildStats(guildId: string) {
        return this.json(Methods.GUILD_STATS, { ":guildId": guildId });
    }

    userGuilds() {
        return this.json(Methods.USER_GUILDS);
    }

    deployment(deploymentId: string) {
        return this.json(Methods.DEPLOYMENT, { ":deploymentId": deploymentId });
    }

    publishDeployment(deploymentId: string, body: any) {
        return this.json(
            Methods.PUBLISH_DEPLOYMENT,
            {
                ":deploymentId": deploymentId,
            },
            { body: JSON.stringify(body) }
        );
    }

    kvNamespaces(deploymentId: string) {
        return this.json(Methods.KV_NAMESPACES, {
            ":deploymentId": deploymentId,
        });
    }

    kvNamespace(deploymentId: string, namespace: string): KV {
        return new KV(deploymentId, namespace);
    }
}

export enum KVMethods {
    ITEM = "/items/:key",
}

export class KV extends Requester {
    constructor(
        public readonly deploymentId: string,
        public readonly namespace: string
    ) {
        super(
            `https://pylon.bot/api/deployments/${deploymentId}/namespaces/${namespace}`
        );
    }

    put(key: string, value: any) {
        this.json(
            `PUT ${KVMethods.ITEM}`,
            { ":key": key },
            { body: { string: JSON.stringify(value) } }
        );

        return this;
    }

    get(key: string) {
        return this.json(`GET ${KVMethods.ITEM}`, {
            ":key": key,
        });
    }

    list() {
        
    }
}
