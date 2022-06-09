import { Pariah } from "../pariah";

export module Spotify {
    export const Url = new URL("https://api.spotify.com/v1/");

    export interface Err {
        error: {
            status: number;
            message: string;
        };
    }

    export interface Payload<T extends string> {
        id: string;
        href: string;
        type: T;
        uri: string;
    }

    export interface Album extends Payload<Keys.ALBUM> {
        album_type: AlbumTypes;
        total_tracks: number;
        available_markets: Array<string>;
        external_urls: ExternalUrls;
        images: Array<Image>;
        name: string;
        release_date: string;
        release_date_precision: ReleaseDatePrecision;
        restrictions?: Restrictions;
        artists: Array<Artist>;
        tracks: Array<Paginator<Track>>;
    }

    export enum AlbumTypes {
        ALBUM = "album",
        SINGLE = "single",
        COMPILATION = "compilation",
    }

    export interface ExternalUrls {
        spotify: string;
    }

    export interface Image {
        url: string;
        height: number;
        width: number;
    }

    export enum ReleaseDatePrecision {
        DAY = "day",
        MONTH = "month",
        YEAR = "year",
    }

    export interface Restrictions {
        reason: RestrictionReason;
    }

    export enum RestrictionReason {
        MARKET = "market",
        PRODUCT = "product",
        EXPLICIT = "explicit",
    }

    export interface Artist extends Payload<Keys.ARTIST> {
        external_urls: ExternalUrls;
        followers: Followers;
        genres: Array<string>;
        images: Array<Image>;
        name: string;
        popularity: number;
    }

    export interface Followers {
        href: string | null;
        total: number;
    }

    export interface Paginator<T> {
        href: string;
        items: Array<T>;
        limit: number;
        next: string | null;
        offset: number;
        previous: string | null;
        total: number;
    }

    export enum IncludeGroups {
        ALBUM = "album",
        SINGLE = "single",
        APPEARS_ON = "appears_on",
        COMPILATION = "compilation",
    }

    export interface Track extends Payload<Keys.TRACK> {
        album: Album;
        artists: Array<Artist>;
        available_markets: Array<string>;
        disc_number: number;
        duration_ms: number;
        explicit: boolean;
        external_ids: ExternalIds;
        external_urls: ExternalUrls;
        linked_from: Track;
        restrictions: Restrictions;
        name: string;
        popularity: number;
        preview_url: string | null;
        track_number: number;
        is_local: boolean;
    }

    export interface ExternalIds {
        isrc: string;
        ean: string;
        upc: string;
    }

    export interface Show extends Payload<Keys.SHOW> {
        available_markets: Array<string>;
        copyrights: Array<Copyright>;
        description: string;
        html_description: string;
        explicit: boolean;
        external_urls: ExternalUrls;
        images: Array<Image>;
        is_externally_hosted: boolean;
        languages: Array<string>;
        media_type: string;
        name: string;
        publisher: string;
        episodes: Paginator<Episode>;
    }

    export interface Episode extends Payload<Keys.EPISODE> {
        audio_preview_url: string;
        description: string;
        html_description: string;
        duration_ms: number;
        explicit: boolean;
        external_urls: ExternalUrls;
        images: Array<Image>;
        is_externally_hosted: boolean;
        is_playable: boolean;
        /**
         * @deprecated use `Episode.languages` instead
         */
        language: string;
        languages: Array<string>;
        name: string;
        release_date: string;
        release_date_precision: ReleaseDatePrecision;
        resume_point: ResumePoint | undefined;
        restrictions: Restrictions;
        show: Show;
    }

    export interface ResumePoint {
        resume_position_ms: number;
        fully_played: boolean;
    }

    export interface Copyright {
        text: string;
        type: CopyrightType;
    }

    export enum CopyrightType {
        COPYRIGHT = "C",
        PERFORMANCE = "P",
    }

