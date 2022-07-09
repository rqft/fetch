import { Pariah } from "../pariah";

export module Discord {
    export const Url = (v: number) => new URL(`https://discord.com/api/v${v}`);

    export interface Options {
        token: string;
        version: number;
    }

    export module Errors {
        export interface BaseError<T> {
            code: number;
            message: string;
            errors: T;
        }

        export interface ArrayError extends BaseError<ArrayErrorRaw> {}

        export interface ArrayErrorRaw {
            [key: string]: {
                [index: string]: {
                    [property: string]: {
                        _errors: Array<ErrorRaw>;
                    };
                };
            };
        }

        export interface ErrorRaw {
            code: string;
            message: string;
        }

        export interface ObjectError
            extends BaseError<Record<string, ObjectErrorRaw>> {}

        export interface ObjectErrorRaw {
            _errors: Array<ErrorRaw>;
        }

        export interface RequestError
            extends BaseError<Record<string, Array<ErrorRaw>>> {}
    }

    export module Infra {
        export interface BaseObject {
            id: string;
        }

        export type Partial<T> = T extends BaseObject
            ? globalThis.Partial<T> & BaseObject
            : T;

        export const Permissions = {
            CREATE_INSTANT_INVITE: 1n << 0n,
            KICK_MEMBERS: 1n << 1n,
            BAN_MEMBERS: 1n << 2n,
            ADMINISTRATOR: 1n << 3n,
            MANAGE_CHANNELS: 1n << 4n,
            MANAGE_GUILD: 1n << 5n,
            ADD_REACTIONS: 1n << 6n,
            VIEW_AUDIT_LOG: 1n << 7n,
            PRIORITY_SPEAKER: 1n << 8n,
            STREAM: 1n << 9n,
            VIEW_CHANNEL: 1n << 10n,
            SEND_MESSAGES: 1n << 11n,
            SEND_TTS_MESSAGES: 1n << 12n,
            MANAGE_MESSAGES: 1n << 13n,
            EMBED_LINKS: 1n << 14n,
            ATTACH_FILES: 1n << 15n,
            READ_MESSAGE_HISTORY: 1n << 16n,
            MENTION_EVERYONE: 1n << 17n,
            USE_EXTERNAL_EMOJIS: 1n << 18n,
            VIEW_GUILD_INSIGHTS: 1n << 19n,
            CONNECT: 1n << 20n,
            SPEAK: 1n << 21n,
            MUTE_MEMBERS: 1n << 22n,
            DEAFEN_MEMBERS: 1n << 23n,
            MOVE_MEMBERS: 1n << 24n,
            USE_VAD: 1n << 25n,
            CHANGE_NICKNAME: 1n << 26n,
            MANAGE_NICKNAMES: 1n << 27n,
            MANAGE_ROLES: 1n << 28n,
            MANAGE_WEBHOOKS: 1n << 29n,
            MANAGE_EMOJIS_AND_STICKERS: 1n << 30n,
            USE_APPLICATION_COMMANDS: 1n << 31n,
            REQUEST_TO_SPEAK: 1n << 32n,
            MANAGE_EVENTS: 1n << 33n,
            MANAGE_THREADS: 1n << 34n,
            CREATE_PUBLIC_THREADS: 1n << 35n,
            CREATE_PRIVATE_THREADS: 1n << 36n,
            USE_EXTERNAL_STICKERS: 1n << 37n,
            SEND_MESSAGES_IN_THREADS: 1n << 38n,
            USE_EMBEDDED_ACTIVITIES: 1n << 39n,
            MODERATE_MEMBERS: 1n << 40n,
        };

        export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

        export type Override<T, U> = globalThis.Omit<T, keyof U> & U;

        type XOR<T, U> = T | U extends object
            ?
                  | ({ [P in Exclude<keyof T, keyof U>]?: never } & U)
                  | ({ [P in Exclude<keyof U, keyof T>]?: never } & T)
            : T | U;

