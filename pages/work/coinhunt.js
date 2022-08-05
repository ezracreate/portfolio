import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Coinhunt">
    <Container>
      <Title>
        Coinhunt <Badge>2021- Present</Badge>
      </Title>
      <P>
        Coinhunt is the place to find the next big cryptocoin. This is a
        curation of the best new coins, every day. Discover the latest NFT,
        community and DeFi.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://coinhunt.cc/">
            https://coinhunt.cc/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Next.js, React Native</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://coinhunt.cc/news/1255197878">
            Zilliqa Ecosystem and Sharding Based Blockchain
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/coinhunt-2.png" alt="coinhunt" />
      <WorkImage src="/images/works/coinhunt.png" alt="coinhunt" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
