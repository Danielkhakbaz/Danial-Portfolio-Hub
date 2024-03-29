import { ReactNode } from "react";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "layout/navbar/navbar";
import Footer from "layout/footer/footer";
import ScrollToTop from "utils/scroll-to-top/scroll-to-top";
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
  description:
    "Welcome to Danial's portfolio, where creativity meets innovation in every pixel.",
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
    "twitter:title": "Danial's Portfolio",
    "twitter:description":
      "Welcome to Danial's portfolio, where creativity meets innovation in every pixel.",
    "twitter:url": "https://danieloo.vercel.app/",
    "twitter:domain": "danieloo.vercel.app",
    "twitter:image": "https://danieloo.vercel.app/logos/dk-cover.jpeg",
    "twitter:card": "summary_large_image",
    "og:title": "Danial's Portfolio",
    "og:description":
      "Welcome to Danial's portfolio, where creativity meets innovation in every pixel.",
    "og:url": "https://danieloo.vercel.app/",
    "og:image": "https://danieloo.vercel.app/logos/dk-cover.jpeg",
    "og:type": "website",
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
              <SpeedInsights />
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
