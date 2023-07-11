import { Payload } from '../lib/payload';
import { Requester } from '../lib/requester';

/* eslint-disable @typescript-eslint/naming-convention */
export const Url = new URL('https://api.spotify.com/v1/');

export interface Err {
    error: {
        status: number;
        message: string;
    };
}

export interface Id<T extends string> {
    id: string;
    href: string;
    type: T;
    uri: string;
}

export interface Album extends Id<Keys.ALBUM> {
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
    ALBUM = 'album',
    SINGLE = 'single',
    COMPILATION = 'compilation',
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
    DAY = 'day',
    MONTH = 'month',
    YEAR = 'year',
}

export interface Restrictions {
    reason: RestrictionReason;
}

export enum RestrictionReason {
    MARKET = 'market',
    PRODUCT = 'product',
    EXPLICIT = 'explicit',
}

export interface Artist extends Id<Keys.ARTIST> {
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
    ALBUM = 'album',
    SINGLE = 'single',
    APPEARS_ON = 'appears_on',
    COMPILATION = 'compilation',
}

export interface Track extends Id<Keys.TRACK> {
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

export interface Show extends Id<Keys.SHOW> {
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

export interface Episode extends Id<Keys.EPISODE> {
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
    COPYRIGHT = 'C',
    PERFORMANCE = 'P',
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
    ALBUM = 'album',
    ARTIST = 'artist',
    PLAYLIST = 'playlist',
    TRACK = 'track',
    SHOW = 'show',
    EPISODE = 'episode',
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

export interface Playlist extends Id<Keys.PLAYLIST> {
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

export interface User extends Id<'user'> {
    display_name: string;
    external_urls: ExternalUrls;
    followers: Followers;
}

export interface CategoryPlaylists extends Result<'albums', Paginator<Album>> {
    message: string;
}

export interface Category extends Id<'category'> {
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

export class Spotify extends Requester {
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
      this.url.hostname = 'accounts.spotify.com';
      this.url.pathname = '/';

      const token: Payload<Token> = await this.json(
        'POST /api/token',
        { grant_type: 'client_credentials' },
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              `${this.id}:${this.secret}`
            ).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      // reset subdomain
      this.url.hostname = 'api.spotify.com';
      this.url.pathname = '/v1';

      return this.setToken(token.unwrap());
    }

    return this;
  }

  setToken(token: Token) {
    this.token = token.access_token;
    this.tokenExpiry = Date.now() + token.expires_in * 1000;
    super.options.headers = { Authorization: `Bearer ${this.token}` };
    return this;
  }

  
}

export namespace Spotify {
  export enum Methods {
    GetAlbum = 'GET /albums/:id',
    GetSeveralAlbums = 'GET /albums',
    GetAlbumTracks = '/albums/:id/tracks',
    GetArtist = '/artists/:id',
    GetSeveralArtists = '/artists',
    GetArtistsAlbums = '/artists/:id/albums',
    GetArtistsTopTracks = '/artists/:id/top-tracks',
    GetArtistsRelatedArtists = '/artists/:id/related-artists',
    GetShow = '/shows/:id',
    GetSeveralShows = '/shows',
    GetShowEpisodes = '/shows/:id/episodes',
    GetEpisode = '/episodes/:id',
    GetSeveralEpisodes = '/episodes',
    GetTrack = '/tracks/:id',
    GetSeveralTracks = '/tracks',
    GetTrackAudioFeatures = '/audio-features/:id',
    GetSeveralTrackAudioFeatures = '/audio-features',
    GetTrackAudioAnalysis = '/audio-analysis/:id',
    GetRecommendations = '/recommendations',
    
  }
}