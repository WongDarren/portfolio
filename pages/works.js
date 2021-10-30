import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';

import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import thumbCrwn from '../public/images/works/crwn_thumb.png';

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="crwn" title="Crwn Clothing" thumbnail={thumbCrwn}>
            My first React app - a clothing e-commerce site.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="crwn" title="Crwn Clothing" thumbnail={thumbCrwn}>
            My first React app - a clothing e-commerce site.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="crwn" title="Crwn Clothing" thumbnail={thumbCrwn}>
            My first React app - a clothing e-commerce site.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
