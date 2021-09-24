import { Base } from "./base";
export const BASE_URL = "https://api.imagga.com/v2/";
export type Bit = 0 | 1;
export interface Response<T> {
  result: T;
  status: {
    text: string;
    type: "success" | "error";
  };
}
export type Language<R> = { en: R };
export interface ImageOptions {
  image_url?: string;
  image_upload_id?: string;
}
export interface Coordinates {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}
export interface Area {
  width: number;
  height: number;
  xmin: number;
  ymin: number;
  xmax: number;
  ymax: number;
}
export interface TagsOptions extends ImageOptions {
  verbose?: Bit;
  limit?: number;
  threshold?: number;
  decrease_parents?: number;
  tagger_id?: string;
}
export interface TagsResponse {
  tag: Array<Tag>;
}
export interface Tag {
  confidence: number;
  tag: Language<string>;
}
export interface CategorizersResponse {
  categorizers: Array<Categorizer>;
}
export interface Categorizer {
  labels: Array<string>;
  id: string;
  title: string;
}
export interface CategoriesOptions extends ImageOptions {
  save_index?: string;
  save_id?: string;
}
export interface CategoriesResponse {
  categories: Array<Category>;
}
export interface Category {
  confidence: number;
  tag: Language<string>;
}
export interface CroppingsOptions extends ImageOptions {
  resolution?: `${number}x${number}`;
  no_scaling?: Bit;
  rect_percentage?: number;
  image_result?: Bit;
}
export interface CroppingsResponse {
  croppings: Array<Cropping>;
}
export interface Cropping extends Coordinates {
  target_width: number;
  target_height: number;
}
export type ColorsFeatureType = "object" | "overall";
export interface ColorsOptions extends ImageOptions {
  extract_overall_colors?: Bit;
  extract_object_colors?: Bit;
  overall_count?: number;
  separated_count?: number;
  deterministic?: Bit;
  features_type?: ColorsFeatureType;
}
export interface ColorsResponse {
  colors: Colors;
}
export interface Colors {
  background_colors: Array<Color>;
  color_variance: number;
  object_percentage: number;
  image_colors: Array<Color>;
  color_percent_treshold: number;
  foreground_colors: Array<Color>;
}
export interface Color {
  b: number;
  closest_palette_color: string;
  closest_palette_color_html_code: string;
  closest_palette_color_parent: string;
  closest_palette_distance: number;
  g: number;
  html_code: number;
  percent: number;
  r: number;
}
export interface FacesDetectionsOptions extends ImageOptions {
  return_face_id?: Bit;
  return_face_attributes?: Bit;
}
export interface FacesDetectionsResponse {
  faces: Array<Face>;
}
export interface Face {
  confidence: number;
  coordinates: Area;
  face_id?: string;
  attributes: Array<FacesAttributes>;
}
export interface FacesAttributes {
  type: string;
}
export class Imagga extends Base {
  public readonly token: string;
  constructor(token: string) {
    super({
      baseUrl: BASE_URL,
      headers: {
        Authorization: token,
      },
    });
    this.token = token;
  }
  public async getJson<T>(endpoint: string, init?: RequestInit): Promise<T> {
    return (await this.get(endpoint, init)).json();
  }
  public toUrlParams(object: object) {
    return `?${Object.entries(object)
      .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
      .join("&")}`;
  }
  public async tags(options: TagsOptions, tagger_id?: string) {
    return this.getJson<Response<TagsResponse>>(
      `tags/${tagger_id}${this.toUrlParams(options)}`
    );
  }
  public async categorizers() {
    return this.getJson<Response<CategorizersResponse>>("categorizers");
  }
  public async categories(options: CategoriesOptions, categorizer_id?: string) {
    return this.getJson<Response<CategoriesResponse>>(
      `categories/${categorizer_id}${this.toUrlParams(options)}`
    );
  }
  public async croppings(options: CroppingsOptions) {
    return this.getJson<Response<CroppingsResponse>>(
      `croppings/${this.toUrlParams(options)}`
    );
  }
  public async colors(options: ColorsOptions) {
    return this.getJson<Response<ColorsResponse>>(
      `colors/${this.toUrlParams(options)}`
    );
  }
  public async facesDetections(options: FacesDetectionsOptions) {
    return this.getJson<Response<FacesDetectionsResponse>>(
      `faces/detections/${this.toUrlParams(options)}`
    );
  }
}