        export interface SearchBefore {
            before?: string;
            limit?: number;
        }

        export interface SearchAfter {
            after?: string;
            limit?: number;
        }

        export interface SearchAround {
            around?: string;
            limit?: number;
        }

        export type Search = XOR<SearchBefore, XOR<SearchAfter, SearchAround>>;
    }

    export module Applications {
        export interface Application extends Infra.BaseObject {
            name: string;
            icon?: string;
            description: string;
            rpc_origins?: Array<string>;
            bot_public: boolean;
            bot_require_code_grant: boolean;
            terms_of_service_url?: string;
            privacy_policy_url?: string;
            // @ts-ignore
            owner?: Infra.Partial<Users.User>;
            /** @deprecated */
            summary?: "";
            verify_key: string;
            // @ts-ignore
            team?: Infra.Partial<Users.Team>;
            guild_id?: string;
            primary_sku_id?: string;
            slug?: string;
            cover_image?: string;
            flags?: number;
            tags?: Array<string>;
            install_params?: InstallParams;
            custom_install_url?: string;
        }

        export enum Flags {
            GATEWAY_PRESENCE = 1 << 12,
            GATEWAY_PRESENCE_LIMITED = 1 << 13,
            GATEWAY_GUILD_MEMBERS = 1 << 14,
            GATEWAY_GUILD_MEMBERS_LIMITED = 1 << 15,
            VERIFICATION_PENDING_GUILD_LIMIT = 1 << 16,
            EMBEDDED = 1 << 17,
            GATEWAY_MESSAGE_CONTENT = 1 << 18,
            GATEWAY_MESSAGE_CONTENT_LIMITED = 1 << 19,
        }

        export interface InstallParams {
            scopes: Array<OAuth2.Scope>;
            permissions: string;
        }
    }

    export module AutoModeration {
        export const Endpoints = {
            ListAutoModerationRules: "/guilds/:guildId/auto-moderation/rules",
            GetAutoModerationRule:
                "/guilds/:guildId/auto-moderation/rules/:ruleId",
            CreateAutoModerationRule:
                "/guilds/{guild.id}/auto-moderation/rules",
            ModifyAutoModerationRule:
                "/guilds/{guild.id}/auto-moderation/rules/{auto_moderation_rule.id}",
            DeleteAutoModerationRule:
                "/guilds/{guild.id}/auto-moderation/rules/{auto_moderation_rule.id}",
        };

        export interface Rule<T extends TriggerTypes = TriggerTypes>
            extends Infra.BaseObject {
            guild_id: string;
            name: string;
            creator_id: string;
            event_type: EventTypes;
            trigger_type: T;
            trigger_metadata: T extends
                | TriggerTypes.KEYWORD
                | TriggerTypes.KEYWORD_PRESET
                ? TriggerMetadata
                : never;
            actions: Array<Action>;
            enabled: boolean;
            exempt_roles: Array<string>;
            exempt_channels: Array<string>;
        }

        export enum TriggerTypes {
            KEYWORD = 1,
            HARMFUL_LINK = 2,
            SPAM = 3,
            KEYWORD_PRESET = 4,
        }

        export interface TriggerMetadata {
            keyword_filter: Array<string>;
            presets: Array<KeywordPresetTypes>;
        }

        export enum KeywordPresetTypes {
            PROFANITY = 1,
            SEXUAL_CONTENT = 2,
            SLURS = 3,
        }

        export enum EventTypes {
            MESSAGE_SEND = 1,
        }

        export interface Action {
            type: ActionTypes;
            metadata?: ActionMetadata;
        }

        export enum ActionTypes {
            BLOCK_MESSAGE = 1,
            SEND_ALERT_MESSAGE = 2,
            TIMEOUT = 3,
        }

        export interface ActionMetadata {
            channel_id?: string;
            duration_seconds?: number;
        }

