import { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
import CountrySearch from './components/CountrySearch'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countryName, setCountryName] = useState('')
  const [countriesFiltered, setCountriesFiltered] = useState([])

  const handleInput = (e) => {
    setCountryName(e.target.value)
  }

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all').then(response => {
      setCountries(response.data)
    })
  },[])

  useEffect(() => {
    const filtered = countries.filter(country => country.name.common.toLowerCase().includes(countryName.toLowerCase()))
    setCountriesFiltered(filtered)
  },[countryName, countries])

  const countriesElement = 
    countriesFiltered.length > 10 ? 'Too many matches, please specify another filter' 
    :(countriesFiltered.length === 1 ? countriesFiltered.map(country => <Country country={country} key={country.name.common} />) 
    : countriesFiltered.map(country => 
      <div key={country.name.common}>
        <div>{country.name.common} <button onClick={() => {setCountryName(country.name.common)}}>show</button></div>
      </div>)
  )

  return (
    <div>
      <CountrySearch handleInput={handleInput} countryName={countryName}/>
      {countryName ? countriesElement : 'search for a country'}
    </div>
  );
}

export default App;
