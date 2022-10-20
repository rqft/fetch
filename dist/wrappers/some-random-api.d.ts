import { Payload } from "../lib/payload";
import { Requester } from "../lib/requester";
export declare const Url = "https://some-random-api.ml/";
export interface Fact {
    fact: string;
}
export interface Image {
    image: string;
}
export interface Link {
    link: string;
}
export interface Animal extends Image, Fact {
}
export declare class SomeRandomApi extends Requester {
    constructor();
    animal_dog(): Promise<Payload<Animal>>;
    animal_cat(): Promise<Payload<Animal>>;
    animal_panda(): Promise<Payload<Animal>>;
    animal_fox(): Promise<Payload<Animal>>;
    animal_red_panda(): Promise<Payload<Animal>>;
    animal_koala(): Promise<Payload<Animal>>;
    animal_bird(): Promise<Payload<Animal>>;
    animal_raccoon(): Promise<Payload<Animal>>;
    animal_kangaroo(): Promise<Payload<Animal>>;
    fact_dog(): Promise<Payload<Fact>>;
    fact_cat(): Promise<Payload<Fact>>;
    fact_panda(): Promise<Payload<Fact>>;
    fact_fox(): Promise<Payload<Fact>>;
    fact_bird(): Promise<Payload<Fact>>;
    fact_koala(): Promise<Payload<Fact>>;
}