        export module Body {
            export type CreateAutoModerationRule<T extends TriggerTypes> = Omit<
                Rule<T>,
                "id" | "guild_id" | "creator_id"
            >;

            export type ModifyAutoModerationRule<T extends TriggerTypes> = Omit<
                CreateAutoModerationRule<T>,
                "trigger_type"
            >;
        }
    }

    export module Channels {
        export const Endpoints = {
            GetChannel: "/channels/:channelId",
            ModifyChannel: "/channels/:channelId",
            DeleteChannel: "/channels/:channelId",
            GetChannelMessages: "/channels/:channelId/messages",
            GetChannelMessage: "/channels/:channelId/messages/:messageId",
            CreateMessage: "/channels/:channelId/messages",
            CrosspostMessage:
                "/channels/:channelId/messages/:messageId/crosspost",
            CreateReaction:
                "/channels/:channelId/messages/:messageId/reactions/:emoji/@me",
            DeleteOwnReaction:
                "/channels/:channelId/messages/:messageId/reactions/:emoji/@me",
            DeleteUserReaction:
                "/channels/:channelId/messages/:messageId/reactions/:emoji/:userId",
            GetReactions:
                "/channels/:channelId/messages/:messageId/reactions/:emoji",
            DeleteAllReactions:
                "/channels/:channelId/messages/:messageId/reactions",
            DeleteAllReactionsForEmoji:
                "/channels/:channelId/messages/:messageId/reactions/:emoji",
            EditMessage: "/channels/:channelId/messages/:messageId",
            DeleteMessage: "/channels/:channelId/messages/:messageId",
            BulkDeleteMessages: "/channels/:channelId/messages/bulk-delete",
            EditChannelPermissions:
                "/channels/:channelId/permissions/:overwriteId",
            GetChannelInvites: "/channels/:channelId/invites",
            CreateChannelInvite: "/channels/:channelId/invites",
            DeleteChannelPermission:
                "/channels/:channelId/permissions/:overwriteId",
            FollowNewsChannel: "/channels/:channelId/followers",
            TriggerTypingIndicator: "/channels/:channelId/typing",
            GetPinnedMessages: "/channels/:channelId/pins",
            PinMessage: "/channels/:channelId/pins/:messageId",
            UnpinMessage: "/channels/:channelId/pins/:messageId",
            GroupDMAddRecipient: "/channels/:channelId/recipients/:userId",
            GroupDMRemoveRecipient: "/channels/:channelId/recipients/:userId",
            StartThreadFromMessage:
                "/channels/:channelId/messages/:messageId/threads",
            StartThreadWithoutMessage: "/channels/:channelId/threads",
            StartThreadInForumChannel: "/channels/:channelId/threads",
            JoinThread: "/channels/:channelId/thread-members/@me",
            AddThreadMember: "/channels/:channelId/thread-members/:userId",
            LeaveThread: "/channels/:channelId/thread-members/@me",
            RemoveThreadMember: "/channels/:channelId/thread-members/:userId",
            GetThreadMember: "/channels/:channelId/thread-members/:userId",
            ListThreadMembers: "/channels/:channelId/thread-members",
            ListPublicArchivedThreads:
                "/channels/:channelId/threads/archived/public",
            ListPrivateArchivedThreads:
                "/channels/:channelId/threads/archived/private",
            ListJoinedPrivateArchivedThreads:
                "/channels/:channelId/users/@me/threads/archived/private",
        };

        export interface Channel extends Infra.BaseObject {
            type: ChannelTypes;
            guild_id?: string;
            position?: number;
            permission_overwrites?: Array<Overwrite>;
            name?: string;
            topic?: string;
            nsfw?: boolean;
            last_message_id?: string;
            bitrate?: number;
            user_limit?: number;
            rate_limit_per_user?: number;
            recipients?: Array<Users.User>;
            icon?: string;
            owner_id?: string;
            application_id?: string;
            parent_id?: string;
            last_pin_timestamp?: string;
            rtc_region?: boolean;
            video_quality_mode?: VideoQualityModes;
            message_count?: number;
            member_count?: number;
            thread_metadata?: ThreadMetadata;
            member?: ThreadMember;
            default_auto_archive_duration?: number;
            permissions?: string;
            flags?: number;
        }

