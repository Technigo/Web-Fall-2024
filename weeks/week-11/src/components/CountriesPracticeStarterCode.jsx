import { useState } from 'react'

export const CountriesPracticeStarterCode = () => {
  const [countryCode, setCountryCode] = useState("AU")
  const [data, setData] = useState(null)

  //const URL = `https://restcountries.com/v2/alpha/${countryCode}`

  const handleChange = (e) => {}

  return (
    <section className="light">
      <header>
        <h2>Country Info:</h2>
        <label htmlFor="country">Select a country:</label>
        <div>
          <select id="country" value={countryCode} onChange={handleChange}>
            <option value="AU">Australia</option>
            <option value="CA">Canada</option>
            <option value="CN">China</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="IN">India</option>
            <option value="JP">Japan</option>
            <option value="MX">Mexico</option>
          </select>
        </div>
      </header>

      {data && (
        <div>
          <h2>{data.name}</h2>
            <p>Capital: {data.capital}</p>
        </div>
      )}
    </section>
  )
}
