import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Pioneer">
    <Container>
      <Title>
        Pioneer <Badge>2019-present</Badge>
      </Title>
      <P>
        Pioneer recommends new music you may like based on your music
        preferences by recognizing your favorite songs stored in your device.
        You can listen to recommended music just like a radio!
      </P>
      <P>
        This service has been closed. Thank you for over 130,000 registered
        users!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://cornrevolution.resn.global/">
            https://cornrevolution.resn.global/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://go.pioneer.com/cornrevolution-podcast">
            Visit Corn Revolution Podcast <ExternalLinkIcon />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>GSAP, three.js, core.js, NODE.js</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Highly Appreciated work Till now</Center>
      </Heading>

      <SimpleGrid columns={1} gap={1}>
        <WorkImage src="/images/works/corn.png" alt="Pioneer" />
        <WorkImage src="/images/works/corn-2.png" alt="Pioneer" />
        <WorkImage src="/images/works/corn-3.png" alt="Pioneer" />
      </SimpleGrid>
      <WorkImage src="/images/works/corn-4.png" alt="Pioneer" />
      <WorkImage src="/images/works/corn-5.png" alt="Pioneer" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
