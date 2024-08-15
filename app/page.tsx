import { Box, Heading, Text, Button, Container, Link } from "@chakra-ui/react";
import Layout from "../components/Layout";
import NextLink from "next/link";

export default function Home() {
  return (
    <Layout>
      <Box
        position="relative"
        bgImage="url('/hero.webp')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bgGradient="linear(to-r, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4))"
          zIndex="1"
        />
        <Container
          zIndex="2"
          textAlign="center"
          maxW="container.md"
          color="white"
        >
          <Heading
            as="h1"
            size="3xl"
            mb={6}
            fontWeight="bold"
            lineHeight="shorter"
            textShadow="0px 2px 4px rgba(0, 0, 0, 0.7)"
          >
            Simplifique a Cobrança na Sua Academia
          </Heading>
          <Text
            fontSize="lg"
            textShadow="0px 2px 4px rgba(0, 0, 0, 0.7)"
            mb={8}
          >
            Automatize as cobranças, aceite pagamentos via Pix e cartão de
            crédito. Tudo em um só lugar.
          </Text>
          <NextLink href="/sign-up" passHref>
            <Button
              as={Link}
              size="lg"
              colorScheme="teal"
              bg="#34657f"
              _hover={{ bg: "#34657f", textDecoration: "none" }}
            >
              Comece Agora
            </Button>
          </NextLink>
        </Container>
      </Box>
    </Layout>
  );
}
