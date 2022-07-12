import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoInstagram } from 'react-icons/io5'
import { FaTelegramPlane } from 'react-icons/fa'
import thumbCorn from '../public/images/works/corn.png'
import thumbCoinhunt from '../public/images/works/coinhunt.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in Asia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nick
          </Heading>
          <p>
            Digital Craftsman ( Artist / Developer / Designer / Entreprenuer)
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/new.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Nick is a freelance and a full-stack developer based in Delhi with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called{' '}
          <NextLink href="/works/coinhunt" scroll={false}>
            <Link>Coinhunt</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Punjab (パンジャーブ), India.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed the Diploma Program in the Graduate School of Information
          Science at Delhi Institute of Science and Technology
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Worked at Google Internship! Mumbai
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Works as a freelance
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Drawing, Playing Drums, Photography, Leica, Machine
          Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://t.me/bonevibess" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<FaTelegramPlane />}
              >
                @bonevibess
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/mrprotic" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @mrprotic
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://cornrevolution.resn.global/"
            title="Pioneer"
            thumbnail={thumbCorn}
          >
            Most Appreciated Work
          </GridItem>
          <GridItem
            href="https://coinhunt.cc/"
            title="Coinhunt"
            thumbnail={thumbCoinhunt}
          >
            Place to find the next big cryptocoin.
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/work" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular Work
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
