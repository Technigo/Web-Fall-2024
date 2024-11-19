import { Footer } from "./components/Footer"
import { ThemeSwitch } from "./components/ThemeSwitch"
import { User } from "./components/User"

import "./App.css"
import { Count } from "./components/Count"

export const App = () => { 
  return (
    <>
      <User />
      <Count />
      <ThemeSwitch />
      <Footer />
    </>
  )
}
