import {
  Box,
  Center,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Heading,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Wannabe">
    <Container>
      <Title>
        Wannabe <Badge>2015</Badge>
      </Title>
      <P>
        Wannabe is an independent online store, selling high-end iconic
        collectibles of action figures and props for lovers and newbies
        worldwide.
      </P>

      <List ml={4} my={4}>
        {' '}
        <ListItem>
          <Meta>Websit</Meta>
          <Link href="https://www.wannabe.toys/">
            https://www.wannabe.toys/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>GSAP, three.js, core.js, NODE.js</span>
          </ListItem>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Serves Over 30,000 Daily visitors Everyday</Center>
      </Heading>

      <WorkImage src="/images/works/wannabe.png" alt="Wannabe" />
      <SimpleGrid>
        {' '}
        <WorkImage src="/images/works/wannabe-2.png" alt="Wannabe" />
        <WorkImage src="/images/works/wannabe-3.png" alt="Wannabe" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
