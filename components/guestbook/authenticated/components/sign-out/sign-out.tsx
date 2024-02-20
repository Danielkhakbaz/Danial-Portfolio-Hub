"use client";

import { Link } from "@chakra-ui/react";

const Signout = () => {
  const handleSignOut = async () => {
    const { signOut } = await import("next-auth/react");

    await signOut();
  };

  return (
    <Link href="/guestbook" onClick={handleSignOut}>
      Sign out
    </Link>
  );
};

export default Signout;
