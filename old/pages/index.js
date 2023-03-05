import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/timeline'
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Darren Wong
            </Heading>
            <p>Software Engineer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/darren.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <Paragraph>
            {/* An E-Commerce React App called{' '}
            <NextLink href="/works/crwn">
              <Link>Crwn Clothing</Link>
            </NextLink>
            . */}
            Darren is a software engineer who is interested in learning new
            technologies and building projects with them. He also loves PC
            gaming, sports, and all things food!
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Timeline
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>
            Born in Daly City, California.
          </BioSection>
          <BioSection>
            <BioYear>2016</BioYear>
            Interned at a local startup to do front end web development.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Tutored K-12 students in Math and Reading.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Graduated from University of Nevada, Las Vegas with a Bachelor of
            Science in Computer Science.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Became a Software Developer at General Motors.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Hobbies
          </Heading>
          <Paragraph>
            Tennis, Ping Pong, Anime, Powerlifting, PC Gaming
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/WongDarren" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @WongDarren
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/darren-wong-78639588/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  LinkedIn
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
