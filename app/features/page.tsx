import { Box, Heading, Text, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaRegMoneyBillAlt, FaClock, FaMobileAlt } from "react-icons/fa";
import Layout from "../../components/Layout";

export default function Features() {
  return (
    <Layout>
      <Box textAlign="center" py={10}>
        <Heading as="h2" size="xl" mb={6}>
          Funcionalidades
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box>
            <Icon as={FaRegMoneyBillAlt} boxSize={12} color="blue.500" mb={4} />
            <Heading as="h3" size="md" mb={2}>
              Cobrança Automática
            </Heading>
            <Text>
              Envie cobranças automaticamente por SMS, E-mail ou WhatsApp.
            </Text>
          </Box>
          <Box>
            <Icon as={FaClock} boxSize={12} color="blue.500" mb={4} />
            <Heading as="h3" size="md" mb={2}>
              Notificações Simples
            </Heading>
            <Text>
              Mantenha seus alunos informados sobre vencimentos e pagamentos
              pendentes.
            </Text>
          </Box>
          <Box>
            <Icon as={FaMobileAlt} boxSize={12} color="blue.500" mb={4} />
            <Heading as="h3" size="md" mb={2}>
              Pagamentos via Pix e Cartão
            </Heading>
            <Text>Ofereça opções de pagamento flexíveis e rápidas.</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Layout>
  );
}
