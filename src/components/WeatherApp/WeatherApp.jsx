import { useState } from "react";
import "./WeatherApp.css";

const apiKey = "2f099a606477573b2f5e2d598baebecf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const WeatherApp = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(false);
    const [isNight, setIsNight] = useState(false);

    const checkWeather = async (cityName) => {
        try {
            const response = await fetch(`${apiUrl}&q=${cityName}&appid=${apiKey}`);

            if (response.status === 404) {
                setError(true);
                setWeather(null);
            } else {
                const data = await response.json();
                setError(false);
                setWeather(data);

                const { sunrise, sunset } = data.sys;
                const { timezone } = data;
                const nowUtc = Math.floor(Date.now() / 1000);
                const localNow = nowUtc + timezone;
                const localSunrise = sunrise + timezone;
                const localSunset = sunset + timezone;
                setIsNight(localNow < localSunrise || localNow > localSunset);
            }
        } catch (err) {
            console.error(err);
            setError(true);
            setWeather(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (city.trim() !== "") checkWeather(city);
    };
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };


    return (
        <div className="section" >
            <div className={`weather-card ${isNight ? "night" : "day"}`}>
                <form className="search" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        onKeyDown={handleKeyDown}
                        placeholder="Enter city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button type="submit" onClick={() => sendMessage()}>Search</button>
                </form>

                {error && <p className="error">City not found</p>}

                {weather && (
                    <div className="weather">
                        <h2 className="city">{weather.name}</h2>

                        <p className="temp">{Math.round(weather.main.temp)}°C</p>
                        <p className="humidity">Humidity: {weather.main.humidity}%</p>
                        <p className="wind">Wind: {weather.wind.speed} km/h</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherApp;