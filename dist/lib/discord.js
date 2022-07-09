"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discord = void 0;
const pariah_1 = require("../pariah");
var Discord;
(function (Discord) {
    Discord.Url = (v) => new URL(`https://discord.com/api/v${v}`);
    let Infra;
    (function (Infra) {
        Infra.Permissions = {
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
    })(Infra = Discord.Infra || (Discord.Infra = {}));
    let Applications;
    (function (Applications) {
        let Flags;
        (function (Flags) {
            Flags[Flags["GATEWAY_PRESENCE"] = 4096] = "GATEWAY_PRESENCE";
            Flags[Flags["GATEWAY_PRESENCE_LIMITED"] = 8192] = "GATEWAY_PRESENCE_LIMITED";
            Flags[Flags["GATEWAY_GUILD_MEMBERS"] = 16384] = "GATEWAY_GUILD_MEMBERS";
            Flags[Flags["GATEWAY_GUILD_MEMBERS_LIMITED"] = 32768] = "GATEWAY_GUILD_MEMBERS_LIMITED";
            Flags[Flags["VERIFICATION_PENDING_GUILD_LIMIT"] = 65536] = "VERIFICATION_PENDING_GUILD_LIMIT";
            Flags[Flags["EMBEDDED"] = 131072] = "EMBEDDED";
            Flags[Flags["GATEWAY_MESSAGE_CONTENT"] = 262144] = "GATEWAY_MESSAGE_CONTENT";
            Flags[Flags["GATEWAY_MESSAGE_CONTENT_LIMITED"] = 524288] = "GATEWAY_MESSAGE_CONTENT_LIMITED";
        })(Flags = Applications.Flags || (Applications.Flags = {}));
    })(Applications = Discord.Applications || (Discord.Applications = {}));
    let AutoModeration;
    (function (AutoModeration) {
        AutoModeration.Endpoints = {
            ListAutoModerationRules: "/guilds/:guildId/auto-moderation/rules",
            GetAutoModerationRule: "/guilds/:guildId/auto-moderation/rules/:ruleId",
            CreateAutoModerationRule: "/guilds/{guild.id}/auto-moderation/rules",
            ModifyAutoModerationRule: "/guilds/{guild.id}/auto-moderation/rules/{auto_moderation_rule.id}",
            DeleteAutoModerationRule: "/guilds/{guild.id}/auto-moderation/rules/{auto_moderation_rule.id}",
        };
        let TriggerTypes;
        (function (TriggerTypes) {
            TriggerTypes[TriggerTypes["KEYWORD"] = 1] = "KEYWORD";
            TriggerTypes[TriggerTypes["HARMFUL_LINK"] = 2] = "HARMFUL_LINK";
            TriggerTypes[TriggerTypes["SPAM"] = 3] = "SPAM";
            TriggerTypes[TriggerTypes["KEYWORD_PRESET"] = 4] = "KEYWORD_PRESET";
        })(TriggerTypes = AutoModeration.TriggerTypes || (AutoModeration.TriggerTypes = {}));
        let KeywordPresetTypes;
        (function (KeywordPresetTypes) {
            KeywordPresetTypes[KeywordPresetTypes["PROFANITY"] = 1] = "PROFANITY";
            KeywordPresetTypes[KeywordPresetTypes["SEXUAL_CONTENT"] = 2] = "SEXUAL_CONTENT";
            KeywordPresetTypes[KeywordPresetTypes["SLURS"] = 3] = "SLURS";
        })(KeywordPresetTypes = AutoModeration.KeywordPresetTypes || (AutoModeration.KeywordPresetTypes = {}));
        let EventTypes;
        (function (EventTypes) {
            EventTypes[EventTypes["MESSAGE_SEND"] = 1] = "MESSAGE_SEND";
        })(EventTypes = AutoModeration.EventTypes || (AutoModeration.EventTypes = {}));
        let ActionTypes;
        (function (ActionTypes) {
            ActionTypes[ActionTypes["BLOCK_MESSAGE"] = 1] = "BLOCK_MESSAGE";
            ActionTypes[ActionTypes["SEND_ALERT_MESSAGE"] = 2] = "SEND_ALERT_MESSAGE";
            ActionTypes[ActionTypes["TIMEOUT"] = 3] = "TIMEOUT";
        })(ActionTypes = AutoModeration.ActionTypes || (AutoModeration.ActionTypes = {}));
    })(AutoModeration = Discord.AutoModeration || (Discord.AutoModeration = {}));
    let Channels;
    (function (Channels) {
        Channels.Endpoints = {
            GetChannel: "/channels/:channelId",
            ModifyChannel: "/channels/:channelId",
            DeleteChannel: "/channels/:channelId",
            GetChannelMessages: "/channels/:channelId/messages",
            GetChannelMessage: "/channels/:channelId/messages/:messageId",
            CreateMessage: "/channels/:channelId/messages",
            CrosspostMessage: "/channels/:channelId/messages/:messageId/crosspost",
            CreateReaction: "/channels/:channelId/messages/:messageId/reactions/:emoji/@me",
            DeleteOwnReaction: "/channels/:channelId/messages/:messageId/reactions/:emoji/@me",
            DeleteUserReaction: "/channels/:channelId/messages/:messageId/reactions/:emoji/:userId",
            GetReactions: "/channels/:channelId/messages/:messageId/reactions/:emoji",
            DeleteAllReactions: "/channels/:channelId/messages/:messageId/reactions",
            DeleteAllReactionsForEmoji: "/channels/:channelId/messages/:messageId/reactions/:emoji",
            EditMessage: "/channels/:channelId/messages/:messageId",
            DeleteMessage: "/channels/:channelId/messages/:messageId",
            BulkDeleteMessages: "/channels/:channelId/messages/bulk-delete",
            EditChannelPermissions: "/channels/:channelId/permissions/:overwriteId",
            GetChannelInvites: "/channels/:channelId/invites",
            CreateChannelInvite: "/channels/:channelId/invites",
            DeleteChannelPermission: "/channels/:channelId/permissions/:overwriteId",
            FollowNewsChannel: "/channels/:channelId/followers",
            TriggerTypingIndicator: "/channels/:channelId/typing",
            GetPinnedMessages: "/channels/:channelId/pins",
            PinMessage: "/channels/:channelId/pins/:messageId",
            UnpinMessage: "/channels/:channelId/pins/:messageId",
            GroupDMAddRecipient: "/channels/:channelId/recipients/:userId",
            GroupDMRemoveRecipient: "/channels/:channelId/recipients/:userId",
            StartThreadFromMessage: "/channels/:channelId/messages/:messageId/threads",
            StartThreadWithoutMessage: "/channels/:channelId/threads",
            StartThreadInForumChannel: "/channels/:channelId/threads",
            JoinThread: "/channels/:channelId/thread-members/@me",
            AddThreadMember: "/channels/:channelId/thread-members/:userId",
            LeaveThread: "/channels/:channelId/thread-members/@me",
            RemoveThreadMember: "/channels/:channelId/thread-members/:userId",
            GetThreadMember: "/channels/:channelId/thread-members/:userId",
            ListThreadMembers: "/channels/:channelId/thread-members",
            ListPublicArchivedThreads: "/channels/:channelId/threads/archived/public",
            ListPrivateArchivedThreads: "/channels/:channelId/threads/archived/private",
            ListJoinedPrivateArchivedThreads: "/channels/:channelId/users/@me/threads/archived/private",
        };
        let ChannelTypes;
        (function (ChannelTypes) {
            ChannelTypes[ChannelTypes["GUILD_TEXT"] = 0] = "GUILD_TEXT";
            ChannelTypes[ChannelTypes["DM"] = 1] = "DM";
            ChannelTypes[ChannelTypes["GUILD_VOICE"] = 2] = "GUILD_VOICE";
            ChannelTypes[ChannelTypes["GROUP_DM"] = 3] = "GROUP_DM";
            ChannelTypes[ChannelTypes["GUILD_CATEGORY"] = 4] = "GUILD_CATEGORY";
            ChannelTypes[ChannelTypes["GUILD_NEWS"] = 5] = "GUILD_NEWS";
            ChannelTypes[ChannelTypes["GUILD_NEWS_THREAD"] = 10] = "GUILD_NEWS_THREAD";
            ChannelTypes[ChannelTypes["GUILD_PUBLIC_THREAD"] = 11] = "GUILD_PUBLIC_THREAD";
            ChannelTypes[ChannelTypes["GUILD_PRIVATE_THREAD"] = 12] = "GUILD_PRIVATE_THREAD";
            ChannelTypes[ChannelTypes["GUILD_STAGE_VOICE"] = 13] = "GUILD_STAGE_VOICE";
            ChannelTypes[ChannelTypes["GUILD_DIRECTORY"] = 14] = "GUILD_DIRECTORY";
            ChannelTypes[ChannelTypes["GUILD_FORUM"] = 15] = "GUILD_FORUM";
        })(ChannelTypes = Channels.ChannelTypes || (Channels.ChannelTypes = {}));
        let VideoQualityModes;
        (function (VideoQualityModes) {
            VideoQualityModes[VideoQualityModes["AUTO"] = 1] = "AUTO";
            VideoQualityModes[VideoQualityModes["FULL"] = 2] = "FULL";
        })(VideoQualityModes = Channels.VideoQualityModes || (Channels.VideoQualityModes = {}));
        let Flags;
        (function (Flags) {
            Flags[Flags["PINNED"] = 2] = "PINNED";
        })(Flags = Channels.Flags || (Channels.Flags = {}));
        let OverwriteTypes;
        (function (OverwriteTypes) {
            OverwriteTypes[OverwriteTypes["ROLE"] = 0] = "ROLE";
            OverwriteTypes[OverwriteTypes["MEMBER"] = 1] = "MEMBER";
        })(OverwriteTypes = Channels.OverwriteTypes || (Channels.OverwriteTypes = {}));
        let MessageTypes;
        (function (MessageTypes) {
            MessageTypes[MessageTypes["DEFAULT"] = 0] = "DEFAULT";
            MessageTypes[MessageTypes["RECIPIENT_ADD"] = 1] = "RECIPIENT_ADD";
            MessageTypes[MessageTypes["RECIPIENT_REMOVE"] = 2] = "RECIPIENT_REMOVE";
            MessageTypes[MessageTypes["CALL"] = 3] = "CALL";
            MessageTypes[MessageTypes["CHANNEL_NAME_CHANGE"] = 4] = "CHANNEL_NAME_CHANGE";
            MessageTypes[MessageTypes["CHANNEL_ICON_CHANGE"] = 5] = "CHANNEL_ICON_CHANGE";
            MessageTypes[MessageTypes["CHANNEL_PINNED_MESSAGE"] = 6] = "CHANNEL_PINNED_MESSAGE";
            MessageTypes[MessageTypes["USER_JOIN"] = 7] = "USER_JOIN";
            MessageTypes[MessageTypes["GUILD_BOOST"] = 8] = "GUILD_BOOST";
            MessageTypes[MessageTypes["GUILD_BOOST_TIER_1"] = 9] = "GUILD_BOOST_TIER_1";
            MessageTypes[MessageTypes["GUILD_BOOST_TIER_2"] = 10] = "GUILD_BOOST_TIER_2";
            MessageTypes[MessageTypes["GUILD_BOOST_TIER_3"] = 11] = "GUILD_BOOST_TIER_3";
            MessageTypes[MessageTypes["CHANNEL_FOLLOW_ADD"] = 12] = "CHANNEL_FOLLOW_ADD";
            MessageTypes[MessageTypes["GUILD_DISCOVERY_DISQUALIFIED"] = 14] = "GUILD_DISCOVERY_DISQUALIFIED";
            MessageTypes[MessageTypes["GUILD_DISCOVERY_REQUALIFIED"] = 15] = "GUILD_DISCOVERY_REQUALIFIED";
            MessageTypes[MessageTypes["GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING"] = 16] = "GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING";
            MessageTypes[MessageTypes["GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING"] = 17] = "GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING";
            MessageTypes[MessageTypes["THREAD_CREATED"] = 18] = "THREAD_CREATED";
            MessageTypes[MessageTypes["REPLY"] = 19] = "REPLY";
            MessageTypes[MessageTypes["CHAT_INPUT_COMMAND"] = 20] = "CHAT_INPUT_COMMAND";
            MessageTypes[MessageTypes["THREAD_STARTER_MESSAGE"] = 21] = "THREAD_STARTER_MESSAGE";
            MessageTypes[MessageTypes["GUILD_INVITE_REMINDER"] = 22] = "GUILD_INVITE_REMINDER";
            MessageTypes[MessageTypes["CONTEXT_MENU_COMMAND"] = 23] = "CONTEXT_MENU_COMMAND";
            MessageTypes[MessageTypes["AUTO_MODERATION_ACTION"] = 24] = "AUTO_MODERATION_ACTION";
        })(MessageTypes = Channels.MessageTypes || (Channels.MessageTypes = {}));
        let MessageActivityTypes;
        (function (MessageActivityTypes) {
            MessageActivityTypes[MessageActivityTypes["JOIN"] = 1] = "JOIN";
            MessageActivityTypes[MessageActivityTypes["SPECTATE"] = 2] = "SPECTATE";
            MessageActivityTypes[MessageActivityTypes["LISTEN"] = 3] = "LISTEN";
            MessageActivityTypes[MessageActivityTypes["JOIN_REQUEST"] = 5] = "JOIN_REQUEST";
        })(MessageActivityTypes = Channels.MessageActivityTypes || (Channels.MessageActivityTypes = {}));
        let MessageFlags;
        (function (MessageFlags) {
            MessageFlags[MessageFlags["CROSS_POSTED"] = 1] = "CROSS_POSTED";
            MessageFlags[MessageFlags["IS_CROSSPOST"] = 2] = "IS_CROSSPOST";
            MessageFlags[MessageFlags["SUPPRESS_EMBEDS"] = 4] = "SUPPRESS_EMBEDS";
            MessageFlags[MessageFlags["SOURCE_MESSAGE_DELETED"] = 8] = "SOURCE_MESSAGE_DELETED";
            MessageFlags[MessageFlags["URGENT"] = 16] = "URGENT";
            MessageFlags[MessageFlags["HAS_THREAD"] = 32] = "HAS_THREAD";
            MessageFlags[MessageFlags["EPHEMERAL"] = 64] = "EPHEMERAL";
            MessageFlags[MessageFlags["LOADING"] = 128] = "LOADING";
            MessageFlags[MessageFlags["FAILED_TO_MENTION_SOME_ROLES_IN_THREAD"] = 256] = "FAILED_TO_MENTION_SOME_ROLES_IN_THREAD";
        })(MessageFlags = Channels.MessageFlags || (Channels.MessageFlags = {}));
        let EmbedTypes;
        (function (EmbedTypes) {
            EmbedTypes["RICH"] = "rich";
            EmbedTypes["IMAGE"] = "image";
            EmbedTypes["VIDEO"] = "video";
            EmbedTypes["GIFV"] = "gifv";
            EmbedTypes["ARTICLE"] = "article";
            EmbedTypes["LINK"] = "link";
        })(EmbedTypes = Channels.EmbedTypes || (Channels.EmbedTypes = {}));
        let AllowedMentionTypes;
        (function (AllowedMentionTypes) {
            AllowedMentionTypes["ROLE"] = "roles";
            AllowedMentionTypes["USER"] = "users";
            AllowedMentionTypes["EVERYONE"] = "everyone";
        })(AllowedMentionTypes = Channels.AllowedMentionTypes || (Channels.AllowedMentionTypes = {}));
    })(Channels = Discord.Channels || (Discord.Channels = {}));
    let Emojis;
    (function (Emojis) {
        Emojis.Endpoints = {
            ListGuildEmojis: "/guilds/:guildId/emojis",
            GetGuildEmoji: "/guilds/:guildId/emojis/:emojiId",
            CreateGuildEmoji: "/guilds/:guildId/emojis",
            ModifyGuildEmoji: "/guilds/:guildId/emojis/:emojiId",
            DeleteGuildEmoji: "/guilds/:guildId/emojis/:emojiId",
        };
    })(Emojis = Discord.Emojis || (Discord.Emojis = {}));
    let Invites;
    (function (Invites) {
        let TargetType;
        (function (TargetType) {
            TargetType[TargetType["STREAM"] = 1] = "STREAM";
            TargetType[TargetType["EMBEDDED_APPLICATION"] = 2] = "EMBEDDED_APPLICATION";
        })(TargetType = Invites.TargetType || (Invites.TargetType = {}));
    })(Invites = Discord.Invites || (Discord.Invites = {}));
    let OAuth2;
    (function (OAuth2) {
        OAuth2.Endpoints = {
            Authorize: "/oauth2/authorize",
            Token: "/oauth2/token",
            RevokeToken: "/oauth2/revoke",
            CurrentBotApplication: "/oauth2/applications/@me",
            CurrentAuthorization: "/oauth2/@me",
        };
        let Scope;
        (function (Scope) {
            Scope["READ_ACTIVITIES"] = "activities.read";
            Scope["WRITE_ACTIVITIES"] = "activities.write";
            Scope["READ_APPLICATION_BUILDS"] = "applications.builds.read";
            Scope["UPLOAD_APPLICATION_BUILDS"] = "applications.builds.upload";
            Scope["APPLICATION_COMMANDS"] = "applications.commands.read";
            Scope["UPDATE_APPLICATION_COMMANDS"] = "applications.commands.update";
            Scope["UPDATE_APPLICATION_COMMANDS_PERMISSIONS"] = "applications.commands.permissions.update";
            Scope["APPLICATION_ENTITLEMENTS"] = "applications.entitlements";
            Scope["UPDATE_APPLICATION_STORE"] = "applications.store.update";
            Scope["BOT"] = "bot";
            Scope["CONNECTIONS"] = "connections.read";
            Scope["READ_DM_CHANNELS"] = "dm.channels.read";
            Scope["EMAIL"] = "email";
            Scope["JOIN_GROUP_DM"] = "gdm.join";
            Scope["GUILDS"] = "guilds.join";
            Scope["READ_GUILD_MEMBERS"] = "guilds.members.read";
            Scope["IDENTIFY"] = "identify";
            Scope["READ_MESSAGES"] = "messages.read";
            Scope["READ_RELATIONSHIPS"] = "relationships.read";
            Scope["RICH_PRESENCE"] = "rpc";
            Scope["WRITE_RPC_ACTIVITIES"] = "rpc.activities.write";
            Scope["READ_RPC_NOTIFICATIONS"] = "rpc.notifications.read";
            Scope["READ_RPC_VOICE"] = "rpc.voice.read";
            Scope["WRITE_RPC_VOICE"] = "rpc.voice.write";
            Scope["VOICE"] = "voice";
            Scope["INCOMING_WEBHOOK"] = "webhook.incoming";
        })(Scope = OAuth2.Scope || (OAuth2.Scope = {}));
    })(OAuth2 = Discord.OAuth2 || (Discord.OAuth2 = {}));
    class API extends pariah_1.Pariah {
        constructor(options) {
            super(Discord.Url(options?.version || 10), {
                headers: {
                    Authorization: options?.token || "",
                    "User-Agent": "Rosa (https://npmjs.org/pariah, 10)",
                },
            });
        }
        async listAutoModerationRules(guildId) {
            return await this.get.json(AutoModeration.Endpoints.CreateAutoModerationRule, {
                ":guildId": guildId,
            });
        }
        async getAutoModerationRule(guildId, ruleId) {
            return this.get.json(AutoModeration.Endpoints.GetAutoModerationRule, {
                ":guildId": guildId,
                ":ruleId": ruleId,
            });
        }
        createAutoModerationRule(guildId, body) {
            return this.post.json(AutoModeration.Endpoints.CreateAutoModerationRule, {
                ":guildId": guildId,
            }, { body });
        }
        modifyAutoModerationRule(guildId, ruleId, body) {
            return this.patch.json(AutoModeration.Endpoints.ModifyAutoModerationRule, {
                ":guildId": guildId,
                ":ruleId": ruleId,
            }, { body });
        }
        deleteAutoModerationRule(guildId, ruleId) {
            return this.delete(AutoModeration.Endpoints.DeleteAutoModerationRule, {
                ":guildId": guildId,
                ":ruleId": ruleId,
            });
        }
        async getChannelMessages(channelId, filter) {
            return await this.get.json(Channels.Endpoints.GetChannelMessages, {
                ":channelId": channelId,
                ...filter,
            });
        }
        async getChannelMessage(channelId, messageId) {
            return await this.get.json(Channels.Endpoints.GetChannelMessage, {
                ":channelId": channelId,
                ":messageId": messageId,
            });
        }
        async createChannelMessage(channelId, body) {
            return await this.post.json(Channels.Endpoints.CreateMessage, {
                ":channelId": channelId,
            }, { body });
        }
        async crosspostChannelMessage(channelId) {
            return await this.post.json(Channels.Endpoints.CrosspostMessage, {
                ":channelId": channelId,
            });
        }
        async createMessageReaction(channelId, messageId, emoji) {
            return await this.put.json(Channels.Endpoints.CreateReaction, {
                ":channelId": channelId,
                ":messageId": messageId,
                ":emoji": emoji,
            });
        }
        async deleteOwnMessageReaction(channelId, messageId, emoji) {
            return await this.delete(Channels.Endpoints.DeleteOwnReaction, {
                ":channelId": channelId,
                ":messageId": messageId,
                ":emoji": emoji,
            });
        }
        async deleteUserMessageReaction(channelId, messageId, emoji, userId) {
            return await this.delete(Channels.Endpoints.DeleteUserReaction, {
                ":channelId": channelId,
                ":messageId": messageId,
                ":emoji": emoji,
                ":userId": userId,
            });
        }
        async getMessageReactions(channelId, messageId, emoji, filter) {
            return await this.get.json(Channels.Endpoints.GetReactions, {
                ":channelId": channelId,
                ":messageId": messageId,
                ":emoji": emoji,
                ...filter,
            });
        }
        async deleteAllMessageReactions(channelId, messageId) {
            return await this.delete(Channels.Endpoints.DeleteAllReactions, {
                ":channelId": channelId,
                ":messageId": messageId,
            });
        }
        async deleteAllMessageReactionsForEmoji(channelId, messageId, emoji) {
            return await this.delete(Channels.Endpoints.DeleteAllReactionsForEmoji, {
                ":channelId": channelId,
                ":messageId": messageId,
                ":emoji": emoji,
            });
        }
        editChannelMessage(channelId, messageId, body) {
            return this.patch.json(Channels.Endpoints.EditMessage, {
                ":channelId": channelId,
                ":messageId": messageId,
            }, { body });
        }
        async deleteChannelMessage(channelId, messageId) {
            return await this.delete(Channels.Endpoints.DeleteMessage, {
                ":channelId": channelId,
                ":messageId": messageId,
            });
        }
        async bulkDeleteChannelMessages(...messages) {
            return await this.post.json(Channels.Endpoints.BulkDeleteMessages, {}, { body: { messages: messages.flat() } });
        }
        async editChannelPermissions(channelId, overwriteId, body) {
            return await this.patch.json(Channels.Endpoints.EditChannelPermissions, {
                ":channelId": channelId,
                ":overwriteId": overwriteId,
            }, { body });
        }
        async getChannelInvites(channelId) {
            return await this.get.json(Channels.Endpoints.GetChannelInvites, {
                ":channelId": channelId,
            });
        }
        async createChannelInvite(channelId, body) {
            return await this.post.json(Channels.Endpoints.CreateChannelInvite, {
                ":channelId": channelId,
            }, { body });
        }
        async deleteChannelPermission(channelId, overwriteId) {
            return await this.delete(Channels.Endpoints.DeleteChannelPermission, {
                ":channelId": channelId,
                ":overwriteId": overwriteId,
            });
        }
        async followNewsChannel(channelId, webhookChannelId) {
            return await this.put(Channels.Endpoints.FollowNewsChannel, {
                ":channelId": channelId,
            }, { body: { webhook_channel_id: webhookChannelId } });
        }
        async triggerTypingIndicator(channelId) {
            return await this.post(Channels.Endpoints.TriggerTypingIndicator, {
                ":channelId": channelId,
            });
        }
        async getPinnedMessages(channelId) {
            return await this.get.json(Channels.Endpoints.GetPinnedMessages, {
                ":channelId": channelId,
            });
        }
        async pinMessage(channelId, messageId) {
            return await this.put(Channels.Endpoints.PinMessage, {
                ":channelId": channelId,
                ":messageId": messageId,
            });
        }
        async unpinMessage(channelId, messageId) {
            return await this.delete(Channels.Endpoints.UnpinMessage, {
                ":channelId": channelId,
                ":messageId": messageId,
            });
        }
        async groupDmAddRecipient(channelId, userId, accessToken, nick) {
            return await this.put(Channels.Endpoints.GroupDMAddRecipient, {
                ":channelId": channelId,
                ":userId": userId,
            }, {
                body: {
                    access_token: accessToken,
                    nick,
                },
            });
        }
        async groupDmRemoveRecipient(channelId, userId) {
            return await this.delete(Channels.Endpoints.GroupDMRemoveRecipient, {
                ":channelId": channelId,
                ":userId": userId,
            });
        }
    }
    Discord.API = API;
})(Discord = exports.Discord || (exports.Discord = {}));
