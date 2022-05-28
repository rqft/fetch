import { Pariah } from "../pariah";

export module Abstract {
    // this api weird as fuck so i have to make a lot of modules
    // export const Url = new URL("https://app.abstractapi.com/");

    export module EmailValidation {
        export enum DeliverableStates {
            DELIVERABLE = "DELIVERABLE",
            UNDELIVERABLE = "UNDELIVERABLE",
            UNKNOWN = "UNKNOWN",
            RISKY = "RISKY",
        }

        export interface BoolTrue {
            value: true;
            text: "TRUE";
        }
        export interface BoolFalse {
            value: false;
            text: "FALSE";
        }
        export type Bool = BoolTrue | BoolFalse;

        export interface Result {
            email: string;
            autocorrect: string | "";
            deliverability: DeliverableStates;
            quality_score: number;
            is_valid_format: Bool;
            is_free_email: Bool;
            is_disposable_email: Bool;
            is_role_email: Bool;
            is_catchall_email: Bool;
            is_mx_found: Bool;
            is_smtp_valid: Bool;
        }

        export const Url = new URL(
            "https://emailvalidation.abstractapi.com/v1/"
        );

        export function validate(
            apiKey: string,
            email: string,
            autoCorrect: boolean = false
        ) {
            return new Pariah(Url).get.json<Result>("/", {
                api_key: apiKey,
                email,
                auto_correct: autoCorrect,
            });
        }
    }

    export module PhoneValidation {
        export interface Format {
            international: string;
            local: string;
        }

        export interface Country {
            code: string;
            name: string;
            prefix: string;
        }

        export enum Type {
            LANDLINE = "landline",
            MOBILE = "mobile",
            SATELLITE = "satellite",
            PREMIUM = "premium",
            PAGING = "paging",
            SPECIAL = "special",
            TOLL_FREE = "toll_free",
            UNKNOWN = "unknown",
        }

        export interface Result {
            phone: string;
            valid: boolean;
            format: Format;
            country: Country;
            location: string;
            type: Type;
            carrier: string;
        }

        export const Url = new URL(
            "https://phonevalidation.abstractapi.com/v1/"
        );

        export function validate(apiKey: string, phone: string) {
            return new Pariah(Url).get.json<Result>("/", {
                api_key: apiKey,
                phone,
            });
        }
    }

    export module VAT {
        export const Url = new URL("https://vat.abstractapi.com/v1/");

        export interface ValidateResult {
            vat_number: string;
            is_vat_valid: boolean;
            company_name: string;
            company_address: string;
            company_country: string;
            company_country_code: string;
        }

        export async function validate(apiKey: string, vat: string) {
            return await new Pariah(Url).get.json<ValidateResult>("/validate", {
                api_key: apiKey,
                vat,
            });
        }

        export interface CalculateResult {
            amount_excl_vat: number;
            vat_amount: number;
            amount_incl_vat: number;
            vat_rate: number;
            vat_category: string;
            country_code: string;
            country_name: string;
        }

        export async function calculate(
            apiKey: string,
            amount: number,
            countryCode: string,
            isVatIncl?: boolean,
            vatCategory?: string
        ) {
            return await new Pariah(Url).get.json<CalculateResult>(
                "/calculate",
                {
                    api_key: apiKey,
                    amount,
                    country_code: countryCode,
                    is_vat_included: isVatIncl,
                    vat_category: vatCategory,
                }
            );
        }

        export enum CountryCodes {
            AUSTRIA = "AT",
            BELGIUM = "BE",
            BULGARIA = "BG",
            CYPRUS = "CY",
            CZECH_REPUBLIC = "CZ",
            GERMANY = "DE",
            DENMARK = "DK",
            ESTONIA = "EE",
            GREECE = "EL",
            SPAIN = "ES",
            FINLAND = "FI",
            FRANCE = "FR",
            CROATIA = "HR",
            HUNGARY = "HU",
            IRELAND = "IR",
            ITALY = "IT",
            LITHUANIA = "LT",
            LUXEMBOURG = "LU",
            LATVA = "LV",
            MALTA = "MT",
            THE_NETHERLANDS = "NL",
            POLAND = "PL",
            PORTUGAL = "PT",
            ROMANIA = "RO",
            SWEDEN = "SE",
            SLOVENIA = "SI",
            SLOVAKIA = "SK",
            NORTHERN_IRELAND = "XI",
        }

        export interface CategoriesResult {
            country_code: string;
            country_name: string;
            standard_rate: number;
            reduced_rates: Record<string, number>;
        }

        export async function categories(
            apiKey: string,
            countryCode: CountryCodes
        ) {
            return await new Pariah(Url).get.json<CategoriesResult>(
                "/categories",
                {
                    api_key: apiKey,
                    country_code: countryCode,
                }
            );
        }
    }

    export module IBANValidation {
        export interface Result {
            iban: string;
            is_valid: boolean;
        }

        export const Url = new URL(
            "https://ibanvalidation.abstractapi.com/v1/"
        );

        export function validate(apiKey: string, iban: string) {
            return new Pariah(Url).get.json<Result>("/", {
                api_key: apiKey,
                iban,
            });
        }
    }

    export module IpGeolocation {
        export interface Security {
            is_vpn: boolean;
        }

        export interface Timezone {
            name: string;
            abbreviation: string;
            gmt_offset: number;
            current_time: string;
            is_dst: boolean;
        }

