"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abstract = void 0;
const pariah_1 = require("../pariah");
var Abstract;
(function (Abstract) {
    let EmailValidation;
    (function (EmailValidation) {
        let DeliverableStates;
        (function (DeliverableStates) {
            DeliverableStates["DELIVERABLE"] = "DELIVERABLE";
            DeliverableStates["UNDELIVERABLE"] = "UNDELIVERABLE";
            DeliverableStates["UNKNOWN"] = "UNKNOWN";
            DeliverableStates["RISKY"] = "RISKY";
        })(DeliverableStates = EmailValidation.DeliverableStates || (EmailValidation.DeliverableStates = {}));
        EmailValidation.Url = new URL("https://emailvalidation.abstractapi.com/v1/");
        function validate(apiKey, email, autoCorrect = false) {
            return new pariah_1.Pariah(EmailValidation.Url).get.json("/", {
                api_key: apiKey,
                email,
                auto_correct: autoCorrect,
            });
        }
        EmailValidation.validate = validate;
    })(EmailValidation = Abstract.EmailValidation || (Abstract.EmailValidation = {}));
    let PhoneValidation;
    (function (PhoneValidation) {
        let Type;
        (function (Type) {
            Type["LANDLINE"] = "landline";
            Type["MOBILE"] = "mobile";
            Type["SATELLITE"] = "satellite";
            Type["PREMIUM"] = "premium";
            Type["PAGING"] = "paging";
            Type["SPECIAL"] = "special";
            Type["TOLL_FREE"] = "toll_free";
            Type["UNKNOWN"] = "unknown";
        })(Type = PhoneValidation.Type || (PhoneValidation.Type = {}));
        PhoneValidation.Url = new URL("https://phonevalidation.abstractapi.com/v1/");
        function validate(apiKey, phone) {
            return new pariah_1.Pariah(PhoneValidation.Url).get.json("/", {
                api_key: apiKey,
                phone,
            });
        }
        PhoneValidation.validate = validate;
    })(PhoneValidation = Abstract.PhoneValidation || (Abstract.PhoneValidation = {}));
    let VAT;
    (function (VAT) {
        VAT.Url = new URL("https://vat.abstractapi.com/v1/");
        async function validate(apiKey, vat) {
            return await new pariah_1.Pariah(VAT.Url).get.json("/validate", {
                api_key: apiKey,
                vat,
            });
        }
        VAT.validate = validate;
        async function calculate(apiKey, amount, countryCode, isVatIncl, vatCategory) {
            return await new pariah_1.Pariah(VAT.Url).get.json("/calculate", {
                api_key: apiKey,
                amount,
                country_code: countryCode,
                is_vat_included: isVatIncl,
                vat_category: vatCategory,
            });
        }
        VAT.calculate = calculate;
        let CountryCodes;
        (function (CountryCodes) {
            CountryCodes["AUSTRIA"] = "AT";
            CountryCodes["BELGIUM"] = "BE";
            CountryCodes["BULGARIA"] = "BG";
            CountryCodes["CYPRUS"] = "CY";
            CountryCodes["CZECH_REPUBLIC"] = "CZ";
            CountryCodes["GERMANY"] = "DE";
            CountryCodes["DENMARK"] = "DK";
            CountryCodes["ESTONIA"] = "EE";
            CountryCodes["GREECE"] = "EL";
            CountryCodes["SPAIN"] = "ES";
            CountryCodes["FINLAND"] = "FI";
            CountryCodes["FRANCE"] = "FR";
            CountryCodes["CROATIA"] = "HR";
            CountryCodes["HUNGARY"] = "HU";
            CountryCodes["IRELAND"] = "IR";
            CountryCodes["ITALY"] = "IT";
            CountryCodes["LITHUANIA"] = "LT";
            CountryCodes["LUXEMBOURG"] = "LU";
            CountryCodes["LATVA"] = "LV";
            CountryCodes["MALTA"] = "MT";
            CountryCodes["THE_NETHERLANDS"] = "NL";
            CountryCodes["POLAND"] = "PL";
            CountryCodes["PORTUGAL"] = "PT";
            CountryCodes["ROMANIA"] = "RO";
            CountryCodes["SWEDEN"] = "SE";
            CountryCodes["SLOVENIA"] = "SI";
            CountryCodes["SLOVAKIA"] = "SK";
            CountryCodes["NORTHERN_IRELAND"] = "XI";
        })(CountryCodes = VAT.CountryCodes || (VAT.CountryCodes = {}));
        async function categories(apiKey, countryCode) {
            return await new pariah_1.Pariah(VAT.Url).get.json("/categories", {
                api_key: apiKey,
                country_code: countryCode,
            });
        }
        VAT.categories = categories;
    })(VAT = Abstract.VAT || (Abstract.VAT = {}));
    let IBANValidation;
    (function (IBANValidation) {
        IBANValidation.Url = new URL("https://ibanvalidation.abstractapi.com/v1/");
        function validate(apiKey, iban) {
            return new pariah_1.Pariah(IBANValidation.Url).get.json("/", {
                api_key: apiKey,
                iban,
            });
        }
        IBANValidation.validate = validate;
    })(IBANValidation = Abstract.IBANValidation || (Abstract.IBANValidation = {}));
    let IpGeolocation;
    (function (IpGeolocation) {
        let ConnectionType;
        (function (ConnectionType) {
            ConnectionType["DIALUP"] = "dialup";
            ConnectionType["CABLE"] = "cable";
            ConnectionType["DSL"] = "dsl";
            ConnectionType["CELLULAR"] = "cellular";
            ConnectionType["CORPORATE"] = "corporate";
        })(ConnectionType = IpGeolocation.ConnectionType || (IpGeolocation.ConnectionType = {}));
        IpGeolocation.Url = new URL("https://ipgeolocation.abstractapi.com/v1/");
        async function locate(apiKey, ipAddress, fields) {
            return await new pariah_1.Pariah(IpGeolocation.Url).get.json("/", {
                api_key: apiKey,
                ip_address: ipAddress,
                fields: fields?.join(","),
            });
        }
        IpGeolocation.locate = locate;
    })(IpGeolocation = Abstract.IpGeolocation || (Abstract.IpGeolocation = {}));
    let Holidays;
    (function (Holidays) {
        Holidays.Url = new URL("https://holidays.abstractapi.com/v1/");
        async function get(apiKey, country, date) {
            const [year, month, day] = date.split("/");
            return await new pariah_1.Pariah(Holidays.Url).get.json("/", {
                api_key: apiKey,
                country,
                year,
                month,
                day,
            });
        }
        Holidays.get = get;
    })(Holidays = Abstract.Holidays || (Abstract.Holidays = {}));
    let ExchangeRates;
    (function (ExchangeRates) {
        ExchangeRates.Url = new URL("https://exchangeratesapi.abstractapi.com/v1/");
        async function live(apiKey, base, target) {
            return await new pariah_1.Pariah(ExchangeRates.Url).get.json("/live", {
                api_key: apiKey,
                base,
                target: target ? target.join(",") : undefined,
            });
        }
        ExchangeRates.live = live;
        async function historical(apiKey, date, base, target) {
            return await new pariah_1.Pariah(ExchangeRates.Url).get.json("/historical", {
                api_key: apiKey,
                base,
                target: target ? target.join(",") : undefined,
                date,
            });
        }
        ExchangeRates.historical = historical;
        async function convert(apiKey, base, target, amount, date) {
            return await new pariah_1.Pariah(ExchangeRates.Url).get.json("/convert", {
                api_key: apiKey,
                base,
                target,
                amount,
                date,
            });
        }
        ExchangeRates.convert = convert;
    })(ExchangeRates = Abstract.ExchangeRates || (Abstract.ExchangeRates = {}));
    let CompanyEnrichment;
    (function (CompanyEnrichment) {
        CompanyEnrichment.Url = new URL("https://companyenrichment.abstractapi.com/v1/");
        async function get(apiKey, domain, fields) {
            return await new pariah_1.Pariah(CompanyEnrichment.Url).get.json("/", {
                api_key: apiKey,
                domain,
                fields: fields?.join(","),
            });
        }
        CompanyEnrichment.get = get;
    })(CompanyEnrichment = Abstract.CompanyEnrichment || (Abstract.CompanyEnrichment = {}));
    let Timezone;
    (function (Timezone) {
        Timezone.Url = new URL("https://timezone.abstractapi.com/v1/");
        async function currentTime(apiKey, location) {
            return await new pariah_1.Pariah(Timezone.Url).get.json("/current_time", {
                api_key: apiKey,
                location,
            });
        }
        Timezone.currentTime = currentTime;
        async function convertTime(apiKey, datetime, baseLocation, targetLocation) {
            return await new pariah_1.Pariah(Timezone.Url).get.json("/convert_time", {
                api_key: apiKey,
                target_location: targetLocation,
                base_location: baseLocation,
                datetime,
            });
        }
        Timezone.convertTime = convertTime;
    })(Timezone = Abstract.Timezone || (Abstract.Timezone = {}));
})(Abstract = exports.Abstract || (exports.Abstract = {}));
