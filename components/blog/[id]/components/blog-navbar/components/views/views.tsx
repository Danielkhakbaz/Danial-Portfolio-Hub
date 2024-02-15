import CountView from "utils/count-view/count-view";
import { getAndUpdateBlogPost } from "actions/blog";
import { Flex, Text } from "@chakra-ui/react";

type ViewsProps = {
  id: number;
};

const Views = async ({ id }: ViewsProps) => {
  const post = await getAndUpdateBlogPost({ id });

  return (
    <Flex flexDirection="column" alignItems="flex-end">
      <Text
        fontSize={13}
        display="inline-flex"
        alignItems="center"
        gap={1}
        opacity={0.6}
      >
        <CountView view={post!.view} />
      </Text>
    </Flex>
  );
};

export default Views;
