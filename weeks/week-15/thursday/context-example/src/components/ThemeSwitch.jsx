import { useContext } from "react"

import { ThemeContext } from "../contexts/ThemeContext"

export const ThemeSwitch = () => {
  const { themeColor, setThemeColor } = useContext(ThemeContext)

  return (
    <section className={themeColor}>
      <h2>Context API Theme</h2>
      <button onClick={() => setThemeColor("light")}>Light Theme</button>
      <button onClick={() => setThemeColor("dark")}>Dark Theme</button>
    </section>
  )
}
