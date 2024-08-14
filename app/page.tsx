import { Box, Heading, Text, Button, Container } from "@chakra-ui/react";
import Layout from "../components/Layout";

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
          bgGradient="linear(to-r, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8))"
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
          >
            Simplifique a Cobrança na Sua Academia
          </Heading>
          <Text fontSize="lg" mb={8}>
            Automatize as cobranças, aceite pagamentos via Pix e cartão de
            crédito. Tudo em um só lugar.
          </Text>
          <Button
            size="lg"
            colorScheme="teal"
            bg="teal.400"
            _hover={{ bg: "teal.500" }}
          >
            Comece Agora
          </Button>
        </Container>
      </Box>
    </Layout>
  );
}
