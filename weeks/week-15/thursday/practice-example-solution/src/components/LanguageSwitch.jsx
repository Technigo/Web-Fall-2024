import { useTranslation } from "../stores/useTranslation"

export const LanguageSwitch = () => {
  const updateLanguage = useTranslation().updateLanguage

  return (
    <section className="dark">
      <h2>Zustand Translation</h2>
      <button onClick={() => updateLanguage("es")}>Change to Spanish</button>
      <button onClick={() => updateLanguage("en")}>Change to English</button>
      <button onClick={() => updateLanguage("de")}>Change to German</button>
      <button onClick={() => updateLanguage("se")}>Change to Swedish</button>
      <button onClick={() => updateLanguage("fr")}>Change to French</button>
    </section>
  )
}
