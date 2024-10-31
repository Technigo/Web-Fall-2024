import "./Card.css"

export const Card = ({ borderColor, imageSource, cardTitle, cardDescription, sectionType }) => {
  return (
    <article className={`card ${sectionType}`}>
      <img src={imageSource} className={`${borderColor}-border ${sectionType}`} />
      <div className="text-box">
        <h3>{cardTitle}</h3>
        <p>{cardDescription}</p>
        <button>Button 1</button>
        {sectionType === "project" && (
          <button>Button 2</button>
        )}
      </div>
    </article>
  )
}
