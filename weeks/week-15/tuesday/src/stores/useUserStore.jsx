import { create } from "zustand"

export const useUserStore = create(set => ({
  userName: "",
  isLoggedIn: false,
  messages: [
    "hi",
    "ho"
  ],
  updateUserName: newUserName => {
    set({ userName: newUserName })
  }
}))
