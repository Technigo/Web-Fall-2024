import { CountriesFinished } from './components/CountriesFinished'
import { CountriesPracticeStarterCode } from './components/CountriesPracticeStarterCode'
import { Text } from './components/Text'
import { Username } from './components/Username'
import { Word } from './components/Word'

import './App.css'

const App = () => {
  return (
    <>
      <h1>Component lifecycle</h1>
      <Word />
      <Username />
      {/* <CountriesFinished /> */}
      <CountriesPracticeStarterCode />
      <Text />
    </>
  )
}

export default App
