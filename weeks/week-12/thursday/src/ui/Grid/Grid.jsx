import "./Grid.css"

export const Grid = ({ children, background }) => {
  return (
    <section className={`grid-section ${background}-background`}>
      {children}
    </section>
  )
}
