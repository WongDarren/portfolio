import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Crwn Clothing">
      <Container>
        <Title>
          Crwn Clothing <Badge>2020</Badge>
        </Title>
        <P>
          A clothing e-commerce site created with React, Redux, Hooks, and
          GraphQL.
        </P>
        <List m1={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/WongDarren/crwn-clothing/blob/master/README.md">
              Crwn Clothing <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Code</Meta>
            <span>React, Redux, Hooks, GraphQL</span>
          </ListItem>

          <WorkImage src="/images/works/crwn_thumb.png" alt="Crwn Clothing" />
        </List>
      </Container>
    </Layout>
  )
}

export default Work
