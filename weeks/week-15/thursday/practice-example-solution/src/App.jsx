import { Greeting } from "./components/Greeting"
import { LanguageSwitch } from "./components/LanguageSwitch"
import { Users } from "./components/Users"

import "./App.css"

export const App = () => { 
  return (
    <main>
      <Users />
      <Greeting />
      <LanguageSwitch />
    </main>
  )
}
