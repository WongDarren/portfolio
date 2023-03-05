import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbCrwn from '../public/images/works/crwn_thumb.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="crwn" title="Crwn Clothing" thumbnail={thumbCrwn}>
              A clothing e-commerce site.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
