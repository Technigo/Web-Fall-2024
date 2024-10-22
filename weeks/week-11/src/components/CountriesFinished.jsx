import { useEffect, useState } from 'react'

//Todo: Fetch the capital city based on the country

export const CountriesFinished = () => {
  const [countryCode, setCountryCode] = useState("CH")
  const [data, setData] = useState(null)

  useEffect(() => {
    const URL = `https://restcountries.com/v2/alpha/${countryCode}`

    fetch(URL)
      .then(res => res.json())
      .then(json => setData(json))
  },[countryCode])

  const handleChange = (e) => {
    setCountryCode(e.target.value)
  }

  return (
    <section className="light">
      <header>
        <h2>Country Info:</h2>
        <label htmlFor="country">Select a country:</label>
        <div>
          <select id="country" value={countryCode} onChange={handleChange}>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="SE">Sweden</option>
            <option value="CH">Switzerland</option>
          </select>
        </div>
      </header>

      {data && (
        <div>
          <h3>{data.name}</h3>
            <p>Capital: {data.capital}</p>
        </div>
      )}
    </section>
  )
}
