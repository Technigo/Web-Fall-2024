import "./App.css"
import { ArticleSection } from "./sections/ArticleSection"
import { ProjectSection } from "./sections/ProjectSection"

const App = () => {
  return (
    <main>
      <h1>My portfolio</h1>
      <ArticleSection />
      <ProjectSection />
    </main>
  )
}

export default App
