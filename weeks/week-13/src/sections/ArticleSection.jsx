import { Card } from "../components/Card"
import { Grid } from "../ui/Grid"
import { SectionTitle } from "../ui/Typography"

export const ArticleSection = () => {
  return (
    <Grid $background="pink">
      <SectionTitle>My articles</SectionTitle>
      <Card
        imageSource="https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        borderColor="hotpink"
        cardTitle="This is an article version of the card"
        cardDescription="This is an article description"
        sectionType="article"
      />
      <Card
        imageSource="https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        borderColor="hotpink"
        cardTitle="This is an article version of the card"
        cardDescription="This is an article description"
        sectionType="article"
      />
      <Card
        imageSource="https://plus.unsplash.com/premium_photo-1675451537771-0dd5b06b3985?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        borderColor="hotpink"
        cardTitle="This is an article version of the card"
        cardDescription="This is an article description"
        sectionType="article"
      />
    </Grid>
  )
}
