import styled from "styled-components"
import { media } from "../styles/media"
import { Text } from "../ui/Typography"
import { Button } from "../ui/Button"

//Move to its own file for consistency
const Wrapper = styled.article`
  gap: 24px;
  grid-column: span 4;
  
  ${props => props.$typeOfSection === "project" && `
    //project styling
    grid-column: span 8;
    display: flex;

    @media ${media.desktop} {
      grid-column: 2 / 8;
    }
  `}
`

//Move to its own file for consistency
const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-bottom: 10px solid goldenrod;
  border-left: 10px solid goldenrod;

  ${props => props.$sectionType === "article" ? `
    //article styling
    width: 100%;
  `
  :
  `
    //project styling
    height: 300px;
  `
  }

  //Approach 1
  /* ${props => props.$borderColor === "pink" && "border-color: hotpink;"} */
  /* ${props => props.$borderColor === "blue" && "border-color: blue;"} */

  //Approach 2
  /* border-color: ${props => props.$borderColor === "pink" && "hotpink"}; */

  //Approach 3 - using the value if possible makes it short and clean
  border-color: ${props => props.$borderColor};
`

export const Card = ({ borderColor, imageSource, cardTitle, cardDescription, sectionType }) => {
  return (
    <Wrapper $typeOfSection={sectionType}>
      <Image
        src={imageSource}
        $borderColor={borderColor}
        $sectionType={sectionType} />
      <div>
        <h3>{cardTitle}</h3>
        <Text>{cardDescription}</Text>
        <Button>Button 1</Button>
        {sectionType === "project" && (
          <Button>Button 2</Button>
        )}
      </div>
    </Wrapper>
  )
}