        export enum ChannelTypes {
            GUILD_TEXT = 0,
            DM = 1,
            GUILD_VOICE = 2,
            GROUP_DM = 3,
            GUILD_CATEGORY = 4,
            GUILD_NEWS = 5,
            GUILD_NEWS_THREAD = 10,
            GUILD_PUBLIC_THREAD = 11,
            GUILD_PRIVATE_THREAD = 12,
            GUILD_STAGE_VOICE = 13,
            GUILD_DIRECTORY = 14,
            GUILD_FORUM = 15,
        }

        export enum VideoQualityModes {
            AUTO = 1,
            FULL = 2,
        }

        export enum Flags {
            PINNED = 1 << 1,
        }

        export interface ThreadMetadata {
            archived: boolean;
            auto_archive_duration: number;
            archive_timestamp: number;
            locked: boolean;
            invitable?: boolean;
            create_timestamp?: string;
        }

        export interface Overwrite extends Infra.BaseObject {
            type: OverwriteTypes;
            allow: number;
            deny: number;
        }

        export enum OverwriteTypes {
            ROLE = 0,
            MEMBER = 1,
        }

        export interface Message extends Infra.BaseObject {
            channel_id: string;
            author: Users.User;
            content: string;
            timestamp: string;
            edited_timestamp?: string;
            tts: boolean;
            mention_everyone: boolean;
            mentions: Array<Users.User>;
            mention_roles: Array<string>;
            mention_channels?: Array<ChannelMention>;
            attachments: Array<Attachment>;
            embeds: Array<Embed>;
            reactions?: Array<Reaction>;
            nonce?: number | string;
            pinned: boolean;
            webhook_id?: string;
            type: MessageTypes;
            activity?: MessageActivity;
            application?: Infra.Partial<Applications.Application>;
            application_id?: string;
            message_reference?: MessageReference;
            flags?: number;
            referenced_message?: Message;
            interaction?: Interactions.Interaction;
            thread?: Channel;
            components?: Array<Interactions.Component>;
            sticker_items?: Array<Stickers.StickerItem>;
            /** @deprecated */
            stickers?: Array<Stickers.Sticker>;
            allowed_mentions?: AllowedMentions;
        }

        export enum MessageTypes {
            DEFAULT = 0,
            RECIPIENT_ADD = 1,
            RECIPIENT_REMOVE = 2,
            CALL = 3,
            CHANNEL_NAME_CHANGE = 4,
            CHANNEL_ICON_CHANGE = 5,
            CHANNEL_PINNED_MESSAGE = 6,
            USER_JOIN = 7,
            GUILD_BOOST = 8,
            GUILD_BOOST_TIER_1 = 9,
            GUILD_BOOST_TIER_2 = 10,
            GUILD_BOOST_TIER_3 = 11,
            CHANNEL_FOLLOW_ADD = 12,
            GUILD_DISCOVERY_DISQUALIFIED = 14,
            GUILD_DISCOVERY_REQUALIFIED = 15,
            GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING = 16,
            GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING = 17,
            THREAD_CREATED = 18,
            REPLY = 19,
            CHAT_INPUT_COMMAND = 20,
            THREAD_STARTER_MESSAGE = 21,
            GUILD_INVITE_REMINDER = 22,
            CONTEXT_MENU_COMMAND = 23,
            AUTO_MODERATION_ACTION = 24,
        }

        export interface MessageActivity {
            type: MessageActivityTypes;
            party_id?: string;
        }

        export enum MessageActivityTypes {
            JOIN = 1,
            SPECTATE = 2,
            LISTEN = 3,
            JOIN_REQUEST = 5,
        }

