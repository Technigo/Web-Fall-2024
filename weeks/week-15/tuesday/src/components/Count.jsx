import { useCountStore } from "../stores/useCountStore"
import { logCount } from "../utils/logCount"

export const Count = () => {
  const { count, increment, decrement, doubleIfEven } = useCountStore()

  return (
    <section className="light">
      <h2>Count</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={doubleIfEven}>Double if even</button>
      <button onClick={logCount}>Log</button>
    </section>
  )
}