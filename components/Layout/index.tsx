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
        <NextLink href="/" passHref>
          <Image
            src="/logo.png"
            width={150}
            height={50}
            alt="pague.fit"
            priority={true}
          />
        </NextLink>
        <Stack direction="row" spacing={4}>
          <NextLink href="/" passHref>
            <Link>Home</Link>
          </NextLink>
          <NextLink href="/features" passHref>
            <Link>Funcionalidades</Link>
          </NextLink>
          <NextLink href="/pricing" passHref>
            <Link>Preços</Link>
          </NextLink>
          <NextLink href="/about" passHref>
            <Link>Sobre</Link>
          </NextLink>
          <NextLink href="/contact" passHref>
            <Link>Contato</Link>
          </NextLink>
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
