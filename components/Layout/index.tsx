import { Box, Flex, Link, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Box>
      {/* Navbar */}
      <Flex
        as="nav"
        bg="#34657f"
        color="white"
        p={4}
        justify="space-between"
        align="center"
      >
        <NextLink href="/">
          <Image
            src="/logo.png"
            width={150}
            height={22}
            alt="pague.fit"
            priority={true}
          />
        </NextLink>
        <Stack direction="row" spacing={4}>
          <Link as={NextLink} href="/">
            Home
          </Link>
          <Link as={NextLink} href="/features">
            Funcionalidades
          </Link>
          <Link as={NextLink} href="/pricing">
            Preços
          </Link>
          <Link as={NextLink} href="/about">
            Sobre
          </Link>
          <Link as={NextLink} href="/contact">
            Contato
          </Link>
        </Stack>
      </Flex>

      <Box as="main">{children}</Box>

      {/* Footer */}
      <Flex
        as="footer"
        bg="#34657f"
        color="white"
        p={4}
        justify="center"
        align="center"
      >
        <Text>
          &copy; {new Date().getFullYear()} pague.fit. Todos os direitos
          reservados.
        </Text>
      </Flex>
    </Box>
  );
};

export default Layout;
