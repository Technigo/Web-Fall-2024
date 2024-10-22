import { useEffect, useState } from "react"

export const Username = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const URL = "https://randomuser.me/api/"

  const fetchUser = async () => {
    setLoading(true)
    const response = await fetch(URL)
    const data = await response.json()
    setUser(data.results[0].name.first)
    setLoading(false)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <section>
      <h2>Username.jsx</h2>
      {loading ? <p>Loading...</p> : (
        <>
          <button onClick={fetchUser}>Get a new name</button>
          <p>{user}</p>
        </>
      )}
      
    </section>
  )
}
