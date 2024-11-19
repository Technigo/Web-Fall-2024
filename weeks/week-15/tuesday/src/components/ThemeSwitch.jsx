import { useThemeStore } from "../stores/useThemeStore"

export const ThemeSwitch = () => {
  const { themeColor, updateThemeColor } = useThemeStore()
  // const themeColor = useThemeStore(state => state.themeColor)
  return (
    <section className={themeColor}>
      <h2>Zustand</h2>
      <button onClick={() => updateThemeColor("light")}>Light Theme</button>
      <button onClick={() => updateThemeColor("dark")}>Dark Theme</button>
    </section>
  )
}