        export enum MessageFlags {
            CROSS_POSTED = 1 << 0,
            IS_CROSSPOST = 1 << 1,
            SUPPRESS_EMBEDS = 1 << 2,
            SOURCE_MESSAGE_DELETED = 1 << 3,
            URGENT = 1 << 4,
            HAS_THREAD = 1 << 5,
            EPHEMERAL = 1 << 6,
            LOADING = 1 << 7,
            FAILED_TO_MENTION_SOME_ROLES_IN_THREAD = 1 << 8,
        }

        export interface MessageReference {
            message_id?: string;
            channel_id?: string;
            guild_id?: string;
            fail_if_not_exists?: boolean;
        }

        export interface FollowedChannel {
            channel_id: string;
            webhook_id: string;
        }

        export interface Reaction {
            count: number;
            me: boolean;
            emoji: Infra.Partial<Emojis.Emoji>;
        }

        export interface ThreadMember {
            id?: string;
            user_id?: string;
            join_timestamp: string;
            flags: number;
        }

        export interface Embed {
            title?: string;
            type?: EmbedTypes;
            description?: string;
            url?: string;
            timestamp?: string;
            color?: number;
            footer?: EmbedFooter;
            image?: EmbedImage;
            thumbnail?: EmbedImage;
            video?: EmbedImage;
            provider?: EmbedProvider;
            author?: EmbedAuthor;
            fields?: Array<EmbedField>;
        }

        export enum EmbedTypes {
            RICH = "rich",
            IMAGE = "image",
            VIDEO = "video",
            GIFV = "gifv",
            ARTICLE = "article",
            LINK = "link",
        }

        export interface EmbedImage {
            url: string;
            proxy_url?: string;
            height?: number;
            width?: number;
        }

        export interface EmbedFooter {
            text: string;
            icon_url?: string;
            proxy_icon_url?: string;
        }

        export interface EmbedProvider {
            name?: string;
            url?: string;
        }

        export interface EmbedAuthor extends EmbedProvider {
            name: string;
            icon_url?: string;
            proxy_icon_url?: string;
        }

        export interface EmbedFooter {
            text: string;
            icon_url?: string;
            proxy_icon_url?: string;
        }

        export interface EmbedField {
            name: string;
            value: string;
            inline?: boolean;
        }

        export interface Attachment extends Infra.BaseObject {
            filename: string;
            description?: string;
            content_type?: string;
            size: number;
            url: string;
            proxy_url: string;
            height?: number;
            width?: number;
            ephemeral?: boolean;
        }

        export interface ChannelMention extends Infra.BaseObject {
            guild_id: string;
            type: ChannelTypes;
            name: string;
        }

        export interface AllowedMentions {
            parse: Array<AllowedMentionTypes>;
            roles?: Array<string>;
            users?: Array<string>;
            replied_user?: boolean;
        }

        export enum AllowedMentionTypes {
            ROLE = "roles",
            USER = "users",
            EVERYONE = "everyone",
        }

        export module Body {
            export interface PostMessage {
                content?: string;
                tts?: boolean;
                embeds?: Array<Embed>;
                allowed_mentions?: AllowedMentions;
                message_reference?: MessageReference;
                components?: Array<Interactions.Component>;
                sticker_ids?: Array<string>;
                files?: Array<Buffer>;
                payload_json?: string;
                attachments?: Array<Infra.Partial<Attachment>>;
                flags?: number;
            }

            export interface CreateChannelInvite {
                max_age?: number;
                max_uses?: number;
                temporary?: boolean;
                unique?: boolean;
                target_type?: Invites.TargetType;
                target_user_id?: string;
                target_application_id?: string;
            }
        }
    }

