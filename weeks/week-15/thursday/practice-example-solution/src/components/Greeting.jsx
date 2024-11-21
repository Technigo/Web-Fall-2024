import { useTranslation } from "../stores/useTranslation"

export const Greeting = () => {
  const getTranslation = useTranslation().getTranslation

  return (
    <section className="light">
      <h2>Zustand Translation</h2>
      <p>{getTranslation("greeting")}</p>
    </section>
  )
}