        export interface Flag {
            svg: string;
            png: string;
            emoji: string;
            unicode: string;
        }

        export interface Currency {
            currency_name: string;
            currency_code: string;
        }

        export enum ConnectionType {
            DIALUP = "dialup",
            CABLE = "cable",
            DSL = "dsl",
            CELLULAR = "cellular",
            CORPORATE = "corporate",
        }

        export interface Connection {
            connection_type: ConnectionType;
            autonomous_system_number: number;
            autonomous_system_organization: string;
            isp_name: string;
            organization_name: string;
        }

        export interface Result {
            ip_address: string;
            city: string;
            city_geoname_id: string;
            region: string;
            region_iso_code: string;
            region_geoname_id: string;
            postal_code: string;
            country: string;
            country_code: string;
            country_geoname_id: string;
            country_is_eu: boolean;
            continent: string;
            continent_code: string;
            continent_geoname_id: string;
            longitude: number;
            latitude: number;
            security: Security;
            timezone: Timezone;
            flag: Flag;
            currency: Currency;
            connection: Connection;
        }

        export const Url = new URL("https://ipgeolocation.abstractapi.com/v1/");

        export async function locate<F extends keyof Result>(
            apiKey: string,
            ipAddress: string,
            fields?: Array<F>
        ) {
            return await new Pariah(Url).get.json<Pick<Result, F>>("/", {
                api_key: apiKey,
                ip_address: ipAddress,
                fields: fields?.join(","),
            });
        }
    }

    export module Holidays {
        export interface Result {
            name: string;
            name_local: string;
            language: string;
            description: string;
            country: string;
            location: string;
            type: string;
            date: string;
            date_year: string;
            date_month: string;
            date_day: string;
            week_day: string;
        }

        export const Url = new URL("https://holidays.abstractapi.com/v1/");

        export type Day =
            | `${number}`
            | `${number}/${number}`
            | `${number}/${number}/${number}`;

        export async function get(apiKey: string, country: string, date: Day) {
            const [year, month, day] = date.split("/");
            return await new Pariah(Url).get.json<Result[]>("/", {
                api_key: apiKey,
                country,
                year,
                month,
                day,
            });
        }
    }

    export module ExchangeRates {
        export const Url = new URL(
            "https://exchangeratesapi.abstractapi.com/v1/"
        );

        export interface LiveResult<B extends string, T extends string> {
            base: B;
            last_updated: string;
            exchange_rates: Record<T, number>;
        }

        export async function live<B extends string, T extends string = string>(
            apiKey: string,
            base: B,
            target?: Array<T>
        ) {
            return await new Pariah(Url).get.json<LiveResult<B, T>>("/live", {
                api_key: apiKey,
                base,
                target: target ? target.join(",") : undefined,
            });
        }

        export type HistoricalResult<B extends string, T extends string> = Omit<
            LiveResult<B, T>,
            "last_updated"
        > & { date: string };

        export async function historical<
            B extends string,
            T extends string = string
        >(apiKey: string, date: string, base: B, target?: Array<T>) {
            return await new Pariah(Url).get.json<HistoricalResult<B, T>>(
                "/historical",
                {
                    api_key: apiKey,
                    base,
                    target: target ? target.join(",") : undefined,
                    date,
                }
            );
        }

        export interface ConvertResult {
            base: string;
            target: string;
            date: string;
            base_amount: number;
            converted_amount: number;
            exchange_rate: number;
        }

        export async function convert(
            apiKey: string,
            base: string,
            target: string,
            amount: number,
            date?: string
        ) {
            return await new Pariah(Url).get.json<ConvertResult>("/convert", {
                api_key: apiKey,
                base,
                target,
                amount,
                date,
            });
        }
    }

    export module CompanyEnrichment {
        export interface Result {
            name: string;
            domain: string;
            country: string;
            locality: string;
            employees_count: number;
            industry: string;
            year_founded: number;
            linkedin_url: string;
        }

        export const Url = new URL(
            "https://companyenrichment.abstractapi.com/v1/"
        );

        export async function get<F extends keyof Result>(
            apiKey: string,
            domain: string,
            fields?: Array<F>
        ) {
            return await new Pariah(Url).get.json<Pick<Result, F>>("/", {
                api_key: apiKey,
                domain,
                fields: fields?.join(","),
            });
        }
    }

    export module Timezone {
        export const Url = new URL("https://timezone.abstractapi.com/v1/");
        export interface CurrentTimeResult {
            requested_location: string;
            longitude: number;
            latitude: number;
            datetime: string;
            timezone_name: string;
            timezone_location: string;
            timezone_abbreviation: number;
            gmt_offset: number;
            is_dst: boolean;
        }

        export async function currentTime(apiKey: string, location: string) {
            return await new Pariah(Url).get.json<CurrentTimeResult>(
                "/current_time",
                {
                    api_key: apiKey,
                    location,
                }
            );
        }

        export interface ConvertTimeResult {
            base_location: Omit<CurrentTimeResult, "timezone_location">;
            target_location: Omit<CurrentTimeResult, "timezone_location">;
        }

        export async function convertTime(
            apiKey: string,
            datetime: string,
            baseLocation: string,
            targetLocation: string
        ) {
            return await new Pariah(Url).get.json<ConvertTimeResult>(
                "/convert_time",
                {
                    api_key: apiKey,
                    target_location: targetLocation,
                    base_location: baseLocation,
                    datetime,
                }
            );
        }
    }
}
