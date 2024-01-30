import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { Prisma } from "prisma/client/client";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(Prisma) as never,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
};