    export interface AudioFeatures {
        acousticness: number;
        analysis_url: string;
        danceability: number;
        duration_ms: number;
        energy: number;
        instrumentalness: number;
        key: number;
        liveness: number;
        loudness: number;
        mode: number;
        speechiness: number;
        tempo: number;
        time_signature: number;
        track_href: string;
        valence: number;
        type: string;
        id: string;
        uri: string;
    }

    export interface AudioAnalysis {
        meta: AudioAnalysisMeta;
        track: AudioAnalysisTrack;
        bars: Array<AudioAnalysisMeasurement>;
        beats: Array<AudioAnalysisMeasurement>;
        sections: Array<AudioAnalysisSection>;
        segments: Array<AudioAnalysisSegment>;
        tatums: Array<AudioAnalysisMeasurement>;
    }

    export interface AudioAnalysisMeta {
        analyzer_version: string;
        platform: string;
        detailed_status: string;
        status_code: number;
        timestamp: number;
        analysis_time: number;
        input_process: string;
    }

    export interface AudioAnalysisTrack {
        num_samples: number;
        duration: number;
        sample_md5: string;
        offset_seconds: number;
        window_seconds: number;
        analysis_sample_rate: number;
        analysis_channels: number;
        end_of_fade_in: number;
        start_of_fade_out: number;
        loudness: number;
        tempo: number;
        tempo_confidence: number;
        time_signature: number;
        time_signature_confidence: number;
        key: number;
        key_confidence: number;
        mode: number;
        mode_confidence: number;
        codestring: string;
        code_version: number;
        echoprintstring: string;
        echoprint_version: number;
        synchstring: string;
        synch_version: number;
        rhythmstring: string;
        rhythm_version: number;
    }

    export interface AudioAnalysisMeasurement {
        start: number;
        duration: number;
        confidence: number;
    }

    export interface AudioAnalysisSection extends AudioAnalysisMeasurement {
        loudness: number;
        tempo: number;
        tempo_confidence: number;
        key: number;
        key_confidence: number;
        mode: number;
        mode_confidence: number;
        time_signature: number;
        time_signature_confidence: number;
    }

    export interface AudioAnalysisSegment extends AudioAnalysisMeasurement {
        loudness_start: number;
        loudness_max_time: number;
        loudness_max: number;
        loudness_end: number;
        pitches: Array<number>;
        timbre: Array<number>;
    }

    export enum Keys {
        ALBUM = "album",
        ARTIST = "artist",
        PLAYLIST = "playlist",
        TRACK = "track",
        SHOW = "show",
        EPISODE = "episode",
    }

    export type KeysPlural = {
        [key in Keys]: `${key}s`;
    };

    export type Flip<X extends Record<string, string>> = X extends Record<
        infer K,
        infer V
    >
        ? Record<V extends string ? V : never, K>
        : never;

    export interface TypeFromK {
        [Keys.ALBUM]: Album;
        [Keys.ARTIST]: Artist;
        [Keys.PLAYLIST]: Playlist;
        [Keys.TRACK]: Track;
        [Keys.SHOW]: Show;
        [Keys.EPISODE]: Episode;
    }

    export interface SearchTotal {
        artists: Paginator<Artist>;
        albums: Paginator<Album>;
        playlists: Paginator<Playlist>;
        tracks: Paginator<Track>;
        shows: Paginator<Show>;
        episodes: Paginator<Episode>;
    }

    export type Search = Partial<SearchTotal>;

    export interface Playlist extends Payload<Keys.PLAYLIST> {
        collaborative: boolean;
        description: string | null;
        external_urls: ExternalUrls;
        followers?: Followers;
        images: Array<Image>;
        name: string;
        owner: User;
        public: boolean;
        snapshot_id: string;
        tracks: Paginator<Track>;
    }

    export interface User extends Payload<"user"> {
        display_name: string;
        external_urls: ExternalUrls;
        followers: Followers;
    }

    export interface CategoryPlaylists
        extends Result<"albums", Paginator<Album>> {
        message: string;
    }

    export interface Category extends Payload<"category"> {
        icons: Array<Image>;
        name: string;
    }

