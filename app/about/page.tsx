import { Box, Heading, Text } from "@chakra-ui/react";
import Layout from "../../components/Layout";

export default function About() {
  return (
    <Layout>
      <Box textAlign="center" py={10}>
        <Heading as="h2" size="xl" mb={6}>
          Sobre Nós
        </Heading>
        <Text fontSize="lg">
          O pague.fit nasceu com a missão de simplificar a gestão de pagamentos
          para academias de artes marciais.
        </Text>
      </Box>
    </Layout>
  );
}
