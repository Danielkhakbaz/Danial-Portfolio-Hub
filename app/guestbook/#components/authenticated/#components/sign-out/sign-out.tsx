"use client";

import { signOut } from "next-auth/react";
import { Link } from "@chakra-ui/react";

const Signout = () => {
  const handleSignOut = async () => {
    await signOut();
  };

  return <Link onClick={handleSignOut}>Sign out</Link>;
};

export default Signout;
