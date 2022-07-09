/// <reference types="node" />
import { Pariah } from "../pariah";
export declare module Discord {
    const Url: (v: number) => URL;
    interface Options {
        token: string;
        version: number;
    }
    module Errors {
        interface BaseError<T> {
            code: number;
            message: string;
            errors: T;
        }
        interface ArrayError extends BaseError<ArrayErrorRaw> {
        }
        interface ArrayErrorRaw {
            [key: string]: {
                [index: string]: {
                    [property: string]: {
                        _errors: Array<ErrorRaw>;
                    };
                };
            };
        }
        interface ErrorRaw {
            code: string;
            message: string;
        }
        interface ObjectError extends BaseError<Record<string, ObjectErrorRaw>> {
        }
        interface ObjectErrorRaw {
            _errors: Array<ErrorRaw>;
        }
        interface RequestError extends BaseError<Record<string, Array<ErrorRaw>>> {
        }
    }
    module Infra {
        export interface BaseObject {
            id: string;
        }
        export type Partial<T> = T extends BaseObject ? globalThis.Partial<T> & BaseObject : T;
        export const Permissions: {
            CREATE_INSTANT_INVITE: bigint;
            KICK_MEMBERS: bigint;
            BAN_MEMBERS: bigint;
            ADMINISTRATOR: bigint;
            MANAGE_CHANNELS: bigint;
            MANAGE_GUILD: bigint;
            ADD_REACTIONS: bigint;
            VIEW_AUDIT_LOG: bigint;
            PRIORITY_SPEAKER: bigint;
            STREAM: bigint;
            VIEW_CHANNEL: bigint;
            SEND_MESSAGES: bigint;
            SEND_TTS_MESSAGES: bigint;
            MANAGE_MESSAGES: bigint;
            EMBED_LINKS: bigint;
            ATTACH_FILES: bigint;
            READ_MESSAGE_HISTORY: bigint;
            MENTION_EVERYONE: bigint;
            USE_EXTERNAL_EMOJIS: bigint;
            VIEW_GUILD_INSIGHTS: bigint;
            CONNECT: bigint;
            SPEAK: bigint;
            MUTE_MEMBERS: bigint;
            DEAFEN_MEMBERS: bigint;
            MOVE_MEMBERS: bigint;
            USE_VAD: bigint;
            CHANGE_NICKNAME: bigint;
            MANAGE_NICKNAMES: bigint;
            MANAGE_ROLES: bigint;
            MANAGE_WEBHOOKS: bigint;
            MANAGE_EMOJIS_AND_STICKERS: bigint;
            USE_APPLICATION_COMMANDS: bigint;
            REQUEST_TO_SPEAK: bigint;
            MANAGE_EVENTS: bigint;
            MANAGE_THREADS: bigint;
            CREATE_PUBLIC_THREADS: bigint;
            CREATE_PRIVATE_THREADS: bigint;
            USE_EXTERNAL_STICKERS: bigint;
            SEND_MESSAGES_IN_THREADS: bigint;
            USE_EMBEDDED_ACTIVITIES: bigint;
            MODERATE_MEMBERS: bigint;
        };
        export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
        export type Override<T, U> = globalThis.Omit<T, keyof U> & U;
        type XOR<T, U> = T | U extends object ? ({
            [P in Exclude<keyof T, keyof U>]?: never;
        } & U) | ({
            [P in Exclude<keyof U, keyof T>]?: never;
        } & T) : T | U;
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
        export {};
    }
    module Applications {
        interface Application extends Infra.BaseObject {
            name: string;
            icon?: string;
            description: string;
            rpc_origins?: Array<string>;
            bot_public: boolean;
            bot_require_code_grant: boolean;
            terms_of_service_url?: string;
            privacy_policy_url?: string;
            owner?: Infra.Partial<Users.User>;
            summary?: "";
            verify_key: string;
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
        enum Flags {
            GATEWAY_PRESENCE = 4096,
            GATEWAY_PRESENCE_LIMITED = 8192,
            GATEWAY_GUILD_MEMBERS = 16384,
            GATEWAY_GUILD_MEMBERS_LIMITED = 32768,
            VERIFICATION_PENDING_GUILD_LIMIT = 65536,
            EMBEDDED = 131072,
            GATEWAY_MESSAGE_CONTENT = 262144,
            GATEWAY_MESSAGE_CONTENT_LIMITED = 524288
        }
        interface InstallParams {
            scopes: Array<OAuth2.Scope>;
            permissions: string;
        }
    }
    module AutoModeration {
        const Endpoints: {
            ListAutoModerationRules: string;
            GetAutoModerationRule: string;
            CreateAutoModerationRule: string;
            ModifyAutoModerationRule: string;
            DeleteAutoModerationRule: string;
        };
        interface Rule<T extends TriggerTypes = TriggerTypes> extends Infra.BaseObject {
            guild_id: string;
            name: string;
            creator_id: string;
            event_type: EventTypes;
            trigger_type: T;
            trigger_metadata: T extends TriggerTypes.KEYWORD | TriggerTypes.KEYWORD_PRESET ? TriggerMetadata : never;
            actions: Array<Action>;
            enabled: boolean;
            exempt_roles: Array<string>;
            exempt_channels: Array<string>;
        }
        enum TriggerTypes {
            KEYWORD = 1,
            HARMFUL_LINK = 2,
            SPAM = 3,
            KEYWORD_PRESET = 4
        }
        interface TriggerMetadata {
            keyword_filter: Array<string>;
            presets: Array<KeywordPresetTypes>;
        }
        enum KeywordPresetTypes {
            PROFANITY = 1,
            SEXUAL_CONTENT = 2,
            SLURS = 3
        }
        enum EventTypes {
            MESSAGE_SEND = 1
        }
        interface Action {
            type: ActionTypes;
            metadata?: ActionMetadata;
        }
        enum ActionTypes {
            BLOCK_MESSAGE = 1,
            SEND_ALERT_MESSAGE = 2,
            TIMEOUT = 3
        }
        interface ActionMetadata {
            channel_id?: string;
            duration_seconds?: number;
        }
        module Body {
            type CreateAutoModerationRule<T extends TriggerTypes> = Omit<Rule<T>, "id" | "guild_id" | "creator_id">;
            type ModifyAutoModerationRule<T extends TriggerTypes> = Omit<CreateAutoModerationRule<T>, "trigger_type">;
        }
    }
    module Channels {
        const Endpoints: {
            GetChannel: string;
            ModifyChannel: string;
            DeleteChannel: string;
            GetChannelMessages: string;
            GetChannelMessage: string;
            CreateMessage: string;
            CrosspostMessage: string;
            CreateReaction: string;
            DeleteOwnReaction: string;
            DeleteUserReaction: string;
            GetReactions: string;
            DeleteAllReactions: string;
            DeleteAllReactionsForEmoji: string;
            EditMessage: string;
            DeleteMessage: string;
            BulkDeleteMessages: string;
            EditChannelPermissions: string;
            GetChannelInvites: string;
            CreateChannelInvite: string;
            DeleteChannelPermission: string;
            FollowNewsChannel: string;
            TriggerTypingIndicator: string;
            GetPinnedMessages: string;
            PinMessage: string;
            UnpinMessage: string;
            GroupDMAddRecipient: string;
            GroupDMRemoveRecipient: string;
            StartThreadFromMessage: string;
            StartThreadWithoutMessage: string;
            StartThreadInForumChannel: string;
            JoinThread: string;
            AddThreadMember: string;
            LeaveThread: string;
            RemoveThreadMember: string;
            GetThreadMember: string;
            ListThreadMembers: string;
            ListPublicArchivedThreads: string;
            ListPrivateArchivedThreads: string;
            ListJoinedPrivateArchivedThreads: string;
        };
        interface Channel extends Infra.BaseObject {
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
        enum ChannelTypes {
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
            GUILD_FORUM = 15
        }
        enum VideoQualityModes {
            AUTO = 1,
            FULL = 2
        }
        enum Flags {
            PINNED = 2
        }
        interface ThreadMetadata {
            archived: boolean;
            auto_archive_duration: number;
            archive_timestamp: number;
            locked: boolean;
            invitable?: boolean;
            create_timestamp?: string;
        }
        interface Overwrite extends Infra.BaseObject {
            type: OverwriteTypes;
            allow: number;
            deny: number;
        }
        enum OverwriteTypes {
            ROLE = 0,
            MEMBER = 1
        }
        interface Message extends Infra.BaseObject {
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
            stickers?: Array<Stickers.Sticker>;
            allowed_mentions?: AllowedMentions;
        }
        enum MessageTypes {
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
            AUTO_MODERATION_ACTION = 24
        }
        interface MessageActivity {
            type: MessageActivityTypes;
            party_id?: string;
        }
        enum MessageActivityTypes {
            JOIN = 1,
            SPECTATE = 2,
            LISTEN = 3,
            JOIN_REQUEST = 5
        }
        enum MessageFlags {
            CROSS_POSTED = 1,
            IS_CROSSPOST = 2,
            SUPPRESS_EMBEDS = 4,
            SOURCE_MESSAGE_DELETED = 8,
            URGENT = 16,
            HAS_THREAD = 32,
            EPHEMERAL = 64,
            LOADING = 128,
            FAILED_TO_MENTION_SOME_ROLES_IN_THREAD = 256
        }
        interface MessageReference {
            message_id?: string;
            channel_id?: string;
            guild_id?: string;
            fail_if_not_exists?: boolean;
        }
        interface FollowedChannel {
            channel_id: string;
            webhook_id: string;
        }
        interface Reaction {
            count: number;
            me: boolean;
            emoji: Infra.Partial<Emojis.Emoji>;
        }
        interface ThreadMember {
            id?: string;
            user_id?: string;
            join_timestamp: string;
            flags: number;
        }
        interface Embed {
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
        enum EmbedTypes {
            RICH = "rich",
            IMAGE = "image",
            VIDEO = "video",
            GIFV = "gifv",
            ARTICLE = "article",
            LINK = "link"
        }
        interface EmbedImage {
            url: string;
            proxy_url?: string;
            height?: number;
            width?: number;
        }
        interface EmbedFooter {
            text: string;
            icon_url?: string;
            proxy_icon_url?: string;
        }
        interface EmbedProvider {
            name?: string;
            url?: string;
        }
        interface EmbedAuthor extends EmbedProvider {
            name: string;
            icon_url?: string;
            proxy_icon_url?: string;
        }
        interface EmbedFooter {
            text: string;
            icon_url?: string;
            proxy_icon_url?: string;
        }
        interface EmbedField {
            name: string;
            value: string;
            inline?: boolean;
        }
        interface Attachment extends Infra.BaseObject {
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
        interface ChannelMention extends Infra.BaseObject {
            guild_id: string;
            type: ChannelTypes;
            name: string;
        }
        interface AllowedMentions {
            parse: Array<AllowedMentionTypes>;
            roles?: Array<string>;
            users?: Array<string>;
            replied_user?: boolean;
        }
        enum AllowedMentionTypes {
            ROLE = "roles",
            USER = "users",
            EVERYONE = "everyone"
        }
        module Body {
            interface PostMessage {
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
            interface CreateChannelInvite {
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
    module Emojis {
        const Endpoints: {
            ListGuildEmojis: string;
            GetGuildEmoji: string;
            CreateGuildEmoji: string;
            ModifyGuildEmoji: string;
            DeleteGuildEmoji: string;
        };
        interface Emoji extends Infra.BaseObject {
            name?: string;
            roles?: Array<string>;
            user?: Users.User;
            require_colons?: boolean;
            managed?: boolean;
            animated?: boolean;
            available?: boolean;
        }
    }
    module Interactions {
        interface Interaction extends Infra.BaseObject {
        }
        interface Component extends Infra.BaseObject {
        }
    }
    module Invites {
        interface Invite extends Infra.BaseObject {
        }
        enum TargetType {
            STREAM = 1,
            EMBEDDED_APPLICATION = 2
        }
    }
    module Stickers {
        interface Sticker extends Infra.BaseObject {
        }
        interface StickerItem extends Infra.BaseObject {
        }
    }
    module Users {
        interface User extends Infra.BaseObject {
        }
        interface Team extends Infra.BaseObject {
        }
        interface Member extends Infra.BaseObject {
            user: User;
        }
    }
    module OAuth2 {
        const Endpoints: {
            Authorize: string;
            Token: string;
            RevokeToken: string;
            CurrentBotApplication: string;
            CurrentAuthorization: string;
        };
        enum Scope {
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
            INCOMING_WEBHOOK = "webhook.incoming"
        }
    }
    class API extends Pariah {
        constructor(options?: Partial<Options>);
        listAutoModerationRules(guildId: string): Promise<import("..").Data<AutoModeration.Rule<AutoModeration.TriggerTypes>[]>>;
        getAutoModerationRule(guildId: string, ruleId: string): Promise<import("..").Data<AutoModeration.Rule<AutoModeration.TriggerTypes>>>;
        createAutoModerationRule<T extends AutoModeration.TriggerTypes>(guildId: string, body: AutoModeration.Body.CreateAutoModerationRule<T>): Promise<import("..").Data<AutoModeration.Rule<AutoModeration.TriggerTypes>>>;
        modifyAutoModerationRule<T extends AutoModeration.TriggerTypes>(guildId: string, ruleId: string, body: AutoModeration.Body.ModifyAutoModerationRule<T>): Promise<import("..").Data<AutoModeration.Rule<AutoModeration.TriggerTypes>>>;
        deleteAutoModerationRule(guildId: string, ruleId: string): Promise<import("..").Data<unknown>>;
        getChannelMessages(channelId: string, filter?: Infra.Search): Promise<import("..").Data<Channels.Message[]>>;
        getChannelMessage(channelId: string, messageId: string): Promise<import("..").Data<Channels.Message>>;
        createChannelMessage(channelId: string, body: Channels.Body.PostMessage): Promise<import("..").Data<Channels.Message>>;
        crosspostChannelMessage(channelId: string): Promise<import("..").Data<Channels.Message>>;
        createMessageReaction(channelId: string, messageId: string, emoji: string): Promise<import("..").Data<Channels.Message>>;
        deleteOwnMessageReaction(channelId: string, messageId: string, emoji: string): Promise<import("..").Data<unknown>>;
        deleteUserMessageReaction(channelId: string, messageId: string, emoji: string, userId: string): Promise<import("..").Data<unknown>>;
        getMessageReactions(channelId: string, messageId: string, emoji: string, filter?: Infra.Search): Promise<import("..").Data<Channels.Reaction[]>>;
        deleteAllMessageReactions(channelId: string, messageId: string): Promise<import("..").Data<unknown>>;
        deleteAllMessageReactionsForEmoji(channelId: string, messageId: string, emoji: string): Promise<import("..").Data<unknown>>;
        editChannelMessage(channelId: string, messageId: string, body: Channels.Body.PostMessage): Promise<import("..").Data<Channels.Message>>;
        deleteChannelMessage(channelId: string, messageId: string): Promise<import("..").Data<unknown>>;
        bulkDeleteChannelMessages(...messages: Array<string> | [Array<string>]): Promise<import("..").Data<Channels.Message[]>>;
        editChannelPermissions(channelId: string, overwriteId: string, body: Channels.Overwrite): Promise<import("..").Data<Channels.Overwrite>>;
        getChannelInvites(channelId: string): Promise<import("..").Data<Invites.Invite[]>>;
        createChannelInvite(channelId: string, body: Channels.Body.CreateChannelInvite): Promise<import("..").Data<Invites.Invite>>;
        deleteChannelPermission(channelId: string, overwriteId: string): Promise<import("..").Data<unknown>>;
        followNewsChannel(channelId: string, webhookChannelId: string): Promise<import("..").Data<unknown>>;
        triggerTypingIndicator(channelId: string): Promise<import("..").Data<unknown>>;
        getPinnedMessages(channelId: string): Promise<import("..").Data<Channels.Message[]>>;
        pinMessage(channelId: string, messageId: string): Promise<import("..").Data<unknown>>;
        unpinMessage(channelId: string, messageId: string): Promise<import("..").Data<unknown>>;
        groupDmAddRecipient(channelId: string, userId: string, accessToken: string, nick?: string): Promise<import("..").Data<unknown>>;
        groupDmRemoveRecipient(channelId: string, userId: string): Promise<import("..").Data<unknown>>;
    }
}
