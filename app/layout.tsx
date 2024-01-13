import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Navbar from "layout/navbar/navbar";
import Footer from "layout/footer/footer";
import { ChakraProvider } from "providers/chakra-provider";
import { Container } from "@chakra-ui/react";

type RootLayoutProps = {
  children: React.ReactNode;
};

const LatoFont = Lato({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Danial Khakbaz",
  description: "Generated by create next app",
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={LatoFont.className}>
        <ChakraProvider>
          <Navbar />
          <Container maxWidth="container.sm" paddingY={6}>
            {children}
          </Container>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
