"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spotify = exports.Keys = exports.CopyrightType = exports.IncludeGroups = exports.RestrictionReason = exports.ReleaseDatePrecision = exports.AlbumTypes = exports.Url = void 0;
const requester_1 = require("../lib/requester");
exports.Url = new URL('https://api.spotify.com/v1/');
var AlbumTypes;
(function (AlbumTypes) {
    AlbumTypes["ALBUM"] = "album";
    AlbumTypes["SINGLE"] = "single";
    AlbumTypes["COMPILATION"] = "compilation";
})(AlbumTypes = exports.AlbumTypes || (exports.AlbumTypes = {}));
var ReleaseDatePrecision;
(function (ReleaseDatePrecision) {
    ReleaseDatePrecision["DAY"] = "day";
    ReleaseDatePrecision["MONTH"] = "month";
    ReleaseDatePrecision["YEAR"] = "year";
})(ReleaseDatePrecision = exports.ReleaseDatePrecision || (exports.ReleaseDatePrecision = {}));
var RestrictionReason;
(function (RestrictionReason) {
    RestrictionReason["MARKET"] = "market";
    RestrictionReason["PRODUCT"] = "product";
    RestrictionReason["EXPLICIT"] = "explicit";
})(RestrictionReason = exports.RestrictionReason || (exports.RestrictionReason = {}));
var IncludeGroups;
(function (IncludeGroups) {
    IncludeGroups["ALBUM"] = "album";
    IncludeGroups["SINGLE"] = "single";
    IncludeGroups["APPEARS_ON"] = "appears_on";
    IncludeGroups["COMPILATION"] = "compilation";
})(IncludeGroups = exports.IncludeGroups || (exports.IncludeGroups = {}));
var CopyrightType;
(function (CopyrightType) {
    CopyrightType["COPYRIGHT"] = "C";
    CopyrightType["PERFORMANCE"] = "P";
})(CopyrightType = exports.CopyrightType || (exports.CopyrightType = {}));
var Keys;
(function (Keys) {
    Keys["ALBUM"] = "album";
    Keys["ARTIST"] = "artist";
    Keys["PLAYLIST"] = "playlist";
    Keys["TRACK"] = "track";
    Keys["SHOW"] = "show";
    Keys["EPISODE"] = "episode";
})(Keys = exports.Keys || (exports.Keys = {}));
class Spotify extends requester_1.Requester {
    id;
    secret;
    token;
    tokenExpiry;
    constructor(id, secret) {
        super(exports.Url);
        this.id = id;
        this.secret = secret;
    }
    async loadCredentials() {
        if (!this.tokenExpiry || this.tokenExpiry > Date.now()) {
            this.url.hostname = 'accounts.spotify.com';
            this.url.pathname = '/';
            const token = await this.json('POST /api/token', { grant_type: 'client_credentials' }, {
                headers: {
                    Authorization: `Basic ${Buffer.from(`${this.id}:${this.secret}`).toString('base64')}`,
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            this.url.hostname = 'api.spotify.com';
            this.url.pathname = '/v1';
            return this.setToken(token.unwrap());
        }
        return this;
    }
    setToken(token) {
        this.token = token.access_token;
        this.tokenExpiry = Date.now() + token.expires_in * 1000;
        super.options.headers = { Authorization: `Bearer ${this.token}` };
        return this;
    }
}
exports.Spotify = Spotify;
(function (Spotify) {
    let Methods;
    (function (Methods) {
        Methods["GetAlbum"] = "GET /albums/:id";
        Methods["GetSeveralAlbums"] = "GET /albums";
        Methods["GetAlbumTracks"] = "/albums/:id/tracks";
        Methods["GetArtist"] = "/artists/:id";
        Methods["GetSeveralArtists"] = "/artists";
        Methods["GetArtistsAlbums"] = "/artists/:id/albums";
        Methods["GetArtistsTopTracks"] = "/artists/:id/top-tracks";
        Methods["GetArtistsRelatedArtists"] = "/artists/:id/related-artists";
        Methods["GetShow"] = "/shows/:id";
        Methods["GetSeveralShows"] = "/shows";
        Methods["GetShowEpisodes"] = "/shows/:id/episodes";
        Methods["GetEpisode"] = "/episodes/:id";
        Methods["GetSeveralEpisodes"] = "/episodes";
        Methods["GetTrack"] = "/tracks/:id";
        Methods["GetSeveralTracks"] = "/tracks";
        Methods["GetTrackAudioFeatures"] = "/audio-features/:id";
        Methods["GetSeveralTrackAudioFeatures"] = "/audio-features";
        Methods["GetTrackAudioAnalysis"] = "/audio-analysis/:id";
        Methods["GetRecommendations"] = "/recommendations";
    })(Methods = Spotify.Methods || (Spotify.Methods = {}));
})(Spotify = exports.Spotify || (exports.Spotify = {}));
