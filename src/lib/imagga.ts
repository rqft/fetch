import { Pariah } from "../pariah";

export module Imagga {
    export const Url = new URL("https://api.imagga.com/v2");
    export type Lang = "en";

    export type Bit = 0 | 1;

    export interface Language<T> extends Record<Lang, T> {}

    export interface Payload<T> {
        result: T;
        status: {
            text: string;
            type: "success" | "error";
        };
    }

    export interface Result<K extends string | undefined, T>
        extends Payload<K extends string ? { [key in K]: T } : T> {}

    export interface Area {
        x1: number;
        y1: number;
        x2: number;
        y2: number;
    }

    export interface Coordinates {
        xmin: number;
        ymin: number;
        xmax: number;
        ymax: number;
        height: number;
        width: number;
    }

    export interface TagsOptions {
        verbose?: Bit;
        limit?: number;
        threshold?: number;
        decrease_parents?: Bit;
        taggerId?: string;
    }

    export interface Tag {
        confidence: number;
        tag: Language<string>;
    }

    export interface Categorizer {
        id: string;
        labels: Array<string>;
        title: string;
    }

    export interface Category {
        confidence: number;
        name: Language<string>;
    }

    export interface CroppingsOptions {
        no_scaling?: Bit;
        rect_percentage?: number;
        resolution?: `${number}x${number}`;
        image_result?: Bit;
    }

    export interface Cropping extends Area {
        target_height: number;
        target_width: number;
    }

    export interface ColorsOptions {
        extract_overall_colors?: Bit;
        extract_object_colors?: Bit;
        overall_count?: number;
        separated_count?: number;
        deterministic?: Bit;
    }

    export interface Color {
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

    export interface Colors {
        background_colors: Array<Color>;
        color_percent_threshold: number;
        color_variance: number;
        foreground_colors: Array<Color>;
        image_colors: Array<Color>;
        object_percentage: number;
    }

    export interface Text {
        data: string;
        coordinates: Coordinates;
    }

    export class API extends Pariah {
        public readonly token: string;
        constructor(token: string) {
            super(Url, { headers: { Authorization: `Basic ${token}` } });
            this.token = token;
        }

        public async tags(imageUrl: string, options: TagsOptions = {}) {
            return this.get.json<Result<"tags", Array<Tag>>>(
                "/tags/:taggerId",
                {
                    ":taggerId": options.taggerId,
                    image_url: imageUrl,
                    ...options,
                }
            );
        }

        public async categorizers() {
            return this.get.json<Result<"categorizers", Array<Categorizer>>>(
                "/categorizers"
            );
        }

        public async categories(imageUrl: string, categorizerId: string) {
            return this.get.json<Result<"categories", Array<Category>>>(
                "/categories/:categorizerId",
                {
                    ":categorizerId": categorizerId,
                    image_url: imageUrl,
                }
            );
        }

        public async croppings(
            imageUrl: string,
            options: CroppingsOptions = {}
        ) {
            return this.get.json<Result<"croppings", Array<Cropping>>>(
                "/croppings",
                {
                    image_url: imageUrl,
                    ...options,
                }
            );
        }

        public async colors(imageUrl: string, options: ColorsOptions) {
            return this.get.json<Result<"colors", Colors>>("/colors", {
                image_url: imageUrl,
                ...options,
            });
        }

        public async readText(imageUrl: string) {
            return this.get.json<Result<"text", Array<Text>>>("/text", {
                image_url: imageUrl,
            });
        }
    }
}
