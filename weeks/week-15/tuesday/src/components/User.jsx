import { useUserStore } from "../stores/useUserStore"

export const User = () => {
  const { updateUserName, userName } = useUserStore()

  return (
    <section className="dark">
      <h2>UserName: {userName}</h2>
      <input
        type="text"
        onChange={event => updateUserName(event.target.value)}
      />
    </section>
  )
}
