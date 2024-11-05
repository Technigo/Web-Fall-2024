import styled from "styled-components"

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 24px;
  padding: 128px 160px;
  background: ${({ $background, theme }) => $background === "pink" ? theme.colors.primary : theme.colors.neutral};
`
