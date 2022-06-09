import { Pariah } from "../pariah";
export declare module Spotify {
    const Url: URL;
    interface Err {
        error: {
            status: number;
            message: string;
        };
    }
    interface Payload<T extends string> {
        id: string;
        href: string;
        type: T;
        uri: string;
    }
    interface Album extends Payload<Keys.ALBUM> {
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
    enum AlbumTypes {
        ALBUM = "album",
        SINGLE = "single",
        COMPILATION = "compilation"
    }
    interface ExternalUrls {
        spotify: string;
    }
    interface Image {
        url: string;
        height: number;
        width: number;
    }
    enum ReleaseDatePrecision {
        DAY = "day",
        MONTH = "month",
        YEAR = "year"
    }
    interface Restrictions {
        reason: RestrictionReason;
    }
    enum RestrictionReason {
        MARKET = "market",
        PRODUCT = "product",
        EXPLICIT = "explicit"
    }
    interface Artist extends Payload<Keys.ARTIST> {
        external_urls: ExternalUrls;
        followers: Followers;
        genres: Array<string>;
        images: Array<Image>;
        name: string;
        popularity: number;
    }
    interface Followers {
        href: string | null;
        total: number;
    }
    interface Paginator<T> {
        href: string;
        items: Array<T>;
        limit: number;
        next: string | null;
        offset: number;
        previous: string | null;
        total: number;
    }
    enum IncludeGroups {
        ALBUM = "album",
        SINGLE = "single",
        APPEARS_ON = "appears_on",
        COMPILATION = "compilation"
    }
    interface Track extends Payload<Keys.TRACK> {
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
    interface ExternalIds {
        isrc: string;
        ean: string;
        upc: string;
    }
    interface Show extends Payload<Keys.SHOW> {
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
    interface Episode extends Payload<Keys.EPISODE> {
        audio_preview_url: string;
        description: string;
        html_description: string;
        duration_ms: number;
        explicit: boolean;
        external_urls: ExternalUrls;
        images: Array<Image>;
        is_externally_hosted: boolean;
        is_playable: boolean;
        language: string;
        languages: Array<string>;
        name: string;
        release_date: string;
        release_date_precision: ReleaseDatePrecision;
        resume_point: ResumePoint | undefined;
        restrictions: Restrictions;
        show: Show;
    }
    interface ResumePoint {
        resume_position_ms: number;
        fully_played: boolean;
    }
    interface Copyright {
        text: string;
        type: CopyrightType;
    }
    enum CopyrightType {
        COPYRIGHT = "C",
        PERFORMANCE = "P"
    }
    interface AudioFeatures {
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
    interface AudioAnalysis {
        meta: AudioAnalysisMeta;
        track: AudioAnalysisTrack;
        bars: Array<AudioAnalysisMeasurement>;
        beats: Array<AudioAnalysisMeasurement>;
        sections: Array<AudioAnalysisSection>;
        segments: Array<AudioAnalysisSegment>;
        tatums: Array<AudioAnalysisMeasurement>;
    }
    interface AudioAnalysisMeta {
        analyzer_version: string;
        platform: string;
        detailed_status: string;
        status_code: number;
        timestamp: number;
        analysis_time: number;
        input_process: string;
    }
    interface AudioAnalysisTrack {
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
    interface AudioAnalysisMeasurement {
        start: number;
        duration: number;
        confidence: number;
    }
    interface AudioAnalysisSection extends AudioAnalysisMeasurement {
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
    interface AudioAnalysisSegment extends AudioAnalysisMeasurement {
        loudness_start: number;
        loudness_max_time: number;
        loudness_max: number;
        loudness_end: number;
        pitches: Array<number>;
        timbre: Array<number>;
    }
    enum Keys {
        ALBUM = "album",
        ARTIST = "artist",
        PLAYLIST = "playlist",
        TRACK = "track",
        SHOW = "show",
        EPISODE = "episode"
    }
    type KeysPlural = {
        [key in Keys]: `${key}s`;
    };
    type Flip<X extends Record<string, string>> = X extends Record<infer K, infer V> ? Record<V extends string ? V : never, K> : never;
    interface TypeFromK {
        [Keys.ALBUM]: Album;
        [Keys.ARTIST]: Artist;
        [Keys.PLAYLIST]: Playlist;
        [Keys.TRACK]: Track;
        [Keys.SHOW]: Show;
        [Keys.EPISODE]: Episode;
    }
    interface SearchTotal {
        artists: Paginator<Artist>;
        albums: Paginator<Album>;
        playlists: Paginator<Playlist>;
        tracks: Paginator<Track>;
        shows: Paginator<Show>;
        episodes: Paginator<Episode>;
    }
    type Search = Partial<SearchTotal>;
    interface Playlist extends Payload<Keys.PLAYLIST> {
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
    interface User extends Payload<"user"> {
        display_name: string;
        external_urls: ExternalUrls;
        followers: Followers;
    }
    interface CategoryPlaylists extends Result<"albums", Paginator<Album>> {
        message: string;
    }
    interface Category extends Payload<"category"> {
        icons: Array<Image>;
        name: string;
    }
    interface Token {
        access_token: string;
        token_type: string;
        expires_in: number;
    }
    type Result<K extends string, V> = {
        [P in K]: V;
    };
    class API extends Pariah {
        readonly id: string;
        readonly secret: string;
        token: string | undefined;
        tokenExpiry: number | undefined;
        constructor(id: string, secret: string);
        loadCredentials(): Promise<this>;
        setToken(token: Token): this;
        getAlbum(id: string, market?: string): Promise<import("..").Data<Err | Album>>;
        getSeveralAlbums(ids: Array<string>, market?: string): Promise<import("..").Data<Err | Result<"albums", Album[]>>>;
        getAlbumTracks(id: string, limit?: number, offset?: number, market?: string): Promise<import("..").Data<Err | Paginator<Track>>>;
        getArtist(id: string): Promise<import("..").Data<Err | Artist>>;
        getSeveralArtists(ids: Array<string>): Promise<import("..").Data<Err | Result<"artists", Artist[]>>>;
        getArtistsAlbums(id: string, includeGroups?: Array<IncludeGroups>, limit?: number, offset?: number, market?: string): Promise<import("..").Data<Err | Paginator<Album>>>;
        getArtistsTopTracks(id: string, market?: string): Promise<import("..").Data<Err | Result<"tracks", Track[]>>>;
        getArtistsRelatedArtists(id: string): Promise<import("..").Data<Err | Result<"artists", Artist[]>>>;
        getShow(id: string, market?: string): Promise<import("..").Data<Err | Show>>;
        getSeveralShows(ids: Array<string>, market?: string): Promise<import("..").Data<Err | Result<"shows", Show[]>>>;
        getShowEpisodes(id: string, limit?: number, offset?: number, market?: string): Promise<import("..").Data<Err | Paginator<Episode>>>;
        getEpisode(id: string, market?: string): Promise<import("..").Data<Err | Episode>>;
        getSeveralEpisodes(ids: Array<string>, market?: string): Promise<import("..").Data<Err | Result<"episodes", Episode[]>>>;
        getTrack(id: string, market?: string): Promise<import("..").Data<Err | Track>>;
        getSeveralTracks(ids: Array<string>, market?: string): Promise<import("..").Data<Err | Result<"tracks", Track[]>>>;
        getTrackAudioFeatures(id: string): Promise<import("..").Data<Err | AudioFeatures>>;
        getSeveralTrackAudioFeatures(ids: Array<string>): Promise<import("..").Data<Err | Result<"audio_features", AudioFeatures[]>>>;
        getTrackAudioAnalysis(id: string): Promise<import("..").Data<Err | AudioAnalysis>>;
        getRecomendations(options: Record<string, unknown>): Promise<import("..").Data<Err | Paginator<Track>>>;
        searchForItem(query: string, type?: Keys[], limit?: number, include_external?: "audio", market?: string): Promise<import("..").Data<Err | Partial<SearchTotal>>>;
        getPlaylist(id: string, additionalTypes: Array<Keys.TRACK | Keys.EPISODE>, market?: string): Promise<import("..").Data<Err | Playlist>>;
        getPlaylistItems(id: string, additionalTypes: Array<Keys.TRACK | Keys.EPISODE>, limit?: number, offset?: number, market?: string): Promise<import("..").Data<Err | Paginator<Track>>>;
        getUserPlaylists(id: string, limit?: number, offset?: number): Promise<import("..").Data<Err | Paginator<Playlist>>>;
        getFeaturedPlaylists(country?: string, limit?: number, offset?: number, locale?: string, timestamp?: string): Promise<import("..").Data<Err | Paginator<Playlist>>>;
        getCategorysPlaylists(id: string): Promise<import("..").Data<Err | CategoryPlaylists>>;
        getPlaylistCoverImage(id: string): Promise<import("..").Data<Err | Image[]>>;
        getSeveralBrowseCategories(country?: string, limit?: number, offset?: number, locale?: string): Promise<import("..").Data<Err | Paginator<Category>>>;
        getSingleBrowseCategory(id: string): Promise<import("..").Data<Err | Category>>;
        getAvailableGenreSeeds(): Promise<import("..").Data<Err | Result<"genres", string[]>>>;
        getAvailableMarkets(): Promise<import("..").Data<Err | Result<"markets", string[]>>>;
    }
}
