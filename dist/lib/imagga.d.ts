import { Pariah } from "../pariah";
export declare module Imagga {
    const Url: URL;
    type Lang = "en";
    type Bit = 0 | 1;
    interface Language<T> extends Record<Lang, T> {
    }
    interface Payload<T> {
        result: T;
        status: {
            text: string;
            type: "success" | "error";
        };
    }
    interface Result<K extends string | undefined, T> extends Payload<K extends string ? {
        [key in K]: T;
    } : T> {
    }
    interface Area {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    }
    interface Coordinates {
        xmin: number;
        ymin: number;
        xmax: number;
        ymax: number;
        height: number;
        width: number;
    }
    interface TagsOptions {
        verbose?: Bit;
        limit?: number;
        threshold?: number;
        decrease_parents?: Bit;
        taggerId?: string;
    }
    interface Tag {
        confidence: number;
        tag: Language<string>;
    }
    interface Categorizer {
        id: string;
        labels: Array<string>;
        title: string;
    }
    interface Category {
        confidence: number;
        name: Language<string>;
    }
    interface CroppingsOptions {
        no_scaling?: Bit;
        rect_percentage?: number;
        resolution?: `${number}x${number}`;
        image_result?: Bit;
    }
    interface Cropping extends Area {
        target_height: number;
        target_width: number;
    }
    interface ColorsOptions {
        extract_overall_colors?: Bit;
        extract_object_colors?: Bit;
        overall_count?: number;
        separated_count?: number;
        deterministic?: Bit;
    }
    interface Color {
        r: number;
        g: number;
        b: number;
        html_code: string;
        percent: number;
        closest_palette_color: string;
        closest_palette_color_html_code: string;
        closest_palette_color_parent: string;
        closest_palette_distance: number;
    }
    interface Colors {
        background_colors: Array<Color>;
        color_percent_threshold: number;
        color_variance: number;
        foreground_colors: Array<Color>;
        image_colors: Array<Color>;
        object_percentage: number;
    }
    interface Text {
        data: string;
        coordinates: Coordinates;
    }
    class API extends Pariah {
        readonly token: string;
        constructor(token: string);
        tags(imageUrl: string, options?: TagsOptions): Promise<Result<"tags", Tag[]>>;
        categorizers(): Promise<Result<"categorizers", Categorizer[]>>;
        categories(imageUrl: string, categorizerId: string): Promise<Result<"categories", Category[]>>;
        croppings(imageUrl: string, options?: CroppingsOptions): Promise<Result<"croppings", Cropping[]>>;
        colors(imageUrl: string, options: ColorsOptions): Promise<Result<"colors", Colors>>;
        readText(imageUrl: string): Promise<Result<"text", Text[]>>;
    }
}
