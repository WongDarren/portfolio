import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import { Router } from 'next/dist/client/router'

const Main = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/ico"
          sizes="32x32"
          href="/images/favicon.ico"
        />
        <meta name="author" content="Darren Wong" />
        <meta name="description" content="Darren's Portfolio" />
        <title>Darren Wong - Home</title>
      </Head>

      <Navbar path={Router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
