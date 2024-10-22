import { useEffect, useState } from "react"

import { fetchWord } from "../utils/api"

export const Word = () => {
  const [wordData, setWordData] = useState()

  // const fetchData = () => {
  //   fetch(URL)
  //     .then(res => res.json())
  //     .then(data => setWordData(data))
  // }

  useEffect(() => {
    const handleFetchWord = async () => {
      const response = await fetchWord()
      setWordData(response)
    }

    handleFetchWord()
  }, [])

  return (
    <section className="light">
    <h2>Word.jsx</h2>
      {wordData && (
        <>
          <p>Type: {wordData[0].fl}</p>
          <p>Shortdef: {wordData[0].shortdef[0]}</p>
          <ul>
            {wordData[0].meta.syns[0].map((synonym) => {
              return <li key={synonym}>{synonym}</li>
            })}
          </ul>
        </>
      )}
    </section>
  )
}
