"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spotify = void 0;
const pariah_1 = require("../pariah");
var Spotify;
(function (Spotify) {
    Spotify.Url = new URL("https://api.spotify.com/v1/");
    let AlbumTypes;
    (function (AlbumTypes) {
        AlbumTypes["ALBUM"] = "album";
        AlbumTypes["SINGLE"] = "single";
        AlbumTypes["COMPILATION"] = "compilation";
    })(AlbumTypes = Spotify.AlbumTypes || (Spotify.AlbumTypes = {}));
    let ReleaseDatePrecision;
    (function (ReleaseDatePrecision) {
        ReleaseDatePrecision["DAY"] = "day";
        ReleaseDatePrecision["MONTH"] = "month";
        ReleaseDatePrecision["YEAR"] = "year";
    })(ReleaseDatePrecision = Spotify.ReleaseDatePrecision || (Spotify.ReleaseDatePrecision = {}));
    let RestrictionReason;
    (function (RestrictionReason) {
        RestrictionReason["MARKET"] = "market";
        RestrictionReason["PRODUCT"] = "product";
        RestrictionReason["EXPLICIT"] = "explicit";
    })(RestrictionReason = Spotify.RestrictionReason || (Spotify.RestrictionReason = {}));
    let IncludeGroups;
    (function (IncludeGroups) {
        IncludeGroups["ALBUM"] = "album";
        IncludeGroups["SINGLE"] = "single";
        IncludeGroups["APPEARS_ON"] = "appears_on";
        IncludeGroups["COMPILATION"] = "compilation";
    })(IncludeGroups = Spotify.IncludeGroups || (Spotify.IncludeGroups = {}));
    let CopyrightType;
    (function (CopyrightType) {
        CopyrightType["COPYRIGHT"] = "C";
        CopyrightType["PERFORMANCE"] = "P";
    })(CopyrightType = Spotify.CopyrightType || (Spotify.CopyrightType = {}));
    let Keys;
    (function (Keys) {
        Keys["ALBUM"] = "album";
        Keys["ARTIST"] = "artist";
        Keys["PLAYLIST"] = "playlist";
        Keys["TRACK"] = "track";
        Keys["SHOW"] = "show";
        Keys["EPISODE"] = "episode";
    })(Keys = Spotify.Keys || (Spotify.Keys = {}));
    class API extends pariah_1.Pariah {
        id;
        secret;
        token;
        tokenExpiry;
        constructor(id, secret) {
            super(Spotify.Url);
            this.id = id;
            this.secret = secret;
        }
        async loadCredentials() {
            if (!this.tokenExpiry || this.tokenExpiry > Date.now()) {
                this.url.hostname = "accounts.spotify.com";
                this.url.pathname = "/";
                const token = await this.post.json("/api/token", { grant_type: "client_credentials" }, {
                    headers: {
                        Authorization: `Basic ${Buffer.from(`${this.id}:${this.secret}`).toString("base64")}`,
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                });
                this.url.hostname = "api.spotify.com";
                this.url.pathname = "/v1";
                return this.setToken(token.payload);
            }
            return this;
        }
        setToken(token) {
            this.token = token.access_token;
            this.tokenExpiry = Date.now() + token.expires_in * 1000;
            this._init.headers = { Authorization: `Bearer ${this.token}` };
            return this;
        }
        getAlbum(id, market) {
            return this.get.json("/albums/:id", {
                ":id": id,
                market,
            });
        }
        getSeveralAlbums(ids, market) {
            return this.get.json("/albums", {
                ids: ids.join(","),
                market,
            });
        }
        getAlbumTracks(id, limit = 20, offset = 0, market) {
            return this.get.json("/albums/:id/tracks", {
                ":id": id,
                limit,
                offset,
                market,
            });
        }
        getArtist(id) {
            return this.get.json("/artists/:id", { ":id": id });
        }
        getSeveralArtists(ids) {
            return this.get.json("/artists", {
                ids: ids.join(","),
            });
        }
        getArtistsAlbums(id, includeGroups, limit = 20, offset = 0, market) {
            return this.get.json("/artists/:id/albums", {
                ":id": id,
                include_groups: includeGroups?.join(","),
                limit,
                offset,
                market,
            });
        }
        getArtistsTopTracks(id, market) {
            return this.get.json("/artists/:id/top-tracks", {
                ":id": id,
                market,
            });
        }
        getArtistsRelatedArtists(id) {
            return this.get.json("/artists/:id/related-artists", {
                ":id": id,
            });
        }
        getShow(id, market) {
            return this.get.json("/shows/:id", {
                ":id": id,
                market,
            });
        }
        getSeveralShows(ids, market) {
            return this.get.json("/shows", {
                ids: ids.join(","),
                market,
            });
        }
        getShowEpisodes(id, limit = 20, offset = 0, market) {
            return this.get.json("/shows/:id/episodes", {
                ":id": id,
                limit,
                offset,
                market,
            });
        }
        getEpisode(id, market) {
            return this.get.json("/episodes/:id", {
                ":id": id,
                market,
            });
        }
        getSeveralEpisodes(ids, market) {
            return this.get.json("/episodes", {
                ids: ids.join(","),
                market,
            });
        }
        getTrack(id, market) {
            return this.get.json("/tracks/:id", {
                ":id": id,
                market,
            });
        }
        getSeveralTracks(ids, market) {
            return this.get.json("/tracks", {
                ids: ids.join(","),
                market,
            });
        }
        getTrackAudioFeatures(id) {
            return this.get.json("/audio-features/:id", {
                ":id": id,
            });
        }
        getSeveralTrackAudioFeatures(ids) {
            return this.get.json("/audio-features", {
                ids: ids.join(","),
            });
        }
        getTrackAudioAnalysis(id) {
            return this.get.json("/audio-analysis/:id", {
                ":id": id,
            });
        }
        getRecomendations(options) {
            return this.get.json("/recommendations", options);
        }
        searchForItem(query, type = Object.values(Keys), limit = 20, include_external, market) {
            return this.get.json("/search", {
                q: query,
                type: type.join(","),
                limit,
                include_external,
                market,
            });
        }
        getPlaylist(id, additionalTypes, market) {
            return this.get.json("/playlists/:id", {
                ":id": id,
                additional_types: additionalTypes.join(","),
                market,
            });
        }
        getPlaylistItems(id, additionalTypes, limit = 20, offset = 0, market) {
            return this.get.json("/playlists/:id/tracks", {
                ":id": id,
                additional_types: additionalTypes.join(","),
                limit,
                offset,
                market,
            });
        }
        getUserPlaylists(id, limit = 20, offset = 0) {
            return this.get.json("/users/:id/playlists", {
                ":id": id,
                limit,
                offset,
            });
        }
        getFeaturedPlaylists(country, limit = 20, offset = 0, locale, timestamp) {
            return this.get.json("/browse/featured-playlists", {
                country,
                limit,
                offset,
                locale,
                timestamp,
            });
        }
        getCategorysPlaylists(id) {
            return this.get.json("/browse/categories/:id", {
                ":id": id,
            });
        }
        getPlaylistCoverImage(id) {
            return this.get.json("/playlists/:id/images", {
                ":id": id,
            });
        }
        getSeveralBrowseCategories(country, limit = 20, offset = 0, locale) {
            return this.get.json("/browse/categories", {
                country,
                limit,
                offset,
                locale,
            });
        }
        getSingleBrowseCategory(id) {
            return this.get.json("/browse/categories/:id", {
                ":id": id,
            });
        }
        getAvailableGenreSeeds() {
            return this.get.json("/recommendations/available-genre-seeds");
        }
        getAvailableMarkets() {
            return this.get.json("/markets");
        }
    }
    Spotify.API = API;
})(Spotify = exports.Spotify || (exports.Spotify = {}));