    export module Emojis {
        export const Endpoints = {
            ListGuildEmojis: "/guilds/:guildId/emojis",
            GetGuildEmoji: "/guilds/:guildId/emojis/:emojiId",
            CreateGuildEmoji: "/guilds/:guildId/emojis",
            ModifyGuildEmoji: "/guilds/:guildId/emojis/:emojiId",
            DeleteGuildEmoji: "/guilds/:guildId/emojis/:emojiId",
        };

        export interface Emoji extends Infra.BaseObject {
            name?: string;
            roles?: Array<string>;
            user?: Users.User;
            require_colons?: boolean;
            managed?: boolean;
            animated?: boolean;
            available?: boolean;
        }
    }

    export module Interactions {
        export interface Interaction extends Infra.BaseObject {}
        export interface Component extends Infra.BaseObject {}
    }

    export module Invites {
        export interface Invite extends Infra.BaseObject {}
        export enum TargetType {
            STREAM = 1,
            EMBEDDED_APPLICATION = 2,
        }
    }

    export module Stickers {
        export interface Sticker extends Infra.BaseObject {}
        export interface StickerItem extends Infra.BaseObject {}
    }

    export module Users {
        export interface User extends Infra.BaseObject {}
        export interface Team extends Infra.BaseObject {}
        export interface Member extends Infra.BaseObject {
            user: User;
        }
    }

    export module OAuth2 {
        export const Endpoints = {
            Authorize: "/oauth2/authorize",
            Token: "/oauth2/token",
            RevokeToken: "/oauth2/revoke",
            CurrentBotApplication: "/oauth2/applications/@me",
            CurrentAuthorization: "/oauth2/@me",
        };

        export enum Scope {
            READ_ACTIVITIES = "activities.read",
            WRITE_ACTIVITIES = "activities.write",
            READ_APPLICATION_BUILDS = "applications.builds.read",
            UPLOAD_APPLICATION_BUILDS = "applications.builds.upload",
            APPLICATION_COMMANDS = "applications.commands.read",
            UPDATE_APPLICATION_COMMANDS = "applications.commands.update",
            UPDATE_APPLICATION_COMMANDS_PERMISSIONS = "applications.commands.permissions.update",
            APPLICATION_ENTITLEMENTS = "applications.entitlements",
            UPDATE_APPLICATION_STORE = "applications.store.update",
            BOT = "bot",
            CONNECTIONS = "connections.read",
            READ_DM_CHANNELS = "dm.channels.read",
            EMAIL = "email",
            JOIN_GROUP_DM = "gdm.join",
            GUILDS = "guilds.join",
            READ_GUILD_MEMBERS = "guilds.members.read",
            IDENTIFY = "identify",
            READ_MESSAGES = "messages.read",
            READ_RELATIONSHIPS = "relationships.read",
            RICH_PRESENCE = "rpc",
            WRITE_RPC_ACTIVITIES = "rpc.activities.write",
            READ_RPC_NOTIFICATIONS = "rpc.notifications.read",
            READ_RPC_VOICE = "rpc.voice.read",
            WRITE_RPC_VOICE = "rpc.voice.write",
            VOICE = "voice",
            INCOMING_WEBHOOK = "webhook.incoming",
        }
    }

    export class API extends Pariah {
        constructor(options?: Partial<Options>) {
            super(Url(options?.version || 10), {
                headers: {
                    Authorization: options?.token || "",
                    "User-Agent": "Rosa (https://npmjs.org/pariah, 10)",
                },
            });
        }

        public async listAutoModerationRules(guildId: string) {
            return await this.get.json<Array<AutoModeration.Rule>>(
                AutoModeration.Endpoints.CreateAutoModerationRule,
                {
                    ":guildId": guildId,
                }
            );
        }

        public async getAutoModerationRule(guildId: string, ruleId: string) {
            return this.get.json<AutoModeration.Rule>(
                AutoModeration.Endpoints.GetAutoModerationRule,
                {
                    ":guildId": guildId,
                    ":ruleId": ruleId,
                }
            );
        }

