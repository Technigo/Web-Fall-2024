import { useState } from 'react'

export const Text = () => {
  const [titleText, setTitleText] = useState('')
  const [bodyText, setBodyText] = useState('')
  const [response, setResponse] = useState(null)
  
  //VS Code commands
  //option + shift + arrow to duplicate line
  //option + arrow to move line
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    
    const URL = "https://jsonplaceholder.typicode.com/posts"

    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: titleText,
          body: bodyText,
          
        })
      })
      const data = await res.json()
      setResponse(data)
    } catch (error) {
      console.log("error: ", error)
    }
    
  }

  return (
    <section className="light">
      <h2>Submit a Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={titleText}
            onChange={(e) => setTitleText(e.target.value)}
          />
        </label>
        <label>
          Body:
          <textarea
            value={bodyText}
            onChange={(e) => setBodyText(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {response && bodyText && titleText && (
        <div>
          <h2>{titleText}</h2>
          <p>{bodyText}</p>
        </div>
      )}
    </section>
  )
}
