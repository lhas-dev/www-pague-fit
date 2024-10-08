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
import useSWRMutation from "swr/mutation";
import { useAuth } from "@/contexts/AuthContext";

const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
});

type FormData = yup.InferType<typeof schema>;

async function onSignUp(
  url: string,
  {
    arg: { email, name, password },
  }: { arg: { name: string; email: string; password: string } }
) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: email, name, email, password }),
  });
  const data = await response.json();

  if (data.jwt) {
    return data.jwt;
  } else {
    throw new Error("Erro ao se cadastrar. Tente mais tarde.");
  }
}

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { login } = useAuth();
  const { trigger } = useSWRMutation(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/auth/local/register`,
    onSignUp
  );

  const onSubmit = async (data: FormData) => {
    const jwt = await trigger(data);

    if (jwt) {
      login(jwt);
    }
  };

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
        <NextLink href="/">
          <Image
            style={{ margin: "0 auto" }}
            src="/logo2.png"
            alt="pague.fit"
            width={240}
            height={71}
            priority={true}
          />
        </NextLink>
      </Box>
      <Box
        mx="auto"
        width="100%"
        maxW="md"
        p={8}
        borderWidth={0}
        borderRadius="lg"
        boxShadow="lg"
      >
        <Heading as="h2" size="lg" textAlign="center" mb={6}>
          Cadastre-se
        </Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <FormControl id="name" isInvalid={!!errors.name}>
              <FormLabel>Nome</FormLabel>
              <Input type="text" {...register("name")} />
              <Text color="red.500" fontSize="sm">
                {errors.name?.message}
              </Text>
            </FormControl>
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
              Cadastrar
            </Button>
            <Button
              as={NextLink}
              href="/login"
              type="button"
              variant="link"
              color="#34657f"
              size="sm"
              width="full"
            >
              Já tenho conta
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}
