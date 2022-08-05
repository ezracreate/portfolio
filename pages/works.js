import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbBorzo from '../public/images/works/borzo.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import { prisma } from '../lib/prisma'
import Grid from '../components/Grid'

export async function getServerSideProps() {
  // Get all works
  const works = await prisma.work.findMany()
  // Pass the data to the work page
  return {
    props: {
      works: JSON.parse(JSON.stringify(works))
    }
  }
}

export default function ({ works = [] }) {
  console.log('works')
  return (
    <Layout title="Works">
      <Container style={{ maxWidth: '100%' }}>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 3]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem id="borzo" title="Borzo" thumbnail={thumbBorzo}>
              Borzo — express same-day delivery service .
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <Grid works={works} />
          </Section>
        </SimpleGrid>
        <Section delay={0.2}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem
              id="modetokyo"
              thumbnail={thumbModeTokyo}
              title="mode.tokyo"
            >
              The mode magazine for understanding to personally enjoy Japan
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
              A VR Creative tools for fashion brands
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Old works
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem
              id="freedbtagger"
              thumbnail={thumbFreeDBTagger}
              title="freeDBTagger"
            >
              Automatic audio file tagging tool using FreeDB for Windows
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
