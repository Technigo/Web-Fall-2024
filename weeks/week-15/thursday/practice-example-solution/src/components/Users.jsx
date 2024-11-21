import { useState } from "react"

import { useUserStore } from "../stores/useUserStore"

export const Users = () => {
  const { users, addUser, removeUser } = useUserStore()
  const [newUser, setNewUser] = useState({ name: "", email: "" })

  const handleAddUser = () => {
    addUser(newUser)
    setNewUser({ name: "", email: "" })
  }

  return (
    <section className="dark">
      <h2>User Management App</h2>
      <input
        type="text"
        value={newUser.name}
        onChange={e => setNewUser({ ...newUser, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="email"
        value={newUser.email}
        onChange={e => setNewUser({ ...newUser, email: e.target.value })}
        placeholder="Email"
      />
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <span>{user.name} ({user.email})</span>
            <button onClick={() => removeUser(user.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
