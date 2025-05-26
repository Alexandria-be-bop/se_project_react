export const weatherBanners = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/day/clear-day.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "clouds",
    url: new URL("../assets/day/cloudy-day.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "fog",
    url: new URL("../assets/day/foggy-day.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "rain",
    url: new URL("../assets/day/rainy-day.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../assets/day/snowy-day.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "stormy",
    url: new URL("../assets/day/stormy-day.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/night/clear-night.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "clouds",
    url: new URL("../assets/night/cloudy-night.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "fog",
    url: new URL("../assets/night/foggy-night.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "rain",
    url: new URL("../assets/night/rainy-night.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../assets/night/snowy-night.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "storm",
    url: new URL("../assets/night/stormy-night.svg", import.meta.url).href,
  },
];

export const defaultWeatherBanner = {
  day: {
    url: new URL("../assets/day/default-day.svg", import.meta.url).href,
  },
  night: {
    url: new URL("../assets/night/default-night.svg", import.meta.url).href,
  },
};

export const coordinates = {
  latitude: 27.6648274,
  longitude: -81.5157535,
};

export const APIkey = "44c2c50ad35430a3fad5c0faced283cf";
