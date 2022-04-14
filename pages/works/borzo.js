import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Borzo">
    <Container>
      <Title>
        Borzo <Badge>2018-present</Badge>
      </Title>
      <P>
        Borzo — express same-day delivery service with the great customer
        service. The best partner for your business or personal delivery needs.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, Node.js, Redux, FramerMotion, Wordpress</span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://borzodelivery.com/">
            https://borzodelivery.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Android</Meta>
          <Link href="https://play.google.com/store/apps/details?id=global.dostavista.client&referrer=adjust_reftag%3DcMsWNr08FwVQo%26utm_source%3Dwebsite%26utm_campaign%3DInternal%26utm_content%3DFooter%26utm_term%3DAndroid">
            Play Store <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>IOS</Meta>
          <Link href="https://apps.apple.com/app/id1530403049">
            App Store
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>With over '100K' User Base</Center>
      </Heading>

      <WorkImage src="/images/works/borzo.png" alt="borzo" />
      <WorkImage src="/images/works/borzo-2.png" alt="borzo" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/borzo-3.jpeg" alt="borzo" />
        <WorkImage src="/images/works/borzo-4.png" alt="borzo" />
        <WorkImage src="/images/works/borzo-5.png" alt="borzo" />
        <WorkImage src="/images/works/borzo-6.png" alt="borzo" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
