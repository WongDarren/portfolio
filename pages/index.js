import NextLink from 'next/link';
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer.
      </Box>

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
          Works
        </Heading>
        <Paragraph>
          An E-Commerce React App called{' '}
          <NextLink href="/works/crwn">
            <Link>Crwn Clothing</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects">
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
          <BioYear>1997</BioYear>
          Born in Daly City, California
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Graduated from University of Nevada, Las Vegas. Bachelor of Science in
          Computer Science.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Moved to Austin, TX.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Hobbies
        </Heading>
        <Paragraph>Tennis, Ping Pong, Anime, Powerlifting, PC Gaming</Paragraph>
      </Section>
    </Container>
  );
};

export default Page;
