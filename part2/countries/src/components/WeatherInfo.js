import { useState, useEffect } from 'react';
import axios from 'axios'

function WeatherInfo({country}) {
    const [countryWeather, setCountryWeather] = useState([])

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.capitalInfo.latlng[0]}&lon=${country.capitalInfo.latlng[1]}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`)
        .then(response => {
            setCountryWeather(response.data)
        })
    },[country])

    return (
        <div>
            <h2>Weather in {country.capital}</h2>
            <p>temperature {countryWeather.main?.temp} Celsius</p>
            <p>wind {countryWeather.wind?.speed} m/s</p>
        </div>
    );
}

export default WeatherInfo;