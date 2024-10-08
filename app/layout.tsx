import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import "./globals.css";
import { FC, PropsWithChildren } from "react";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "pague.fit",
  description: "Facilite a cobrança na sua academia",
};

const RootLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ChakraProvider>
          <AuthProvider>{children}</AuthProvider>
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
