import { create } from "zustand"

export const useCountStore = create((set, get) => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
  doubleIfEven: () => {
    const currentCount = get().count

    if (currentCount % 2 === 0) {
      console.log("This is even, so doubling")
      set({ count: currentCount * 2 })
    } else {
      console.log("This is odd, so not doubling")
    }
  }
}))
