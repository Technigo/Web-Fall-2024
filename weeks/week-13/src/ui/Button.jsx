import styled from "styled-components"

export const Button = styled.button`
  padding: ${props => props.theme.spacing.medium};

  &:hover {
    background: hotpink;
  }
`
