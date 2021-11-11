import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbCrwn from '../public/images/works/crwn_thumb.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <Section>
            <GridItem
              title="Placeholder Title"
              href="https://www.youtube.com/"
              thumbnail={thumbCrwn}
            ></GridItem>
          </Section>
          <Section>
            <GridItem
              title="Placeholder Title"
              href="https://www.youtube.com/"
              thumbnail={thumbCrwn}
            ></GridItem>
          </Section>
          <Section>
            <GridItem
              title="Placeholder Title"
              href="https://www.youtube.com/"
              thumbnail={thumbCrwn}
            ></GridItem>
          </Section>
          <Section>
            <GridItem
              title="Placeholder Title"
              href="https://www.youtube.com/"
              thumbnail={thumbCrwn}
            ></GridItem>
          </Section>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
