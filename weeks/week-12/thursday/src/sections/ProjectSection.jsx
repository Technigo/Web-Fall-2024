import { Card } from "../components/Card/Card"
import { Grid } from "../ui/Grid/Grid"
import { SectionTitle } from "../ui/Typography/Typography"

export const ProjectSection = () => {
  return (
    <Grid background="white">
      <SectionTitle>My projects</SectionTitle>
      <Card
        imageSource="https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        borderColor="blue"
        cardTitle="This is a project version of the card"
        cardDescription="This is a project description"
        sectionType="project"
      />
      <Card
        imageSource="https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        borderColor="blue"
        cardTitle="This is a project version of the card"
        cardDescription="This is a project description"
        sectionType="project"
      />
      <Card
        imageSource="https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        borderColor="blue"
        cardTitle="This is a project version of the card"
        cardDescription="This is a project description"
        sectionType="project"
      />
    </Grid>
  )
}
