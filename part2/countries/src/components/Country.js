import React from 'react';
import WeatherInfo from './WeatherInfo'

function Country({country}) {
    return (
        <div key={country.name.common}>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h2>languages</h2>
            <ul>
            {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />
            <WeatherInfo country={country}/>
        </div>
    );
}

export default Country;