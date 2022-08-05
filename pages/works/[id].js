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
import { prisma } from '../../lib/prisma'

export const getServerSideProps = async work => {
  const id = work.params.id
  const workOne = await prisma.work.findUnique({
    where: {
      id: String(id)
    },
    select: {
      image: true,
      title: true,
      badge: true,
      description: true,
      stack: true,
      crm: true,
      website: true,
      android_link: true,
      ios_link: true,
      feature: true,
      work_img_1: true,
      work_img_2: true,
      work_img_3: true,
      work_img_4: true,
      work_img_5: true,
      work_img_6: true,
      work_img_7: true,
      work_img_8: true,
      work_img_9: true,
      work_img_10: true
    }
  })
  return {
    props: { workOne }
  }
}

export default function Singlework({ workOne }) {
  return (
    <Layout title="Pioneer">
      <Container>
        <Title>
          {workOne.title} <Badge>{workOne.badge}</Badge>
        </Title>
        <P>{workOne.description}</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href={workOne.website} target="_blank">
              {workOne.website} <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>{workOne.platform}</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="#">
              <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>{workOne.stack}</span>
          </ListItem>
        </List>
        <Heading as="h4" fontSize={16} my={6}>
          <Center>{workOne.feature}</Center>
        </Heading>
        <SimpleGrid columns={1} gap={1}>
          <WorkImage src={workOne.image ?? ''} alt={workOne.title} />
          <WorkImage src={workOne.work_img_1 ?? ''} alt={workOne.title} />
          <WorkImage src={workOne.work_img_2 ?? ''} alt={workOne.title} />
          <WorkImage src={workOne.work_img_4 ?? ''} alt={workOne.title} />
          <WorkImage src={workOne.work_img_3 ?? ''} alt={workOne.title} />
          <WorkImage src={workOne.work_img_5 ?? ''} alt={workOne.title} />
          <WorkImage src={workOne.work_img_6 ?? ''} alt={workOne.title} />
          <WorkImage src={workOne.work_img_7 ?? ''} alt={workOne.title} />
          <WorkImage src={workOne.work_img_8 ?? ''} alt={workOne.title} />
          <WorkImage src={workOne.work_img_9 ?? ''} alt={workOne.title} />
          <WorkImage src={workOne.work_img_10 ?? ''} alt={workOne.title} />
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
