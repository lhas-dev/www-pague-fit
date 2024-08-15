import { Box, Heading, Text } from "@chakra-ui/react";
import Layout from "../../components/Layout";

export default function Pricing() {
  return (
    <Layout>
      <Box display="flex" flexDirection="column" textAlign="center" py={10}>
        <Heading as="h2" size="xl" mb={6}>
          Preços
        </Heading>
        <Text fontSize="lg">
          O pague.fit é gratuito para academias. Apenas uma taxa de transação de
          R$ 3,90 por cobrança.
        </Text>
      </Box>
    </Layout>
  );
}
