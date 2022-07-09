import { Data } from "../data";
import { Pariah } from "../pariah";
export declare module OpenMeteo {
    const Url: URL;
    enum WeatherInterpretationCodes {
        CLEAR_SKY = 0,
        MAINLY_CLEAR = 1,
        PARTLY_CLOUDY = 2,
        OVERCAST = 3,
        FOG = 45,
        DEPOSITING_RIME_FOG = 48,
        LIGHT_DRIZZLE = 51,
        MODERATE_DRIZZLE = 53,
        HEAVY_DRIZZLE = 55,
        LIGHT_FREEZING_DRIZZLE = 56,
        DENSE_FREEZING_DRIZZLE = 57,
        SLIGHT_RAIN = 61,
        MODERATE_RAIN = 63,
        HEAVY_RAIN = 65,
        LIGHT_FREEZING_RAIN = 66,
        HEAVY_FREEZING_RAIN = 67,
        SLIGHT_SNOWFALL = 71,
        MODERATE_SNOWFALL = 73,
        HEAVY_SNOWFALL = 75,
        SNOW_GRAINS = 77,
        SLIGHT_RAIN_SHOWERS = 80,
        MODERATE_RAIN_SHOWERS = 81,
        HEAVY_RAIN_SHOWERS = 82,
        SLIGHT_SNOW_SHOWERS = 85,
        MODERATE_SNOW_SHOWERS = 86,
        THUNDERSTORM = 95,
        THUNDERSTORM_WITH_SLIGHT_HAIL = 96,
        THUNDERSTORM_WITH_MODERATE_HAIL = 99
    }
    interface Err {
        error: boolean;
        reason: string;
    }
    interface Unit {
        TEMPERATURE: "°C" | "°F";
        PERCENT: "%";
        PRESSURE: "hPa";
        SPEED: "km/h" | "m/s" | "mph" | "knots";
        DEGREE: "°";
        RADIATION: "W/m²";
        VAPOR_PRESSURE: "kPa";
        DISTANCE_SMALL: "mm" | "inch";
        VOLUME: "m³/m³";
    }
    interface Hourly {
        temperature_2m: Unit["TEMPERATURE"];
        relativehumidity_2m: Unit["PERCENT"];
        dewpoint_2m: Unit["TEMPERATURE"];
        apparent_temperature: Unit["TEMPERATURE"];
        pressure_msl: Unit["PRESSURE"];
        surface_pressure: Unit["PRESSURE"];
        cloudcover: Unit["PERCENT"];
        cloudcover_low: Unit["PERCENT"];
        cloudcover_mid: Unit["PERCENT"];
        cloudcover_high: Unit["PERCENT"];
        windspeed_10m: Unit["SPEED"];
        windspeed_80m: Unit["SPEED"];
        windspeed_120m: Unit["SPEED"];
        windspeed_180m: Unit["SPEED"];
        winddirection_10m: Unit["DEGREE"];
        winddirection_80m: Unit["DEGREE"];
        winddirection_120m: Unit["DEGREE"];
        winddirection_180m: Unit["DEGREE"];
        windgusts_10m: Unit["SPEED"];
        shortwave_radiation: Unit["RADIATION"];
        direct_radiation: Unit["RADIATION"];
        direct_normal_irradiance: Unit["RADIATION"];
        diffuse_radiation: Unit["RADIATION"];
        vapor_pressure_deficit: Unit["VAPOR_PRESSURE"];
        evapotranspiration: Unit["DISTANCE_SMALL"];
        et0_fao_evapotranspiration: Unit["DISTANCE_SMALL"];
        precipitation: Unit["DISTANCE_SMALL"];
        snowfall: "cm" | "inch";
        rain: Unit["DISTANCE_SMALL"];
        showers: Unit["DISTANCE_SMALL"];
        weathercode: WeatherInterpretationCodes;
        snow_depth: "meters";
        freezinglevel_height: "meters";
        soil_temperature_0cm: Unit["TEMPERATURE"];
        soil_temperature_6cm: Unit["TEMPERATURE"];
        soil_temperature_18cm: Unit["TEMPERATURE"];
        soil_temperature_54cm: Unit["TEMPERATURE"];
        soil_moisture_0_1cm: Unit["VOLUME"];
        soil_moisture_1_3cm: Unit["VOLUME"];
        soil_moisture_3_9cm: Unit["VOLUME"];
        soil_moisture_9_27cm: Unit["VOLUME"];
        soil_moisture_27_81cm: Unit["VOLUME"];
    }
    interface Daily<Time extends TimeFormat> {
        temperature_2m_max: Unit["TEMPERATURE"];
        temperature_2m_min: Unit["TEMPERATURE"];
        apparent_temperature_max: Unit["TEMPERATURE"];
        apparent_temperature_min: Unit["TEMPERATURE"];
        precipitation_sum: "mm";
        rain_sum: "mm";
        showers_sum: "mm";
        snowfall_sum: "cm";
        precipitation_hours: "hours";
        weathercode: WeatherInterpretationCodes;
        sunrise: TimeFromFormat<Time>;
        sunset: TimeFromFormat<Time>;
        windspeed_10m_max: Unit["SPEED"];
        windgusts_10m_max: Unit["SPEED"];
        winddirection_10m_dominant: Unit["DEGREE"];
        shortwave_radiation_sum: "MJ/m²";
        et0_fao_evapotranspiration: "mm";
    }
    type RemoveNeverKeys<T> = {
        [K in keyof T as [T[K]] extends [never] ? never : K]: T[K];
    };
    type Result<H extends keyof Hourly = never, D extends keyof Daily<Time> = never, Time extends TimeFormat = TimeFormat.ISO, Current extends boolean = false> = RemoveNeverKeys<{
        latitude: number;
        longitude: number;
        elevation: number;
        generationtime_ms: number;
        utc_offset_seconds: number;
        hourly: [H] extends [never] ? never : {
            time: TimeFromFormat<Time>;
        } & Record<H, Array<number>>;
        hourly_units: [H] extends [never] ? never : {
            [key in H]: Hourly[key];
        };
        daily: [D] extends [never] ? never : {
            time: TimeFromFormat<Time>;
        } & Record<D, Array<number>>;
        daily_units: [D] extends [never] ? never : {
            [key in D]: Daily<Time>[key];
        };
        current_weather: Current extends true ? CurrentWeather<Time> : never;
    }>;
    interface CurrentWeather<Time extends TimeFormat> {
        time: TimeFromFormat<Time>;
        temperature: number;
        weathercode: WeatherInterpretationCodes;
        windspeed: number;
        winddirection: number;
    }
    type Units<Keys extends string | number | symbol, Time extends TimeFormat> = {
        [K in Keys]: Array<number>;
    } & {
        time: TimeFromFormat<Time>;
    };
    enum TimeFormat {
        ISO = "iso8601",
        UNIX = "unixtime"
    }
    type TimeFromFormat<T extends TimeFormat> = T extends TimeFormat.ISO ? string : number;
    type PastDays = 0 | 1 | 2;
    interface Input<H extends keyof Hourly, D extends keyof Daily<Time>, Time extends TimeFormat, Current extends boolean = false> {
        latitude: number;
        longitude: number;
        hourly?: Array<H>;
        daily?: Array<D>;
        current_weather?: Current;
        temperature_unit?: "celsius" | "fahrenheit";
        windspeed_unit?: "kmh" | "ms" | "mph" | "kn";
        precipitation_unit?: "mm" | "inch";
        timeformat?: TimeFormat;
        timezone?: string;
        past_days?: PastDays;
    }
    class API extends Pariah {
        constructor();
        forecast<H extends keyof Hourly = never, D extends keyof Daily<T> = never, T extends TimeFormat = TimeFormat.ISO, Current extends boolean = false>(body: Input<H, D, T, Current>): Promise<Data<Result<H, D, T, Current>>>;
    }
}
