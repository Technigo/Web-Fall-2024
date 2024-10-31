import { H1, H2 } from "./components/ui/Typography";
import projects from "./projects.json";
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <H1 heading="Jennie" />
      <H1 heading="Technigo" color="orange" />
      <H2>Hello</H2>
      {/* {projects.map((p) => (
        <ProjectCard project={p} />
      ))} */}
    </div>
  );
}

export default App
