"use client";

import { ReactNode } from "react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

type SessionProviderFromNextAuthProps = {
  children: ReactNode;
  session: Session | undefined | null;
};

export const SessionProviderFromNextAuth = ({
  children,
  session,
}: SessionProviderFromNextAuthProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
