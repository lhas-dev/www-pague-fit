import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import Layout from "../../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <Box textAlign="center" px={10} py={10}>
        <Heading as="h2" size="xl" mb={6}>
          Contato
        </Heading>
        <FormControl id="name" mb={4}>
          <FormLabel>Nome</FormLabel>
          <Input placeholder="Seu nome" />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Seu email" />
        </FormControl>
        <FormControl id="message" mb={4}>
          <FormLabel>Mensagem</FormLabel>
          <Textarea placeholder="Sua mensagem" />
        </FormControl>
        <Button colorScheme="blue" size="lg">
          Enviar
        </Button>
      </Box>
    </Layout>
  );
}
