import { create } from "zustand"

// Example 1 implicit return
export const useUserStore = create(set => ({
  users: [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
  ],
  addUser: user => set(state => ({
    users: [
      ...state.users,
      { id: Date.now(), ...user }
    ]
  })),
  removeUser: id => set(state => ({
    users: state.users.filter(user => user.id !== id)
  }))
}))

// Example 2 explicit return
// export const useUserStore = create((set) => ({
//   users: [
//     { id: 1, name: "John Doe", email: "john@example.com" },
//     { id: 2, name: "Jane Smith", email: "jane@example.com" },
//   ],
//   addUser: (user) => {
//     set((state) => {
//       const newUser = {
//         id: state.users.length + 1,
//         ...user
//       }
//       return {
//         users: [...state.users, newUser]
//       }
//     })
//   },
//   removeUser: (id) => {
//     set((state) => {
//       const updatedUsers = state.users.filter((user) => user.id !== id)
//       return {
//         users: updatedUsers
//       }
//     })
//   }
// }))
