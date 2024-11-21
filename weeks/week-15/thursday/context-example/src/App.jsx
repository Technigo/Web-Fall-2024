import { Footer } from "./components/Footer"
import { ThemeSwitch } from "./components/ThemeSwitch"
import { ThemeProvider } from "./contexts/ThemeContext"

import "./App.css"

export const App = () => { 
  return (
    <ThemeProvider>
      {/* <AnotherProvider> */}
        <ThemeSwitch />
        <Footer />
      {/* </AnotherProvider> */}
    </ThemeProvider>
  )
}
