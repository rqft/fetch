export declare module Abstract {
    module EmailValidation {
        enum DeliverableStates {
            DELIVERABLE = "DELIVERABLE",
            UNDELIVERABLE = "UNDELIVERABLE",
            UNKNOWN = "UNKNOWN",
            RISKY = "RISKY"
        }
        interface BoolTrue {
            value: true;
            text: "TRUE";
        }
        interface BoolFalse {
            value: false;
            text: "FALSE";
        }
        type Bool = BoolTrue | BoolFalse;
        interface Result {
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
        const Url: URL;
        function validate(apiKey: string, email: string, autoCorrect?: boolean): Promise<import("..").Data<Result>>;
    }
    module PhoneValidation {
        interface Format {
            international: string;
            local: string;
        }
        interface Country {
            code: string;
            name: string;
            prefix: string;
        }
        enum Type {
            LANDLINE = "landline",
            MOBILE = "mobile",
            SATELLITE = "satellite",
            PREMIUM = "premium",
            PAGING = "paging",
            SPECIAL = "special",
            TOLL_FREE = "toll_free",
            UNKNOWN = "unknown"
        }
        interface Result {
            phone: string;
            valid: boolean;
            format: Format;
            country: Country;
            location: string;
            type: Type;
            carrier: string;
        }
        const Url: URL;
        function validate(apiKey: string, phone: string): Promise<import("..").Data<Result>>;
    }
    module VAT {
        const Url: URL;
        interface ValidateResult {
            vat_number: string;
            is_vat_valid: boolean;
            company_name: string;
            company_address: string;
            company_country: string;
            company_country_code: string;
        }
        function validate(apiKey: string, vat: string): Promise<import("..").Data<ValidateResult>>;
        interface CalculateResult {
            amount_excl_vat: number;
            vat_amount: number;
            amount_incl_vat: number;
            vat_rate: number;
            vat_category: string;
            country_code: string;
            country_name: string;
        }
        function calculate(apiKey: string, amount: number, countryCode: string, isVatIncl?: boolean, vatCategory?: string): Promise<import("..").Data<CalculateResult>>;
        enum CountryCodes {
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
            NORTHERN_IRELAND = "XI"
        }
        interface CategoriesResult {
            country_code: string;
            country_name: string;
            standard_rate: number;
            reduced_rates: Record<string, number>;
        }
        function categories(apiKey: string, countryCode: CountryCodes): Promise<import("..").Data<CategoriesResult>>;
    }
    module IBANValidation {
        interface Result {
            iban: string;
            is_valid: boolean;
        }
        const Url: URL;
        function validate(apiKey: string, iban: string): Promise<import("..").Data<Result>>;
    }
    module IpGeolocation {
        interface Security {
            is_vpn: boolean;
        }
        interface Timezone {
            name: string;
            abbreviation: string;
            gmt_offset: number;
            current_time: string;
            is_dst: boolean;
        }
        interface Flag {
            svg: string;
            png: string;
            emoji: string;
            unicode: string;
        }
        interface Currency {
            currency_name: string;
            currency_code: string;
        }
        enum ConnectionType {
            DIALUP = "dialup",
            CABLE = "cable",
            DSL = "dsl",
            CELLULAR = "cellular",
            CORPORATE = "corporate"
        }
        interface Connection {
            connection_type: ConnectionType;
            autonomous_system_number: number;
            autonomous_system_organization: string;
            isp_name: string;
            organization_name: string;
        }
        interface Result {
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
        const Url: URL;
        function locate<F extends keyof Result>(apiKey: string, ipAddress: string, fields?: Array<F>): Promise<import("..").Data<Pick<Result, F>>>;
    }
    module Holidays {
        interface Result {
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
        const Url: URL;
        type Day = `${number}` | `${number}/${number}` | `${number}/${number}/${number}`;
        function get(apiKey: string, country: string, date: Day): Promise<import("..").Data<Result[]>>;
    }
    module ExchangeRates {
        const Url: URL;
        interface LiveResult<B extends string, T extends string> {
            base: B;
            last_updated: string;
            exchange_rates: Record<T, number>;
        }
        function live<B extends string, T extends string = string>(apiKey: string, base: B, target?: Array<T>): Promise<import("..").Data<LiveResult<B, T>>>;
        type HistoricalResult<B extends string, T extends string> = Omit<LiveResult<B, T>, "last_updated"> & {
            date: string;
        };
        function historical<B extends string, T extends string = string>(apiKey: string, date: string, base: B, target?: Array<T>): Promise<import("..").Data<HistoricalResult<B, T>>>;
        interface ConvertResult {
            base: string;
            target: string;
            date: string;
            base_amount: number;
            converted_amount: number;
            exchange_rate: number;
        }
        function convert(apiKey: string, base: string, target: string, amount: number, date?: string): Promise<import("..").Data<ConvertResult>>;
    }
    module CompanyEnrichment {
        interface Result {
            name: string;
            domain: string;
            country: string;
            locality: string;
            employees_count: number;
            industry: string;
            year_founded: number;
            linkedin_url: string;
        }
        const Url: URL;
        function get<F extends keyof Result>(apiKey: string, domain: string, fields?: Array<F>): Promise<import("..").Data<Pick<Result, F>>>;
    }
    module Timezone {
        const Url: URL;
        interface CurrentTimeResult {
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
        function currentTime(apiKey: string, location: string): Promise<import("..").Data<CurrentTimeResult>>;
        interface ConvertTimeResult {
            base_location: Omit<CurrentTimeResult, "timezone_location">;
            target_location: Omit<CurrentTimeResult, "timezone_location">;
        }
        function convertTime(apiKey: string, datetime: string, baseLocation: string, targetLocation: string): Promise<import("..").Data<ConvertTimeResult>>;
    }
}
