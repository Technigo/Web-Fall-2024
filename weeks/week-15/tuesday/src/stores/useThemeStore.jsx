import { create } from "zustand"

export const useThemeStore = create(set => ({
  themeColor: "dark",
  isNotificationsOn: false,
  updateThemeColor: color => {
    console.log(color)
    set({ themeColor: color })
  }
}))