        public createAutoModerationRule<T extends AutoModeration.TriggerTypes>(
            guildId: string,
            body: AutoModeration.Body.CreateAutoModerationRule<T>
        ) {
            return this.post.json<AutoModeration.Rule>(
                AutoModeration.Endpoints.CreateAutoModerationRule,
                {
                    ":guildId": guildId,
                },
                { body }
            );
        }

        public modifyAutoModerationRule<T extends AutoModeration.TriggerTypes>(
            guildId: string,
            ruleId: string,
            body: AutoModeration.Body.ModifyAutoModerationRule<T>
        ) {
            return this.patch.json<AutoModeration.Rule>(
                AutoModeration.Endpoints.ModifyAutoModerationRule,
                {
                    ":guildId": guildId,
                    ":ruleId": ruleId,
                },
                { body }
            );
        }

        public deleteAutoModerationRule(guildId: string, ruleId: string) {
            return this.delete(
                AutoModeration.Endpoints.DeleteAutoModerationRule,
                {
                    ":guildId": guildId,
                    ":ruleId": ruleId,
                }
            );
        }

        public async getChannelMessages(
            channelId: string,
            filter?: Infra.Search
        ) {
            return await this.get.json<Array<Channels.Message>>(
                Channels.Endpoints.GetChannelMessages,
                {
                    ":channelId": channelId,
                    ...filter,
                }
            );
        }

        public async getChannelMessage(channelId: string, messageId: string) {
            return await this.get.json<Channels.Message>(
                Channels.Endpoints.GetChannelMessage,
                {
                    ":channelId": channelId,
                    ":messageId": messageId,
                }
            );
        }

        public async createChannelMessage(
            channelId: string,
            body: Channels.Body.PostMessage
        ) {
            return await this.post.json<Channels.Message>(
                Channels.Endpoints.CreateMessage,
                {
                    ":channelId": channelId,
                },
                { body }
            );
        }

        public async crosspostChannelMessage(channelId: string) {
            return await this.post.json<Channels.Message>(
                Channels.Endpoints.CrosspostMessage,
                {
                    ":channelId": channelId,
                }
            );
        }

        public async createMessageReaction(
            channelId: string,
            messageId: string,
            emoji: string
        ) {
            return await this.put.json<Channels.Message>(
                Channels.Endpoints.CreateReaction,
                {
                    ":channelId": channelId,
                    ":messageId": messageId,
                    ":emoji": emoji,
                }
            );
        }

        public async deleteOwnMessageReaction(
            channelId: string,
            messageId: string,
            emoji: string
        ) {
            return await this.delete(Channels.Endpoints.DeleteOwnReaction, {
                ":channelId": channelId,
                ":messageId": messageId,
                ":emoji": emoji,
            });
        }

        public async deleteUserMessageReaction(
            channelId: string,
            messageId: string,
            emoji: string,
            userId: string
        ) {
            return await this.delete(Channels.Endpoints.DeleteUserReaction, {
                ":channelId": channelId,
                ":messageId": messageId,
                ":emoji": emoji,
                ":userId": userId,
            });
        }

        public async getMessageReactions(
            channelId: string,
            messageId: string,
            emoji: string,
            filter?: Infra.Search
        ) {
            return await this.get.json<Array<Channels.Reaction>>(
                Channels.Endpoints.GetReactions,
                {
                    ":channelId": channelId,
                    ":messageId": messageId,
                    ":emoji": emoji,
                    ...filter,
                }
            );
        }

        public async deleteAllMessageReactions(
            channelId: string,
            messageId: string
        ) {
            return await this.delete(Channels.Endpoints.DeleteAllReactions, {
                ":channelId": channelId,
                ":messageId": messageId,
            });
        }

        public async deleteAllMessageReactionsForEmoji(
            channelId: string,
            messageId: string,
            emoji: string
        ) {
            return await this.delete(
                Channels.Endpoints.DeleteAllReactionsForEmoji,
                {
                    ":channelId": channelId,
                    ":messageId": messageId,
                    ":emoji": emoji,
                }
            );
        }

