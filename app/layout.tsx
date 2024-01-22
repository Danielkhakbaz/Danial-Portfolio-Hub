import { ReactNode } from "react";
import type { Metadata } from "next";
import Navbar from "layout/navbar/navbar";
import Footer from "layout/footer/footer";
import { SessionProviderFromNextAuth } from "providers/session/session";
import { ChakraProvider } from "providers/chakra/chakra";
import { LatoFont } from "theme/font";
import { Container } from "@chakra-ui/react";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Danial Khakbaz",
  description: "Generated by create next app",
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={LatoFont.className}>
        <SessionProviderFromNextAuth>
          <ChakraProvider>
            <Navbar />
            <Container maxWidth="container.sm" paddingY={6}>
              {children}
            </Container>
            <Footer />
          </ChakraProvider>
        </SessionProviderFromNextAuth>
      </body>
    </html>
  );
};

export default RootLayout;
