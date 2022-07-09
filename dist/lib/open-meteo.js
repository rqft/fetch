"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenMeteo = void 0;
const pariah_1 = require("../pariah");
var OpenMeteo;
(function (OpenMeteo) {
    OpenMeteo.Url = new URL("https://api.open-meteo.com/v1/");
    let WeatherInterpretationCodes;
    (function (WeatherInterpretationCodes) {
        WeatherInterpretationCodes[WeatherInterpretationCodes["CLEAR_SKY"] = 0] = "CLEAR_SKY";
        WeatherInterpretationCodes[WeatherInterpretationCodes["MAINLY_CLEAR"] = 1] = "MAINLY_CLEAR";
        WeatherInterpretationCodes[WeatherInterpretationCodes["PARTLY_CLOUDY"] = 2] = "PARTLY_CLOUDY";
        WeatherInterpretationCodes[WeatherInterpretationCodes["OVERCAST"] = 3] = "OVERCAST";
        WeatherInterpretationCodes[WeatherInterpretationCodes["FOG"] = 45] = "FOG";
        WeatherInterpretationCodes[WeatherInterpretationCodes["DEPOSITING_RIME_FOG"] = 48] = "DEPOSITING_RIME_FOG";
        WeatherInterpretationCodes[WeatherInterpretationCodes["LIGHT_DRIZZLE"] = 51] = "LIGHT_DRIZZLE";
        WeatherInterpretationCodes[WeatherInterpretationCodes["MODERATE_DRIZZLE"] = 53] = "MODERATE_DRIZZLE";
        WeatherInterpretationCodes[WeatherInterpretationCodes["HEAVY_DRIZZLE"] = 55] = "HEAVY_DRIZZLE";
        WeatherInterpretationCodes[WeatherInterpretationCodes["LIGHT_FREEZING_DRIZZLE"] = 56] = "LIGHT_FREEZING_DRIZZLE";
        WeatherInterpretationCodes[WeatherInterpretationCodes["DENSE_FREEZING_DRIZZLE"] = 57] = "DENSE_FREEZING_DRIZZLE";
        WeatherInterpretationCodes[WeatherInterpretationCodes["SLIGHT_RAIN"] = 61] = "SLIGHT_RAIN";
        WeatherInterpretationCodes[WeatherInterpretationCodes["MODERATE_RAIN"] = 63] = "MODERATE_RAIN";
        WeatherInterpretationCodes[WeatherInterpretationCodes["HEAVY_RAIN"] = 65] = "HEAVY_RAIN";
        WeatherInterpretationCodes[WeatherInterpretationCodes["LIGHT_FREEZING_RAIN"] = 66] = "LIGHT_FREEZING_RAIN";
        WeatherInterpretationCodes[WeatherInterpretationCodes["HEAVY_FREEZING_RAIN"] = 67] = "HEAVY_FREEZING_RAIN";
        WeatherInterpretationCodes[WeatherInterpretationCodes["SLIGHT_SNOWFALL"] = 71] = "SLIGHT_SNOWFALL";
        WeatherInterpretationCodes[WeatherInterpretationCodes["MODERATE_SNOWFALL"] = 73] = "MODERATE_SNOWFALL";
        WeatherInterpretationCodes[WeatherInterpretationCodes["HEAVY_SNOWFALL"] = 75] = "HEAVY_SNOWFALL";
        WeatherInterpretationCodes[WeatherInterpretationCodes["SNOW_GRAINS"] = 77] = "SNOW_GRAINS";
        WeatherInterpretationCodes[WeatherInterpretationCodes["SLIGHT_RAIN_SHOWERS"] = 80] = "SLIGHT_RAIN_SHOWERS";
        WeatherInterpretationCodes[WeatherInterpretationCodes["MODERATE_RAIN_SHOWERS"] = 81] = "MODERATE_RAIN_SHOWERS";
        WeatherInterpretationCodes[WeatherInterpretationCodes["HEAVY_RAIN_SHOWERS"] = 82] = "HEAVY_RAIN_SHOWERS";
        WeatherInterpretationCodes[WeatherInterpretationCodes["SLIGHT_SNOW_SHOWERS"] = 85] = "SLIGHT_SNOW_SHOWERS";
        WeatherInterpretationCodes[WeatherInterpretationCodes["MODERATE_SNOW_SHOWERS"] = 86] = "MODERATE_SNOW_SHOWERS";
        WeatherInterpretationCodes[WeatherInterpretationCodes["THUNDERSTORM"] = 95] = "THUNDERSTORM";
        WeatherInterpretationCodes[WeatherInterpretationCodes["THUNDERSTORM_WITH_SLIGHT_HAIL"] = 96] = "THUNDERSTORM_WITH_SLIGHT_HAIL";
        WeatherInterpretationCodes[WeatherInterpretationCodes["THUNDERSTORM_WITH_MODERATE_HAIL"] = 99] = "THUNDERSTORM_WITH_MODERATE_HAIL";
    })(WeatherInterpretationCodes = OpenMeteo.WeatherInterpretationCodes || (OpenMeteo.WeatherInterpretationCodes = {}));
    let TimeFormat;
    (function (TimeFormat) {
        TimeFormat["ISO"] = "iso8601";
        TimeFormat["UNIX"] = "unixtime";
    })(TimeFormat = OpenMeteo.TimeFormat || (OpenMeteo.TimeFormat = {}));
    class API extends pariah_1.Pariah {
        constructor() {
            super(OpenMeteo.Url);
        }
        async forecast(body) {
            const newBody = {
                ...body,
                hourly: body.hourly ? body.hourly.join(",") : undefined,
                daily: body.daily ? body.daily.join(",") : undefined,
            };
            return this.get.json("/forecast", newBody);
        }
    }
    OpenMeteo.API = API;
})(OpenMeteo = exports.OpenMeteo || (exports.OpenMeteo = {}));