        public editChannelMessage(
            channelId: string,
            messageId: string,
            body: Channels.Body.PostMessage
        ) {
            return this.patch.json<Channels.Message>(
                Channels.Endpoints.EditMessage,
                {
                    ":channelId": channelId,
                    ":messageId": messageId,
                },
                { body }
            );
        }

        public async deleteChannelMessage(
            channelId: string,
            messageId: string
        ) {
            return await this.delete(Channels.Endpoints.DeleteMessage, {
                ":channelId": channelId,
                ":messageId": messageId,
            });
        }

        public async bulkDeleteChannelMessages(
            ...messages: Array<string> | [Array<string>]
        ) {
            return await this.post.json<Array<Channels.Message>>(
                Channels.Endpoints.BulkDeleteMessages,
                {},
                { body: { messages: messages.flat() } }
            );
        }

        public async editChannelPermissions(
            channelId: string,
            overwriteId: string,
            body: Channels.Overwrite
        ) {
            return await this.patch.json<Channels.Overwrite>(
                Channels.Endpoints.EditChannelPermissions,
                {
                    ":channelId": channelId,
                    ":overwriteId": overwriteId,
                },
                { body }
            );
        }

        public async getChannelInvites(channelId: string) {
            return await this.get.json<Array<Invites.Invite>>(
                Channels.Endpoints.GetChannelInvites,
                {
                    ":channelId": channelId,
                }
            );
        }

        public async createChannelInvite(
            channelId: string,
            body: Channels.Body.CreateChannelInvite
        ) {
            return await this.post.json<Invites.Invite>(
                Channels.Endpoints.CreateChannelInvite,
                {
                    ":channelId": channelId,
                },
                { body }
            );
        }

        public async deleteChannelPermission(
            channelId: string,
            overwriteId: string
        ) {
            return await this.delete(
                Channels.Endpoints.DeleteChannelPermission,
                {
                    ":channelId": channelId,
                    ":overwriteId": overwriteId,
                }
            );
        }

        public async followNewsChannel(
            channelId: string,
            webhookChannelId: string
        ) {
            return await this.put(
                Channels.Endpoints.FollowNewsChannel,
                {
                    ":channelId": channelId,
                },
                { body: { webhook_channel_id: webhookChannelId } }
            );
        }

        public async triggerTypingIndicator(channelId: string) {
            return await this.post(Channels.Endpoints.TriggerTypingIndicator, {
                ":channelId": channelId,
            });
        }

        public async getPinnedMessages(channelId: string) {
            return await this.get.json<Array<Channels.Message>>(
                Channels.Endpoints.GetPinnedMessages,
                {
                    ":channelId": channelId,
                }
            );
        }

        public async pinMessage(channelId: string, messageId: string) {
            return await this.put(Channels.Endpoints.PinMessage, {
                ":channelId": channelId,
                ":messageId": messageId,
            });
        }

        public async unpinMessage(channelId: string, messageId: string) {
            return await this.delete(Channels.Endpoints.UnpinMessage, {
                ":channelId": channelId,
                ":messageId": messageId,
            });
        }

        public async groupDmAddRecipient(
            channelId: string,
            userId: string,
            accessToken: string,
            nick?: string
        ) {
            return await this.put(
                Channels.Endpoints.GroupDMAddRecipient,
                {
                    ":channelId": channelId,
                    ":userId": userId,
                },
                {
                    body: {
                        access_token: accessToken,
                        nick,
                    },
                }
            );
        }

        public async groupDmRemoveRecipient(channelId: string, userId: string) {
            return await this.delete(
                Channels.Endpoints.GroupDMRemoveRecipient,
                {
                    ":channelId": channelId,
                    ":userId": userId,
                }
            );
        }
    }
}
