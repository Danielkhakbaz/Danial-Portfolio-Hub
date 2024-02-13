"use client";

import { useEffect } from "react";
import { addViewer } from "actions/blog";
import { Flex, Text } from "@chakra-ui/react";
import { FaRegEye } from "react-icons/fa6";

type ViewsProps = {
  id: number;
  view: number;
};

const Views = ({ id, view }: ViewsProps) => {
  useEffect(() => {
    addViewer({ id, view: view + 1 });
  }, [id]);

  return (
    <Flex flexDirection="column" alignItems="flex-end">
      <Text
        fontSize={13}
        display="inline-flex"
        alignItems="center"
        gap={1}
        opacity={0.6}
      >
        {view.toLocaleString("eng")} views <FaRegEye />
      </Text>
    </Flex>
  );
};

export default Views;
