import { useThemeStore } from "../stores/useThemeStore"

export const Footer = () => {
  const { themeColor } = useThemeStore()

  return (
    <footer className={themeColor}>
      <p>Theme: {themeColor}</p>
    </footer>
  )
}