    export interface Token {
        access_token: string;
        token_type: string;
        expires_in: number;
    }

    export type Result<K extends string, V> = {
        [P in K]: V;
    };

    export class API extends Pariah {
        public readonly id: string;
        public readonly secret: string;
        public token: string | undefined;
        public tokenExpiry: number | undefined;
        constructor(id: string, secret: string) {
            super(Url);
            this.id = id;
            this.secret = secret;
        }

        async loadCredentials(): Promise<this> {
            if (!this.tokenExpiry || this.tokenExpiry > Date.now()) {
                // temporarily change subdomain
                this.url.hostname = "accounts.spotify.com";
                this.url.pathname = "/";

                const token = await this.post.json<Token>(
                    "/api/token",
                    { grant_type: "client_credentials" },
                    {
                        headers: {
                            Authorization: `Basic ${Buffer.from(
                                `${this.id}:${this.secret}`
                            ).toString("base64")}`,
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                    }
                );

                // reset subdomain
                this.url.hostname = "api.spotify.com";
                this.url.pathname = "/v1";

                return this.setToken(token.payload);
            }

            return this;
        }

        setToken(token: Token) {
            this.token = token.access_token;
            this.tokenExpiry = Date.now() + token.expires_in * 1000;
            this._init.headers = { Authorization: `Bearer ${this.token}` };
            return this;
        }

        getAlbum(id: string, market?: string) {
            return this.get.json<Err | Album>("/albums/:id", {
                ":id": id,
                market,
            });
        }

        getSeveralAlbums(ids: Array<string>, market?: string) {
            return this.get.json<Err | Result<"albums", Array<Album>>>(
                "/albums",
                {
                    ids: ids.join(","),
                    market,
                }
            );
        }

        getAlbumTracks(id: string, limit = 20, offset = 0, market?: string) {
            return this.get.json<Err | Paginator<Track>>("/albums/:id/tracks", {
                ":id": id,
                limit,
                offset,
                market,
            });
        }

        getArtist(id: string) {
            return this.get.json<Err | Artist>("/artists/:id", { ":id": id });
        }

        getSeveralArtists(ids: Array<string>) {
            return this.get.json<Err | Result<"artists", Array<Artist>>>(
                "/artists",
                {
                    ids: ids.join(","),
                }
            );
        }

        getArtistsAlbums(
            id: string,
            includeGroups?: Array<IncludeGroups>,
            limit = 20,
            offset = 0,
            market?: string
        ) {
            return this.get.json<Err | Paginator<Album>>(
                "/artists/:id/albums",
                {
                    ":id": id,
                    include_groups: includeGroups?.join(","),
                    limit,
                    offset,
                    market,
                }
            );
        }

        getArtistsTopTracks(id: string, market?: string) {
            return this.get.json<Err | Result<"tracks", Array<Track>>>(
                "/artists/:id/top-tracks",
                {
                    ":id": id,
                    market,
                }
            );
        }

        getArtistsRelatedArtists(id: string) {
            return this.get.json<Err | Result<"artists", Array<Artist>>>(
                "/artists/:id/related-artists",
                {
                    ":id": id,
                }
            );
        }

        getShow(id: string, market?: string) {
            return this.get.json<Err | Show>("/shows/:id", {
                ":id": id,
                market,
            });
        }

        getSeveralShows(ids: Array<string>, market?: string) {
            return this.get.json<Err | Result<"shows", Array<Show>>>("/shows", {
                ids: ids.join(","),
                market,
            });
        }

        getShowEpisodes(id: string, limit = 20, offset = 0, market?: string) {
            return this.get.json<Err | Paginator<Episode>>(
                "/shows/:id/episodes",
                {
                    ":id": id,
                    limit,
                    offset,
                    market,
                }
            );
        }

        getEpisode(id: string, market?: string) {
            return this.get.json<Err | Episode>("/episodes/:id", {
                ":id": id,
                market,
            });
        }

        getSeveralEpisodes(ids: Array<string>, market?: string) {
            return this.get.json<Err | Result<"episodes", Array<Episode>>>(
                "/episodes",
                {
                    ids: ids.join(","),
                    market,
                }
            );
        }

        getTrack(id: string, market?: string) {
            return this.get.json<Err | Track>("/tracks/:id", {
                ":id": id,
                market,
            });
        }

        getSeveralTracks(ids: Array<string>, market?: string) {
            return this.get.json<Err | Result<"tracks", Array<Track>>>(
                "/tracks",
                {
                    ids: ids.join(","),
                    market,
                }
            );
        }

        getTrackAudioFeatures(id: string) {
            return this.get.json<Err | AudioFeatures>("/audio-features/:id", {
                ":id": id,
            });
        }

        getSeveralTrackAudioFeatures(ids: Array<string>) {
            return this.get.json<
                Err | Result<"audio_features", Array<AudioFeatures>>
            >("/audio-features", {
                ids: ids.join(","),
            });
        }

        getTrackAudioAnalysis(id: string) {
            return this.get.json<Err | AudioAnalysis>("/audio-analysis/:id", {
                ":id": id,
            });
        }

        getRecomendations(options: Record<string, unknown>) {
            return this.get.json<Err | Paginator<Track>>(
                "/recommendations",
                options
            );
        }

        searchForItem(
            query: string,
            type = Object.values(Keys),
            limit = 20,
            include_external?: "audio",
            market?: string
        ) {
            return this.get.json<Err | Search>("/search", {
                q: query,
                type: type.join(","),
                limit,
                include_external,
                market,
            });
        }

        getPlaylist(
            id: string,
            additionalTypes: Array<Keys.TRACK | Keys.EPISODE>,
            market?: string
        ) {
            return this.get.json<Err | Playlist>("/playlists/:id", {
                ":id": id,
                additional_types: additionalTypes.join(","),
                market,
            });
        }

        getPlaylistItems(
            id: string,
            additionalTypes: Array<Keys.TRACK | Keys.EPISODE>,
            limit = 20,
            offset = 0,
            market?: string
        ) {
            return this.get.json<Err | Paginator<Track>>(
                "/playlists/:id/tracks",
                {
                    ":id": id,
                    additional_types: additionalTypes.join(","),
                    limit,
                    offset,
                    market,
                }
            );
        }

        getUserPlaylists(id: string, limit = 20, offset = 0) {
            return this.get.json<Err | Paginator<Playlist>>(
                "/users/:id/playlists",
                {
                    ":id": id,
                    limit,
                    offset,
                }
            );
        }

        getFeaturedPlaylists(
            country?: string,
            limit = 20,
            offset = 0,
            locale?: string,
            timestamp?: string
        ) {
            return this.get.json<Err | Paginator<Playlist>>(
                "/browse/featured-playlists",
                {
                    country,
                    limit,
                    offset,
                    locale,
                    timestamp,
                }
            );
        }

        getCategorysPlaylists(id: string) {
            return this.get.json<Err | CategoryPlaylists>(
                "/browse/categories/:id",
                {
                    ":id": id,
                }
            );
        }

        getPlaylistCoverImage(id: string) {
            return this.get.json<Err | Array<Image>>("/playlists/:id/images", {
                ":id": id,
            });
        }

        getSeveralBrowseCategories(
            country?: string,
            limit = 20,
            offset = 0,
            locale?: string
        ) {
            return this.get.json<Err | Paginator<Category>>(
                "/browse/categories",
                {
                    country,
                    limit,
                    offset,
                    locale,
                }
            );
        }

        getSingleBrowseCategory(id: string) {
            return this.get.json<Err | Category>("/browse/categories/:id", {
                ":id": id,
            });
        }

        getAvailableGenreSeeds() {
            return this.get.json<Err | Result<"genres", Array<string>>>(
                "/recommendations/available-genre-seeds"
            );
        }

        getAvailableMarkets() {
            return this.get.json<Err | Result<"markets", Array<string>>>(
                "/markets"
            );
        }
    }
}
