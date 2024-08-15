"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import NextLink from "next/link";

const schema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {};

  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={10}
    >
      <Box mb={10}>
        <Image
          style={{ margin: "0 auto" }}
          src="/logo2.png"
          alt="pague.fit"
          width={240}
          height={120}
        />
      </Box>
      <Box
        mx="auto"
        width="100%"
        maxW="md"
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
      >
        <Heading as="h2" size="lg" textAlign="center" mb={6}>
          Entrar
        </Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <FormControl id="email" isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input type="email" {...register("email")} />
              <Text color="red.500" fontSize="sm">
                {errors.email?.message}
              </Text>
            </FormControl>
            <FormControl id="password" isInvalid={!!errors.password}>
              <FormLabel>Senha</FormLabel>
              <Input type="password" {...register("password")} />
              <Text color="red.500" fontSize="sm">
                {errors.password?.message}
              </Text>
            </FormControl>
            <Button
              type="submit"
              background="#34657f"
              color="white"
              size="lg"
              width="full"
              mt={4}
            >
              Entrar
            </Button>
            <NextLink href="/sign-up" passHref>
              <Button
                as={Link}
                type="button"
                variant="link"
                color="#34657f"
                size="sm"
                width="full"
              >
                Quero me cadastrar
              </Button>
            </NextLink>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}
