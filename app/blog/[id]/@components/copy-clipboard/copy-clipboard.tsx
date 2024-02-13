"use client";

import { Button, useToast } from "@chakra-ui/react";
import { FaRegCopy } from "react-icons/fa6";

const CopyClipboard = () => {
  const toast = useToast();

  const handleClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);

      toast({
        title: "URL copied to clipboard!",
        status: "success",
        colorScheme: "green",
        duration: 1500,
      });
    } catch (error) {
      toast({
        title: "Failed to copy URL to clipboard. Please try again.",
        status: "error",
        colorScheme: "red",
        duration: 1500,
      });
    }
  };

  return (
    <Button colorScheme="gray" onClick={handleClipboard}>
      <FaRegCopy />
    </Button>
  );
};

export default CopyClipboard;
