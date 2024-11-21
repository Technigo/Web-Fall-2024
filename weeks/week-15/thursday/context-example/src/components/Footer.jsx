import { useContext } from "react"

import { ThemeContext } from "../contexts/ThemeContext"

export const Footer = () => {
  const { themeColor } = useContext(ThemeContext)

  return (
    <footer className={themeColor}>
      <p>Theme: {themeColor}</p>
    </footer>
  )
}
