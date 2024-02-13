import { ReactNode } from "react";
import type { Metadata } from "next";
import Navbar from "layout/navbar/navbar";
import Footer from "layout/footer/footer";
import ScrollToTop from "components/scroll-to-top/scroll-to-top";
import { SessionProviderFromNextAuth } from "providers/session/session";
import { ChakraProvider } from "providers/chakra/chakra";
import { LatoFont } from "theme/font";
import { Container } from "@chakra-ui/react";

type RootLayoutProps = {
  children: ReactNode;
  session: never;
};

export const metadata: Metadata = {
  title: "Danial Khakbaz",
  description: "Generated by create next app as the full-stack framework",
  icons: {
    icon: "/favicon.ico",
  },
};

const RootLayout = async ({ children, session }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={LatoFont.className}>
        <SessionProviderFromNextAuth session={session}>
          <ChakraProvider>
            <Navbar />
            <Container maxWidth="container.sm" paddingY={6}>
              {children}
            </Container>
            <Footer />
            <ScrollToTop />
          </ChakraProvider>
        </SessionProviderFromNextAuth>
      </body>
    </html>
  );
};

export default RootLayout;
