import { ThemeProvider } from "styled-components"
import { ArticleSection } from "./sections/ArticleSection"
import { ProjectSection } from "./sections/ProjectSection"
import { GlobalStyles } from "./styles/GlobalStyles"
import { Title } from "./ui/Typography"
import { theme } from "./styles/theme"

const App = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Title>My portfolio</Title>
        <ArticleSection />
        <ProjectSection />
      </ThemeProvider>
    </main>
  )
}

export default App
