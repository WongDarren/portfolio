import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading
} from '@chakra-ui/react'
import { ExternalLinkIcon, ChevronRightIcon } from '@chakra-ui/icons'
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
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <P>
          A clothing e-commerce site created with React, Redux, Hooks, and
          GraphQL.
        </P>
        <Heading as="h3" variant="section-title">
          Features
        </Heading>
        <List m1={4} my={4}>
          <ListItem>
            <ChevronRightIcon />
            Home page with links to different clothing categories.
          </ListItem>
          <ListItem>
            <ChevronRightIcon />
            Shop page that lists all categories and four of their items.
          </ListItem>
          <ListItem>
            <ChevronRightIcon />
            Sign in functionality implemented using Google Firebase.
          </ListItem>
          <ListItem>
            <ChevronRightIcon />
            Add items to card and remove items from cart.
          </ListItem>
          <ListItem>
            <ChevronRightIcon />
            Checkout items in cart - payment handled by Stripe API.
          </ListItem>
        </List>
        <List m1={4} my={4}>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/WongDarren/crwn-clothing/blob/master/README.md">
              Crwn Clothing <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Demo</Meta>
            <Link href="https://darren-crwn.herokuapp.com/">
              Live Demo <ExternalLinkIcon mx="2px" />
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
